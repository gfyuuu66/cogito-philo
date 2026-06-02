import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  LogOut,
  RotateCcw,
  Shield,
  Cloud,
  HardDrive,
  Sparkles,
  Check,
  Mail,
  Lock,
  AlertCircle,
  Info,
  LayoutDashboard,
  Pencil,
  Camera,
  Trash2,
  X,
} from "lucide-react";
import { useStore } from "../lib/store";
import { cloudEnabled, ADMIN_EMAIL } from "../lib/supabase";
import { AVATAR_PRESETS, fileToAvatarDataUrl } from "../lib/avatar";
import { NOTIONS } from "../content";
import ProgressRing from "../components/ProgressRing";
import Avatar from "../components/Avatar";

export default function Profil() {
  const { profile } = useStore();
  return profile ? <Account /> : <SignIn />;
}

/* --------------- Logo Google --------------- */
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/* --------------- Connexion --------------- */
function SignIn() {
  const { setPseudo, signInOAuth, signInEmail, signUpEmail, authMessage, authBusy, clearAuthMessage } = useStore();

  // mode local : simple pseudo
  const [pseudo, setPseudo_] = useState("");
  const [localEmail, setLocalEmail] = useState("");

  // mode cloud : e-mail / mot de passe
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cloudPseudo, setCloudPseudo] = useState("");

  return (
    <div className="mx-auto max-w-md px-4 py-14">
      <div className="text-center mb-8">
        <span className="grid place-items-center w-16 h-16 rounded-2xl bg-brand text-white font-display text-3xl mx-auto mb-4 shadow-soft">
          φ
        </span>
        <h1 className="font-display text-3xl font-semibold">Suis ta progression</h1>
        <p className="text-muted mt-2">
          {cloudEnabled
            ? "Connecte-toi pour enregistrer tes scores et entrer au classement partagé."
            : "Choisis un pseudo pour enregistrer tes scores et entrer au classement."}
        </p>
      </div>

      {authMessage && (
        <div
          className="card p-3.5 mb-5 flex items-start gap-2.5 text-sm"
          style={{
            borderColor: authMessage.kind === "error" ? "var(--color-danger)" : "var(--color-brand)",
            background:
              authMessage.kind === "error"
                ? "color-mix(in oklab, var(--color-danger) 8%, var(--surface))"
                : "color-mix(in oklab, var(--color-brand) 8%, var(--surface))",
          }}
        >
          {authMessage.kind === "error" ? (
            <AlertCircle size={17} className="shrink-0 mt-0.5" style={{ color: "var(--color-danger)" }} />
          ) : (
            <Info size={17} className="shrink-0 mt-0.5" style={{ color: "var(--color-brand)" }} />
          )}
          <span>{authMessage.text}</span>
        </div>
      )}

      {cloudEnabled ? (
        <>
          <button className="btn btn-ghost w-full" disabled={authBusy} onClick={() => void signInOAuth("google")}>
            <GoogleIcon /> Continuer avec Google
          </button>

          <div className="flex items-center gap-3 text-xs text-faint my-5">
            <span className="h-px bg-line flex-1" /> ou par e-mail <span className="h-px bg-line flex-1" />
          </div>

          <div className="flex gap-1 mb-4 p-1 rounded-xl bg-surface-2">
            {(["signin", "signup"] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  clearAuthMessage();
                }}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tab === t ? "bg-surface text-ink shadow-soft" : "text-muted hover:text-ink"
                }`}
              >
                {t === "signin" ? "J'ai un compte" : "Créer un compte"}
              </button>
            ))}
          </div>

          <form
            className="card p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (tab === "signin") void signInEmail(email, password);
              else void signUpEmail(email, password, cloudPseudo);
            }}
          >
            {tab === "signup" && (
              <Field label="Pseudo" icon={<User size={15} />}>
                <input
                  value={cloudPseudo}
                  onChange={(e) => setCloudPseudo(e.target.value)}
                  placeholder="Ex. Samy, LeStoïcien…"
                  className="auth-input"
                />
              </Field>
            )}
            <Field label="E-mail" icon={<Mail size={15} />}>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="toi@exemple.com"
                className="auth-input"
              />
            </Field>
            <Field label="Mot de passe" icon={<Lock size={15} />}>
              <input
                type="password"
                required
                autoComplete={tab === "signin" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={tab === "signup" ? "6 caractères minimum" : "••••••••"}
                className="auth-input"
              />
            </Field>
            <button type="submit" className="btn btn-primary w-full" disabled={authBusy}>
              {authBusy ? "…" : tab === "signin" ? "Se connecter" : "Créer mon compte"}
            </button>
          </form>
        </>
      ) : (
        <form
          className="card p-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (pseudo.trim()) setPseudo(pseudo, localEmail || undefined);
          }}
        >
          <Field label="Pseudo" icon={<User size={15} />}>
            <input
              autoFocus
              value={pseudo}
              onChange={(e) => setPseudo_(e.target.value)}
              placeholder="Ex. Samy, LeStoïcien…"
              className="auth-input"
            />
          </Field>
          <Field label={<>E-mail <span className="text-faint font-normal">(optionnel)</span></>} icon={<Mail size={15} />}>
            <input
              type="email"
              value={localEmail}
              onChange={(e) => setLocalEmail(e.target.value)}
              placeholder="pour le badge admin"
              className="auth-input"
            />
          </Field>
          <button type="submit" className="btn btn-primary w-full" disabled={!pseudo.trim()}>
            <User size={16} /> Commencer
          </button>
        </form>
      )}

      <p className="text-xs text-faint text-center mt-5 flex items-center justify-center gap-1.5">
        {cloudEnabled ? <Cloud size={13} /> : <HardDrive size={13} />}
        {cloudEnabled
          ? "Mode cloud : classement partagé entre tous."
          : "Mode local : tes scores restent dans ce navigateur."}
      </p>
    </div>
  );
}

function Field({ label, icon, children }: { label: React.ReactNode; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-medium mb-1.5 flex items-center gap-1.5">
        {icon} {label}
      </label>
      {children}
    </div>
  );
}

/* --------------- Compte --------------- */
function Account() {
  const { profile, isAdmin, points, mastery, mode, signOut, resetMyProgress, updateProfile, notionMastery, notionProgress } =
    useStore();
  const [editing, setEditing] = useState(false);
  if (!profile) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="card p-6 mb-6 flex items-center gap-5 flex-wrap">
        <button onClick={() => setEditing((v) => !v)} className="relative shrink-0 rounded-2xl" title="Changer ma photo">
          <Avatar value={profile.avatar} name={profile.pseudo} size={64} />
          <span className="absolute -bottom-1 -right-1 grid place-items-center w-6 h-6 rounded-full bg-brand text-white border-2 border-surface">
            <Camera size={12} />
          </span>
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="font-display text-2xl flex items-center gap-2 flex-wrap">
            {profile.pseudo}
            {isAdmin && (
              <span className="chip" style={{ color: "var(--color-brand)" }}>
                <Shield size={12} /> admin
              </span>
            )}
            <button
              onClick={() => setEditing((v) => !v)}
              className="grid place-items-center w-7 h-7 rounded-lg text-muted hover:text-ink hover:bg-surface-2 transition-colors"
              title="Modifier mon nom et ma photo"
              aria-label="Modifier mon profil"
            >
              <Pencil size={14} />
            </button>
          </h1>
          {profile.email && <p className="text-sm text-muted">{profile.email}</p>}
          <p className="text-xs text-faint mt-1 flex items-center gap-1.5">
            {mode === "cloud" ? <Cloud size={12} /> : <HardDrive size={12} />}
            {mode === "cloud" ? "Connecté (cloud)" : "Profil local"}
          </p>
        </div>
        <ProgressRing value={mastery} size={72} stroke={7}>
          <span className="text-sm font-bold">{mastery}%</span>
        </ProgressRing>
      </div>

      {editing && <ProfileEditor profile={profile} onUpdate={updateProfile} onClose={() => setEditing(false)} />}

      {isAdmin && (
        <Link to="/admin" className="card card-hover p-4 mb-6 flex items-center gap-3 group">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-soft text-brand shrink-0">
            <LayoutDashboard size={18} />
          </span>
          <div className="flex-1">
            <p className="font-semibold">Tableau de bord admin</p>
            <p className="text-sm text-muted">Voir la progression détaillée de tous les joueurs.</p>
          </div>
          <span className="text-brand group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        <Stat value={points} label="points" icon={<Sparkles size={16} className="text-accent" />} />
        <Stat value={`${NOTIONS.filter((n) => notionMastery(n.id) >= 70).length}/17`} label="notions validées" />
        <Stat value={`${mastery}%`} label="maîtrise globale" />
      </div>

      <h2 className="font-display text-xl mb-3">Progression par notion</h2>
      <div className="grid sm:grid-cols-2 gap-2 mb-8">
        {NOTIONS.map((n) => {
          const p = notionProgress(n.id);
          const m = notionMastery(n.id);
          return (
            <Link key={n.id} to={`/notion/${n.id}`} className="card card-hover p-3 flex items-center gap-3">
              <ProgressRing value={m} size={40} stroke={4} color={n.couleur} />
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{n.titre}</p>
                <div className="flex gap-1 mt-1">
                  <Dot ok={p.coursLu} label="C" color={n.couleur} />
                  <Dot ok={p.flashcardsDone} label="F" color={n.couleur} />
                  <Dot ok={!!p.quizBest && p.quizBest.correct / p.quizBest.total >= 0.7} label="Q" color={n.couleur} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          className="btn btn-ghost"
          onClick={() => {
            if (confirm("Réinitialiser TA progression ?")) resetMyProgress();
          }}
        >
          <RotateCcw size={16} /> Réinitialiser ma progression
        </button>
        <button className="btn btn-ghost" onClick={() => void signOut()}>
          <LogOut size={16} /> Se déconnecter
        </button>
      </div>

      <p className="text-xs text-faint mt-6">
        Astuce : pour activer le badge admin, connecte-toi avec l'e-mail <strong>{ADMIN_EMAIL}</strong>.
      </p>
    </div>
  );
}

function ProfileEditor({
  profile,
  onUpdate,
  onClose,
}: {
  profile: { pseudo: string; avatar: string | null };
  onUpdate: (patch: { pseudo?: string; avatar?: string | null }) => Promise<void>;
  onClose: () => void;
}) {
  const [name, setName] = useState(profile.pseudo);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const setAvatar = async (value: string | null) => {
    setErr(null);
    setBusy(true);
    try {
      await onUpdate({ avatar: value });
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Erreur");
    } finally {
      setBusy(false);
    }
  };

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      setErr("Image trop lourde (8 Mo max).");
      return;
    }
    setErr(null);
    setBusy(true);
    try {
      await onUpdate({ avatar: await fileToAvatarDataUrl(file) });
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Image illisible.");
    } finally {
      setBusy(false);
    }
  };

  const saveName = async () => {
    const v = name.trim();
    if (!v || v === profile.pseudo) return;
    setBusy(true);
    try {
      await onUpdate({ pseudo: v });
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card p-6 mb-6 animate-fade-up">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg">Mon profil</h2>
        <button onClick={onClose} className="grid place-items-center w-8 h-8 rounded-lg text-muted hover:bg-surface-2" aria-label="Fermer">
          <X size={16} />
        </button>
      </div>

      {err && (
        <p className="text-sm mb-3 flex items-center gap-1.5" style={{ color: "var(--color-danger)" }}>
          <AlertCircle size={15} /> {err}
        </p>
      )}

      <label className="text-sm font-medium mb-1.5 flex items-center gap-1.5">
        <User size={15} /> Nom affiché
      </label>
      <div className="flex gap-2 mb-6">
        <input value={name} onChange={(e) => setName(e.target.value)} maxLength={40} className="auth-input" placeholder="Ton pseudo" />
        <button
          onClick={() => void saveName()}
          disabled={busy || !name.trim() || name.trim() === profile.pseudo}
          className="btn btn-primary shrink-0"
        >
          {saved ? <Check size={16} /> : "Enregistrer"}
        </button>
      </div>

      <label className="text-sm font-medium mb-2 flex items-center gap-1.5">
        <Camera size={15} /> Photo de profil
      </label>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <Avatar value={profile.avatar} name={name || profile.pseudo} size={56} />
        <button onClick={() => fileRef.current?.click()} disabled={busy} className="btn btn-ghost text-sm">
          <Camera size={15} /> Importer une photo
        </button>
        {profile.avatar && (
          <button
            onClick={() => void setAvatar(null)}
            disabled={busy}
            className="btn btn-ghost text-sm"
            style={{ color: "var(--color-danger)" }}
          >
            <Trash2 size={15} /> Retirer
          </button>
        )}
        <input ref={fileRef} type="file" accept="image/*" hidden onChange={onFile} />
      </div>

      <p className="text-xs text-muted mb-2">…ou choisis un avatar :</p>
      <div className="flex flex-wrap gap-1.5">
        {AVATAR_PRESETS.map((emo) => (
          <button
            key={emo}
            onClick={() => void setAvatar(emo)}
            disabled={busy}
            className={`grid place-items-center w-10 h-10 rounded-xl text-xl transition-colors ${
              profile.avatar === emo ? "bg-brand-soft ring-2 ring-brand" : "bg-surface-2 hover:bg-brand-soft"
            }`}
          >
            {emo}
          </button>
        ))}
      </div>
    </div>
  );
}

function Stat({ value, label, icon }: { value: React.ReactNode; label: string; icon?: React.ReactNode }) {
  return (
    <div className="card p-4 text-center">
      <div className="font-display text-2xl font-semibold tabular-nums flex items-center justify-center gap-1">
        {icon}
        {value}
      </div>
      <div className="text-xs text-muted mt-0.5">{label}</div>
    </div>
  );
}

function Dot({ ok, label, color }: { ok: boolean; label: string; color: string }) {
  return (
    <span
      className="grid place-items-center w-5 h-5 rounded text-[0.6rem] font-bold"
      style={ok ? { background: color, color: "white" } : { background: "var(--color-surface-2)", color: "var(--color-faint)" }}
      title={label}
    >
      {ok ? <Check size={11} /> : label}
    </span>
  );
}
