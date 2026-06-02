import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Shield,
  Users,
  Sparkles,
  TrendingUp,
  ChevronDown,
  Trash2,
  Cloud,
  HardDrive,
  Crown,
  Mail,
} from "lucide-react";
import { useStore, masteryOf, type PlayerDetail, type NotionProgress } from "../lib/store";
import { NOTIONS } from "../content";
import ProgressRing from "../components/ProgressRing";
import Avatar from "../components/Avatar";

const empty: NotionProgress = { coursLu: false, flashcardsDone: false, quizBest: null };

function timeAgo(iso: string | null): string {
  if (!iso) return "—";
  const diff = Date.now() - new Date(iso).getTime();
  if (Number.isNaN(diff)) return "—";
  const min = Math.floor(diff / 60000);
  if (min < 1) return "à l'instant";
  if (min < 60) return `il y a ${min} min`;
  const h = Math.floor(min / 60);
  if (h < 24) return `il y a ${h} h`;
  const d = Math.floor(h / 24);
  if (d < 30) return `il y a ${d} j`;
  return new Date(iso).toLocaleDateString("fr-FR");
}

export default function Admin() {
  const { isAdmin, players, mode, resetLeaderboard, ready } = useStore();

  if (!ready) return null;

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <span className="grid place-items-center w-16 h-16 rounded-2xl bg-surface-2 text-faint mx-auto mb-5">
          <Shield size={28} />
        </span>
        <h1 className="font-display text-2xl mb-2">Espace réservé à l'admin</h1>
        <p className="text-muted mb-6">
          Connecte-toi avec le compte administrateur pour consulter la progression des joueurs.
        </p>
        <Link to="/profil" className="btn btn-primary mx-auto">
          Se connecter
        </Link>
      </div>
    );
  }

  return <Dashboard players={players} mode={mode} onReset={resetLeaderboard} />;
}

