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
}

export interface LeaderEntry {
  id: string;
  pseudo: string;
  email: string | null;
  points: number;
  mastery: number;
  isMe: boolean;
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
  // notion helpers
  notionProgress: (id: NotionId) => NotionProgress;
  notionMastery: (id: NotionId) => number;
  markCoursLu: (id: NotionId) => void;
  markFlashcardsDone: (id: NotionId) => void;
  recordQuiz: (id: NotionId, correct: number, total: number) => void;
  // session
  setPseudo: (pseudo: string, email?: string) => void;
  signInOAuth: (provider: "slack_oidc" | "google") => Promise<void>;
  signOut: () => Promise<void>;
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
  const syncTimer = useRef<number | null>(null);

  /* ---- chargement initial ---- */
  useEffect(() => {
    const users = loadUsers();
    setLocalUsers(users);

    if (mode === "cloud" && supabase) {
      supabase.auth.getSession().then(({ data }) => {
        const u = data.session?.user;
        if (u) {
          const email = u.email ?? null;
          const pseudo =
            (u.user_metadata?.full_name as string) ||
            (u.user_metadata?.name as string) ||
            (email ? email.split("@")[0] : "Élève");
          const id = u.id;
          const existing = users[id];
          setProfile({ id, pseudo, email });
          setProgress(existing?.progress ?? {});
        }
        setReady(true);
      });
      const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
        const u = session?.user;
        if (u) {
          const email = u.email ?? null;
          const pseudo =
            (u.user_metadata?.full_name as string) ||
            (u.user_metadata?.name as string) ||
            (email ? email.split("@")[0] : "Élève");
          setProfile({ id: u.id, pseudo, email });
        } else {
          setProfile(null);
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

    // sync cloud (debounce)
    if (mode === "cloud" && supabase) {
      if (syncTimer.current) window.clearTimeout(syncTimer.current);
      syncTimer.current = window.setTimeout(() => {
        void supabase!
          .from("scores")
          .upsert({
            user_id: profile.id,
            pseudo: profile.pseudo,
            email: profile.email,
            points: totalPoints(progress),
            mastery: globalMastery(progress),
            updated_at: new Date().toISOString(),
          })
          .then(() => void refreshCloudBoard());
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
      .limit(100);
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

  const setPseudo = useCallback((pseudo: string, email?: string) => {
    const id = slug(pseudo);
    const users = loadUsers();
    const existing = users[id];
    const prof: Profile = { id, pseudo: pseudo.trim() || "Élève", email: email?.toLowerCase() ?? existing?.profile.email ?? null };
    setProfile(prof);
    setProgress(existing?.progress ?? {});
    saveActive(id);
  }, []);

  const signInOAuth = useCallback(async (provider: "slack_oidc" | "google") => {
    if (!supabase) return;
    await supabase.auth.signInWithOAuth({ provider, options: { redirectTo: window.location.origin } });
  }, []);

  const signOut = useCallback(async () => {
    if (mode === "cloud" && supabase) await supabase.auth.signOut();
    setProfile(null);
    setProgress({});
    saveActive(null);
  }, [mode]);

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
        points: r.points,
        mastery: r.mastery,
        isMe: r.user_id === profile?.id,
      }));
    }
    const entries = Object.values(localUsers).map((u) => ({
      id: u.profile.id,
      pseudo: u.profile.pseudo,
      email: u.profile.email,
      points: totalPoints(u.progress),
      mastery: globalMastery(u.progress),
      isMe: u.profile.id === profile?.id,
    }));
    // s'assurer que l'utilisateur courant apparaît même sans encore de save
    if (profile && !entries.some((e) => e.id === profile.id)) {
      entries.push({ id: profile.id, pseudo: profile.pseudo, email: profile.email, points, mastery, isMe: true });
    }
    return entries.sort((a, b) => b.points - a.points);
  }, [mode, cloudBoard, localUsers, profile, points, mastery]);

  const value: StoreCtx = {
    ready,
    mode,
    profile,
    isAdmin,
    progress,
    points,
    mastery,
    leaderboard,
    notionProgress: (id) => progress[id] ?? emptyProgress(),
    notionMastery: (id) => masteryOf(progress[id] ?? emptyProgress()),
    markCoursLu,
    markFlashcardsDone,
    recordQuiz,
    setPseudo,
    signInOAuth,
    signOut,
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
