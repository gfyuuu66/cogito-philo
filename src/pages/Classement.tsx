import { Link } from "react-router-dom";
import { Trophy, Shield, Cloud, HardDrive, Trash2, Sparkles } from "lucide-react";
import { useStore } from "../lib/store";
import { ADMIN_EMAIL } from "../lib/supabase";
import { rankOf } from "../lib/ranks";
import Avatar from "../components/Avatar";

const medal = ["#d4af37", "#9ca3af", "#cd7f32"];

export default function Classement() {
  const { leaderboard, profile, mode, isAdmin, resetLeaderboard } = useStore();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="chip mb-3">
            <Trophy size={13} className="text-accent" /> Classement
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Tableau des scores</h1>
          <p className="text-muted mt-2 flex items-center gap-1.5 text-sm">
            {mode === "cloud" ? (
              <>
                <Cloud size={15} /> Classement partagé (cloud)
              </>
            ) : (
              <>
                <HardDrive size={15} /> Classement local (ce navigateur)
              </>
            )}
          </p>
        </div>
        {isAdmin && (
          <button
            onClick={() => {
              if (confirm("Réinitialiser tout le classement ? (action admin)")) void resetLeaderboard();
            }}
            className="btn btn-ghost text-sm"
            style={{ color: "var(--color-danger)", borderColor: "var(--color-danger)" }}
          >
            <Trash2 size={15} /> Réinitialiser
          </button>
        )}
      </header>

      {!profile && (
        <div className="card p-5 mb-6 text-center">
          <p className="text-muted mb-3">Choisis un pseudo pour apparaître dans le classement et sauvegarder tes scores.</p>
          <Link to="/profil" className="btn btn-primary mx-auto">
            Choisir mon pseudo
          </Link>
        </div>
      )}

      {leaderboard.length === 0 ? (
        <div className="card p-10 text-center text-muted">
          <Trophy size={40} className="mx-auto mb-3 opacity-30" />
          <p>Pas encore de score. Fais un quiz pour démarrer le classement !</p>
        </div>
      ) : (
        <ol className="space-y-2">
          {leaderboard.map((e, i) => {
            const admin = (e.email ?? "").toLowerCase() === ADMIN_EMAIL;
            const rank = rankOf(e.points);
            return (
              <li
                key={e.id}
                className={`card p-4 flex items-center gap-4 ${e.isMe ? "ring-2 ring-brand/40" : ""}`}
              >
                <span
                  className="grid place-items-center w-8 h-8 rounded-full font-display font-bold shrink-0 tabular-nums"
                  style={i < 3 ? { background: medal[i] + "33", color: medal[i] } : { background: "var(--color-surface-2)", color: "var(--color-muted)" }}
                >
                  {i + 1}
                </span>
                <Avatar value={e.avatar} name={e.pseudo} size={40} rounded="rounded-full" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold flex items-center gap-2 truncate">
                    {e.pseudo}
                    {e.isMe && <span className="chip text-[0.65rem]">moi</span>}
                    {admin && (
                      <span className="chip text-[0.65rem]" style={{ color: "var(--color-brand)" }}>
                        <Shield size={11} /> admin
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-faint mt-0.5">
                    {rank.emoji} {rank.title} · {e.mastery}% maîtrise
                  </p>
                  <div className="h-1.5 rounded-full bg-surface-2 mt-1.5 overflow-hidden max-w-xs">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${e.mastery}%` }} />
                  </div>
                </div>
                <span className="font-display text-xl font-bold tabular-nums flex items-center gap-1 shrink-0">
                  <Sparkles size={15} className="text-accent" /> {e.points}
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
