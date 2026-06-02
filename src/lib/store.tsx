import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { NOTIONS, type NotionId } from "../content";
import { ADMIN_EMAIL, cloudEnabled, supabase, type LeaderboardRow } from "./supabase";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface NotionProgress {
  coursLu: boolean;
  flashcardsDone: boolean;
  quizBest: { correct: number; total: number } | null;
}

export type ProgressMap = Record<string, NotionProgress>;

export interface Profile {
  id: string;
  pseudo: string;
  email: string | null;
  avatar: string | null;
  /** Date de création du compte (ISO) — sert au plan de révision. */
  createdAt: string | null;
}

export interface LeaderEntry {
  id: string;
  pseudo: string;
  email: string | null;
  avatar: string | null;
  points: number;
  mastery: number;
  isMe: boolean;
}

/** Détail complet d'un joueur (pour le tableau de bord admin). */
export interface PlayerDetail {
  id: string;
  pseudo: string;
  email: string | null;
  avatar: string | null;
  points: number;
  mastery: number;
  progress: ProgressMap;
  updatedAt: string | null;
  isMe: boolean;
}

/** Message d'authentification affiché à l'utilisateur. */
export interface AuthMessage {
  kind: "error" | "info";
  text: string;
}

interface StoreCtx {
  ready: boolean;
  mode: "local" | "cloud";
  profile: Profile | null;
  isAdmin: boolean;
  progress: ProgressMap;
  points: number;
  mastery: number;
  leaderboard: LeaderEntry[];
  players: PlayerDetail[];
  authMessage: AuthMessage | null;
  authBusy: boolean;
  // notion helpers
  notionProgress: (id: NotionId) => NotionProgress;
  notionMastery: (id: NotionId) => number;
  markCoursLu: (id: NotionId) => void;
  markFlashcardsDone: (id: NotionId) => void;
  recordQuiz: (id: NotionId, correct: number, total: number) => void;
  importProgress: (map: ProgressMap) => void;
  // session
  setPseudo: (pseudo: string, email?: string) => void;
  updateProfile: (patch: { pseudo?: string; avatar?: string | null }) => Promise<void>;
  signInEmail: (email: string, password: string) => Promise<void>;
  signUpEmail: (email: string, password: string, pseudo: string) => Promise<void>;
  signOut: () => Promise<void>;
  clearAuthMessage: () => void;
  resetMyProgress: () => void;
  resetLeaderboard: () => Promise<void>;
}

/* ------------------------------------------------------------------ */
/* Constantes & helpers                                                */
/* ------------------------------------------------------------------ */

const POINTS = { cours: 20, flashcards: 15, perCorrect: 10 };

const emptyProgress = (): NotionProgress => ({
  coursLu: false,
  flashcardsDone: false,
  quizBest: null,
});

export function masteryOf(p: NotionProgress): number {
  const quiz = p.quizBest && p.quizBest.total > 0 ? (p.quizBest.correct / p.quizBest.total) * 100 : 0;
  const cours = p.coursLu ? 100 : 0;
  const flash = p.flashcardsDone ? 100 : 0;
  return Math.round((quiz + cours + flash) / 3);
}

export function pointsOf(p: NotionProgress): number {
  let pts = 0;
  if (p.coursLu) pts += POINTS.cours;
  if (p.flashcardsDone) pts += POINTS.flashcards;
  if (p.quizBest) pts += p.quizBest.correct * POINTS.perCorrect;
  return pts;
}

function totalPoints(map: ProgressMap): number {
  return Object.values(map).reduce((s, p) => s + pointsOf(p), 0);
}

function globalMastery(map: ProgressMap): number {
  const total = NOTIONS.reduce((s, n) => s + masteryOf(map[n.id] ?? emptyProgress()), 0);
  return Math.round(total / NOTIONS.length);
}

