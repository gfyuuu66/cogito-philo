import { useState } from "react";
import { Link } from "react-router-dom";
import { User, LogOut, RotateCcw, Shield, Cloud, HardDrive, Sparkles, Check } from "lucide-react";
import { useStore } from "../lib/store";
import { cloudEnabled, ADMIN_EMAIL } from "../lib/supabase";
import { NOTIONS } from "../content";
import ProgressRing from "../components/ProgressRing";

export default function Profil() {
  const store = useStore();
  const { profile } = store;

  if (profile) return <Account />;

  return <SignIn onPseudo={store.setPseudo} onOAuth={store.signInOAuth} />;
}

/* --------------- Connexion --------------- */
function SignIn({
  onPseudo,
  onOAuth,
}: {
  onPseudo: (pseudo: string, email?: string) => void;
  onOAuth: (p: "slack_oidc" | "google") => Promise<void>;
}) {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="mx-auto max-w-md px-4 py-14">
      <div className="text-center mb-8">
        <span className="grid place-items-center w-16 h-16 rounded-2xl bg-brand text-white font-display text-3xl mx-auto mb-4 shadow-soft">
          φ
        </span>
        <h1 className="font-display text-3xl font-semibold">Suis ta progression</h1>
        <p className="text-muted mt-2">Choisis un pseudo pour enregistrer tes scores et entrer au classement.</p>
      </div>

      {cloudEnabled && (
        <div className="space-y-2.5 mb-6">
          <button className="btn btn-ghost w-full" onClick={() => void onOAuth("slack_oidc")}>
            Se connecter avec Slack
          </button>
          <button className="btn btn-ghost w-full" onClick={() => void onOAuth("google")}>
            Se connecter avec Google
          </button>
          <div className="flex items-center gap-3 text-xs text-faint my-2">
            <span className="h-px bg-line flex-1" /> ou <span className="h-px bg-line flex-1" />
          </div>
        </div>
      )}

      <form
        className="card p-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (pseudo.trim()) onPseudo(pseudo, email || undefined);
        }}
      >
        <div>
          <label className="text-sm font-medium mb-1.5 block">Pseudo</label>
          <input
            autoFocus
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            placeholder="Ex. Samy, LeStoïcien…"
            className="w-full px-4 py-2.5 rounded-xl border border-line bg-surface focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">
            E-mail <span className="text-faint font-normal">(optionnel)</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="pour le badge admin"
            className="w-full px-4 py-2.5 rounded-xl border border-line bg-surface focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full" disabled={!pseudo.trim()}>
          <User size={16} /> Commencer
        </button>
      </form>

      <p className="text-xs text-faint text-center mt-4 flex items-center justify-center gap-1.5">
        {cloudEnabled ? <Cloud size={13} /> : <HardDrive size={13} />}
        {cloudEnabled
          ? "Mode cloud : classement partagé entre tous."
          : "Mode local : tes scores restent dans ce navigateur."}
      </p>
    </div>
  );
}

/* --------------- Compte --------------- */
function Account() {
  const { profile, isAdmin, points, mastery, mode, signOut, resetMyProgress, notionMastery, notionProgress } = useStore();
  if (!profile) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="card p-6 mb-6 flex items-center gap-5 flex-wrap">
        <span className="grid place-items-center w-16 h-16 rounded-2xl bg-accent-soft text-accent font-display text-3xl shrink-0">
          {profile.pseudo.charAt(0).toUpperCase()}
        </span>
        <div className="flex-1 min-w-0">
          <h1 className="font-display text-2xl flex items-center gap-2">
            {profile.pseudo}
            {isAdmin && (
              <span className="chip" style={{ color: "var(--color-brand)" }}>
                <Shield size={12} /> admin
              </span>
            )}
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