function Dashboard({
  players,
  mode,
  onReset,
}: {
  players: PlayerDetail[];
  mode: "local" | "cloud";
  onReset: () => Promise<void>;
}) {
  const [open, setOpen] = useState<string | null>(null);

  const stats = useMemo(() => {
    const n = players.length;
    const avgMastery = n ? Math.round(players.reduce((s, p) => s + p.mastery, 0) / n) : 0;
    const totalPoints = players.reduce((s, p) => s + p.points, 0);

    // maîtrise moyenne par notion (sur l'ensemble des joueurs)
    const perNotion = NOTIONS.map((notion) => {
      const avg = n
        ? Math.round(players.reduce((s, p) => s + masteryOf(p.progress[notion.id] ?? empty), 0) / n)
        : 0;
      return { notion, avg };
    });
    const ranked = [...perNotion].sort((a, b) => b.avg - a.avg);
    return {
      n,
      avgMastery,
      totalPoints,
      best: ranked[0],
      worst: ranked[ranked.length - 1],
      perNotion,
    };
  }, [players]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-8 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="chip mb-3">
            <LayoutDashboard size={13} className="text-brand" /> Admin
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Progression des joueurs</h1>
          <p className="text-muted mt-2 flex items-center gap-1.5 text-sm">
            {mode === "cloud" ? <Cloud size={15} /> : <HardDrive size={15} />}
            {mode === "cloud" ? "Données partagées (cloud)" : "Données locales (ce navigateur)"}
          </p>
        </div>
        {players.length > 0 && (
          <button
            onClick={() => {
              if (confirm("Réinitialiser TOUT le classement ? (action admin, irréversible)")) void onReset();
            }}
            className="btn btn-ghost text-sm"
            style={{ color: "var(--color-danger)", borderColor: "var(--color-danger)" }}
          >
            <Trash2 size={15} /> Tout réinitialiser
          </button>
        )}
      </header>

      {/* Cartes de synthèse */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <SummaryCard icon={<Users size={18} className="text-brand" />} value={stats.n} label="joueurs" />
        <SummaryCard icon={<TrendingUp size={18} className="text-success" />} value={`${stats.avgMastery}%`} label="maîtrise moyenne" />
        <SummaryCard icon={<Sparkles size={18} className="text-accent" />} value={stats.totalPoints} label="points cumulés" />
        <SummaryCard
          icon={<Crown size={18} className="text-accent" />}
          value={stats.best ? `${stats.best.avg}%` : "—"}
          label={stats.best ? `top : ${stats.best.notion.titre}` : "top notion"}
          small
        />
      </div>

      {players.length === 0 ? (
        <div className="card p-10 text-center text-muted">
          <Users size={40} className="mx-auto mb-3 opacity-30" />
          <p>Aucun joueur pour l'instant. Les profils apparaîtront ici dès qu'ils commenceront à réviser.</p>
        </div>
      ) : (
        <ol className="space-y-2.5">
          {players.map((p, i) => (
            <li key={p.id} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === p.id ? null : p.id)}
                className="w-full p-4 flex items-center gap-4 text-left hover:bg-surface-2/50 transition-colors"
              >
                <span className="grid place-items-center w-7 h-7 rounded-full bg-surface-2 text-muted font-display font-bold shrink-0 tabular-nums text-sm">
                  {i + 1}
                </span>
                <Avatar value={p.avatar} name={p.pseudo} size={38} rounded="rounded-full" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold flex items-center gap-2 truncate">
                    {p.pseudo}
                    {p.isMe && <span className="chip text-[0.65rem]">moi</span>}
                  </p>
                  <p className="text-xs text-faint flex items-center gap-3 mt-0.5">
                    {p.email && (
                      <span className="flex items-center gap-1 truncate">
                        <Mail size={11} /> {p.email}
                      </span>
                    )}
                    <span className="shrink-0">maj {timeAgo(p.updatedAt)}</span>
                  </p>
                </div>
                <span className="font-display text-lg font-bold tabular-nums flex items-center gap-1 shrink-0">
                  <Sparkles size={14} className="text-accent" /> {p.points}
                </span>
                <ProgressRing value={p.mastery} size={40} stroke={4}>
                  <span className="text-[0.6rem] font-bold">{p.mastery}%</span>
                </ProgressRing>
                <ChevronDown
                  size={18}
                  className="text-faint shrink-0 transition-transform"
                  style={{ transform: open === p.id ? "rotate(180deg)" : "none" }}
                />
              </button>

              {open === p.id && (
                <div className="px-4 pb-4 pt-1 border-t border-line animate-fade-up">
                  <div className="grid sm:grid-cols-2 gap-2 mt-3">
                    {NOTIONS.map((n) => {
                      const np = p.progress[n.id] ?? empty;
                      const m = masteryOf(np);
                      const quizPct = np.quizBest && np.quizBest.total ? Math.round((np.quizBest.correct / np.quizBest.total) * 100) : null;
                      return (
                        <div key={n.id} className="flex items-center gap-3 rounded-xl bg-surface-2 px-3 py-2">
                          <ProgressRing value={m} size={34} stroke={4} color={n.couleur} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{n.titre}</p>
                            <div className="flex items-center gap-1.5 mt-1">
                              <Tag ok={np.coursLu} label="Cours" color={n.couleur} />
                              <Tag ok={np.flashcardsDone} label="Cartes" color={n.couleur} />
                              <Tag
                                ok={quizPct !== null}
                                label={quizPct !== null ? `Quiz ${quizPct}%` : "Quiz"}
                                color={n.couleur}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function SummaryCard({
  icon,
  value,
  label,
  small,
}: {
  icon: React.ReactNode;
  value: React.ReactNode;
  label: string;
  small?: boolean;
}) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-1.5 font-display text-2xl font-semibold tabular-nums">
        {icon}
        {value}
      </div>
      <div className={`text-muted mt-0.5 ${small ? "text-[0.7rem] truncate" : "text-xs"}`}>{label}</div>
    </div>
  );
}

function Tag({ ok, label, color }: { ok: boolean; label: string; color: string }) {
  return (
    <span
      className="px-1.5 py-0.5 rounded text-[0.62rem] font-semibold whitespace-nowrap"
      style={
        ok
          ? { background: color + "22", color }
          : { background: "var(--color-surface)", color: "var(--color-faint)", border: "1px solid var(--color-line)" }
      }
    >
      {label}
    </span>
  );
}