/** Valide/nettoie une progression importée (fichier de sauvegarde) avant de l'appliquer. */
function sanitizeProgress(input: unknown): ProgressMap {
  const out: ProgressMap = {};
  if (!input || typeof input !== "object") return out;
  const ids = new Set<string>(NOTIONS.map((n) => n.id));
  for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
    if (!ids.has(k) || !v || typeof v !== "object") continue;
    const p = v as Record<string, unknown>;
    const qb = p.quizBest as Record<string, unknown> | null | undefined;
    out[k] = {
      coursLu: !!p.coursLu,
      flashcardsDone: !!p.flashcardsDone,
      quizBest:
        qb && typeof qb.correct === "number" && typeof qb.total === "number"
          ? { correct: qb.correct, total: qb.total }
          : null,
    };
  }
  return out;
}

/** Traduit les erreurs Supabase en messages clairs et utiles. */
function friendlyAuthError(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("provider is not enabled") || m.includes("unsupported provider")) {
    return "La connexion Google n'est pas encore activée sur le serveur. Active le provider Google dans Supabase (voir SUPABASE.md), ou connecte-toi par e-mail en attendant.";
  }
  if (m.includes("invalid login credentials")) return "E-mail ou mot de passe incorrect.";
  if (m.includes("email not confirmed")) return "E-mail pas encore confirmé : clique le lien reçu par mail, puis reconnecte-toi.";
  if (m.includes("user already registered") || m.includes("already been registered"))
    return "Un compte existe déjà avec cet e-mail. Connecte-toi plutôt.";
  if (m.includes("password should be") || m.includes("at least"))
    return "Mot de passe trop court (6 caractères minimum).";
  if (m.includes("unable to validate email") || m.includes("invalid email")) return "E-mail invalide.";
  if (m.includes("rate limit") || m.includes("too many")) return "Trop de tentatives. Réessaie dans quelques minutes.";
  return message;
}

/* ------------------------------------------------------------------ */
/* Persistance locale                                                  */
/* ------------------------------------------------------------------ */

const LS_USERS = "cogito.users.v1";
const LS_ACTIVE = "cogito.active.v1";

interface LocalUser {
  profile: Profile;
  progress: ProgressMap;
}
type LocalUsers = Record<string, LocalUser>;

function loadUsers(): LocalUsers {
  try {
    return JSON.parse(localStorage.getItem(LS_USERS) || "{}");
  } catch {
    return {};
  }
}
function saveUsers(u: LocalUsers) {
  localStorage.setItem(LS_USERS, JSON.stringify(u));
}
function loadActive(): string | null {
  return localStorage.getItem(LS_ACTIVE);
}
function saveActive(id: string | null) {
  if (id) localStorage.setItem(LS_ACTIVE, id);
  else localStorage.removeItem(LS_ACTIVE);
}

const slug = (s: string) => s.trim().toLowerCase().replace(/\s+/g, "-").slice(0, 40) || "anon";

const pseudoFromUser = (u: { email?: string | null; user_metadata?: Record<string, unknown> }) =>
  (u.user_metadata?.full_name as string) ||
  (u.user_metadata?.name as string) ||
  (u.email ? u.email.split("@")[0] : "Élève");

/* ------------------------------------------------------------------ */
/* Contexte                                                            */
/* ------------------------------------------------------------------ */

const Ctx = createContext<StoreCtx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const mode: "local" | "cloud" = cloudEnabled ? "cloud" : "local";
  const [ready, setReady] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [progress, setProgress] = useState<ProgressMap>({});
  const [localUsers, setLocalUsers] = useState<LocalUsers>({});
  const [cloudBoard, setCloudBoard] = useState<LeaderboardRow[]>([]);
  const [authMessage, setAuthMessage] = useState<AuthMessage | null>(null);
  const [authBusy, setAuthBusy] = useState(false);
  const syncTimer = useRef<number | null>(null);
  /** Empêche d'écraser le cloud tant que la progression n'a pas été chargée depuis le cloud. */
  const cloudHydrated = useRef(false);
  /** Faux si les colonnes `progress`/`avatar` n'existent pas encore (schéma pas à jour) → on enregistre l'essentiel. */
  const hasRichCols = useRef(true);

  /* ---- chargement initial ---- */
  useEffect(() => {
    const users = loadUsers();
    setLocalUsers(users);

    if (mode === "cloud" && supabase) {
      // Récupère la progression cloud d'un utilisateur connecté, sinon retombe sur le local.
      const hydrate = async (u: {
        id: string;
        email?: string | null;
        created_at?: string;
        user_metadata?: Record<string, unknown>;
      }) => {
        const email = u.email ?? null;
        let prog: ProgressMap = users[u.id]?.progress ?? {};
        let avatar = (u.user_metadata?.avatar_url as string) || (u.user_metadata?.avatar as string) || null;
        try {
          // select("*") : ne casse pas si les colonnes `progress`/`avatar` n'existent pas encore.
          const { data } = await supabase!.from("scores").select("*").eq("user_id", u.id).maybeSingle();
          const row = data as { progress?: unknown; avatar?: string | null } | null;
          const cloudProg = (row?.progress ?? null) as ProgressMap | null;
          if (cloudProg && Object.keys(cloudProg).length) prog = cloudProg;
          if (!avatar && row?.avatar) avatar = row.avatar;
        } catch {
          /* hors-ligne : on garde la progression locale */
        }
        setProfile({ id: u.id, pseudo: pseudoFromUser(u), email, avatar, createdAt: u.created_at ?? null });
        cloudHydrated.current = true;
        setProgress(prog);
      };

      supabase.auth.getSession().then(async ({ data }) => {
        const u = data.session?.user;
        if (u) await hydrate(u);
        setReady(true);
      });

      const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === "INITIAL_SESSION") return; // déjà géré par getSession()
        const u = session?.user;
        if (u) {
          setAuthMessage(null);
          void hydrate(u);
        } else {
          cloudHydrated.current = false;
          setProfile(null);
          setProgress({});
        }
      });
      return () => sub.subscription.unsubscribe();
    } else {
      const active = loadActive();
      if (active && users[active]) {
        setProfile(users[active].profile);
        setProgress(users[active].progress);
      }
      setReady(true);
    }
  }, [mode]);

  /* ---- persistance à chaque changement de progression ---- */
  useEffect(() => {
    if (!ready || !profile) return;
    const users = { ...loadUsers(), [profile.id]: { profile, progress } };
    saveUsers(users);
    setLocalUsers(users);

    // sync cloud (debounce) — seulement après hydratation pour ne pas écraser le cloud
    if (mode === "cloud" && supabase && cloudHydrated.current) {
      if (syncTimer.current) window.clearTimeout(syncTimer.current);
      const prof = profile;
      const snapshot = progress;
      syncTimer.current = window.setTimeout(() => {
        void (async () => {
          const row: {
            user_id: string;
            pseudo: string;
            email: string | null;
            points: number;
            mastery: number;
            updated_at: string;
            avatar?: string | null;
            progress?: ProgressMap;
          } = {
            user_id: prof.id,
            pseudo: prof.pseudo,
            email: prof.email,
            points: totalPoints(snapshot),
            mastery: globalMastery(snapshot),
            updated_at: new Date().toISOString(),
          };
          if (hasRichCols.current) {
            row.progress = snapshot;
            row.avatar = prof.avatar;
          }
          const { error } = await supabase!.from("scores").upsert(row);
          // Schéma pas encore migré : on réessaie sans les colonnes riches pour ne pas bloquer la sauvegarde.
          if (error && /(progress|avatar)/i.test(error.message)) {
            hasRichCols.current = false;
            delete row.progress;
            delete row.avatar;
            await supabase!.from("scores").upsert(row);
          }
          await refreshCloudBoard();
        })();
      }, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, profile, ready, mode]);

  const refreshCloudBoard = useCallback(async () => {
    if (!supabase) return;
    const { data } = await supabase
      .from("scores")
      .select("*")
      .order("points", { ascending: false })
      .limit(200);
    if (data) setCloudBoard(data as LeaderboardRow[]);
  }, []);

  useEffect(() => {
    if (mode === "cloud") void refreshCloudBoard();
  }, [mode, refreshCloudBoard]);

  /* ---- actions ---- */
  const updateProgress = useCallback(
    (id: NotionId, fn: (p: NotionProgress) => NotionProgress) => {
      setProgress((prev) => {
        const current = prev[id] ?? emptyProgress();
        return { ...prev, [id]: fn(current) };
      });
    },
    []
  );

  const markCoursLu = useCallback((id: NotionId) => updateProgress(id, (p) => ({ ...p, coursLu: true })), [updateProgress]);
  const markFlashcardsDone = useCallback(
    (id: NotionId) => updateProgress(id, (p) => ({ ...p, flashcardsDone: true })),
    [updateProgress]
  );
  const recordQuiz = useCallback(
    (id: NotionId, correct: number, total: number) =>
      updateProgress(id, (p) => {
        const prevBest = p.quizBest?.correct ?? -1;
        return correct > prevBest ? { ...p, quizBest: { correct, total } } : p;
      }),
    [updateProgress]
  );

  /** Restaure une progression depuis une sauvegarde (remplace l'actuelle). */
  const importProgress = useCallback((map: ProgressMap) => {
    setProgress(sanitizeProgress(map));
  }, []);

  const setPseudo = useCallback((pseudo: string, email?: string) => {
    const id = slug(pseudo);
    const users = loadUsers();
    const existing = users[id];
    const prof: Profile = {
      id,
      pseudo: pseudo.trim() || "Élève",
      email: email?.toLowerCase() ?? existing?.profile.email ?? null,
      avatar: existing?.profile.avatar ?? null,
      createdAt: existing?.profile.createdAt ?? new Date().toISOString(),
    };
    setProfile(prof);
    setProgress(existing?.progress ?? {});
    saveActive(id);
  }, []);

  /** Met à jour le pseudo et/ou l'avatar (réservé aux comptes : il faut un profil). */
  const updateProfile = useCallback(
    async (patch: { pseudo?: string; avatar?: string | null }) => {
      if (!profile) return;
      const next: Profile = {
        ...profile,
        pseudo: patch.pseudo !== undefined ? patch.pseudo.trim() || profile.pseudo : profile.pseudo,
        avatar: patch.avatar !== undefined ? patch.avatar : profile.avatar,
      };
      setProfile(next);
      const users = { ...loadUsers(), [next.id]: { profile: next, progress } };
      saveUsers(users);
      setLocalUsers(users);
      if (mode === "cloud" && supabase) {
        const data: Record<string, unknown> = {};
        if (patch.pseudo !== undefined) data.full_name = next.pseudo;
        if (patch.avatar !== undefined) data.avatar_url = next.avatar;
        const { error } = await supabase.auth.updateUser({ data });
        if (error) setAuthMessage({ kind: "error", text: friendlyAuthError(error.message) });
      }
    },
    [profile, progress, mode]
  );

  const signInEmail = useCallback(async (email: string, password: string) => {
    if (!supabase) return;
    setAuthMessage(null);
    setAuthBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) setAuthMessage({ kind: "error", text: friendlyAuthError(error.message) });
    setAuthBusy(false);
  }, []);

  const signUpEmail = useCallback(async (email: string, password: string, pseudo: string) => {
    if (!supabase) return;
    setAuthMessage(null);
    setAuthBusy(true);
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { data: { full_name: pseudo.trim() || email.split("@")[0] } },
    });
    if (error) {
      setAuthMessage({ kind: "error", text: friendlyAuthError(error.message) });
    } else if (!data.session) {
      // Confirmation par e-mail requise (réglage Supabase).
      setAuthMessage({
        kind: "info",
        text: "Compte créé ✅ Vérifie ta boîte mail pour confirmer ton adresse, puis connecte-toi.",
      });
    }
    setAuthBusy(false);
  }, []);

  const signOut = useCallback(async () => {
    if (mode === "cloud" && supabase) await supabase.auth.signOut();
    cloudHydrated.current = false;
    setProfile(null);
    setProgress({});
    saveActive(null);
  }, [mode]);

  const clearAuthMessage = useCallback(() => setAuthMessage(null), []);

  const resetMyProgress = useCallback(() => {
    if (!profile) return;
    setProgress({});
  }, [profile]);

  const resetLeaderboard = useCallback(async () => {
    if (mode === "cloud" && supabase) {
      await supabase.from("scores").delete().neq("user_id", "");
      await refreshCloudBoard();
    } else {
      const keep = profile ? { [profile.id]: { profile, progress } } : {};
      saveUsers(keep);
      setLocalUsers(keep);
    }
  }, [mode, profile, progress, refreshCloudBoard]);

  /* ---- valeurs dérivées ---- */
  const points = useMemo(() => totalPoints(progress), [progress]);
  const mastery = useMemo(() => globalMastery(progress), [progress]);
  const isAdmin = (profile?.email ?? "").toLowerCase() === ADMIN_EMAIL;

  const leaderboard: LeaderEntry[] = useMemo(() => {
    if (mode === "cloud") {
      return cloudBoard.map((r) => ({
        id: r.user_id,
        pseudo: r.pseudo,
        email: r.email,
        avatar: r.user_id === profile?.id ? profile?.avatar ?? r.avatar : r.avatar,
        points: r.points,
        mastery: r.mastery,
        isMe: r.user_id === profile?.id,
      }));
    }
    const entries = Object.values(localUsers).map((u) => ({
      id: u.profile.id,
      pseudo: u.profile.pseudo,
      email: u.profile.email,
      avatar: u.profile.avatar ?? null,
      points: totalPoints(u.progress),
      mastery: globalMastery(u.progress),
      isMe: u.profile.id === profile?.id,
    }));
    // s'assurer que l'utilisateur courant apparaît même sans encore de save
    if (profile && !entries.some((e) => e.id === profile.id)) {
      entries.push({ id: profile.id, pseudo: profile.pseudo, email: profile.email, avatar: profile.avatar, points, mastery, isMe: true });
    }
    return entries.sort((a, b) => b.points - a.points);
  }, [mode, cloudBoard, localUsers, profile, points, mastery]);

  /** Détail complet par joueur (progression notion par notion) pour le tableau de bord admin. */
  const players: PlayerDetail[] = useMemo(() => {
    const list: PlayerDetail[] =
      mode === "cloud"
        ? cloudBoard.map((r) => ({
            id: r.user_id,
            pseudo: r.pseudo,
            email: r.email,
            avatar: r.user_id === profile?.id ? profile?.avatar ?? r.avatar : r.avatar,
            points: r.points,
            mastery: r.mastery,
            progress: (r.progress ?? {}) as ProgressMap,
            updatedAt: r.updated_at ?? null,
            isMe: r.user_id === profile?.id,
          }))
        : Object.values(localUsers).map((u) => ({
            id: u.profile.id,
            pseudo: u.profile.pseudo,
            email: u.profile.email,
            avatar: u.profile.avatar ?? null,
            points: totalPoints(u.progress),
            mastery: globalMastery(u.progress),
            progress: u.progress,
            updatedAt: null,
            isMe: u.profile.id === profile?.id,
          }));
    return list.sort((a, b) => b.points - a.points);
  }, [mode, cloudBoard, localUsers, profile]);

  const value: StoreCtx = {
    ready,
    mode,
    profile,
    isAdmin,
    progress,
    points,
    mastery,
    leaderboard,
    players,
    authMessage,
    authBusy,
    notionProgress: (id) => progress[id] ?? emptyProgress(),
    notionMastery: (id) => masteryOf(progress[id] ?? emptyProgress()),
    markCoursLu,
    markFlashcardsDone,
    recordQuiz,
    importProgress,
    setPseudo,
    updateProfile,
    signInEmail,
    signUpEmail,
    signOut,
    clearAuthMessage,
    resetMyProgress,
    resetLeaderboard,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
