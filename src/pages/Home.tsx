import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Compass, Network, Sparkles, Target, BookMarked, CalendarCheck, ArrowRight } from "lucide-react";
import { NOTIONS } from "../content";
import NotionCard from "../components/NotionCard";
import Constellation3D from "../components/Constellation3D";
import { useStore } from "../lib/store";
import { buildPlan } from "../lib/plan";

export default function Home() {
  const { mastery, points, notionMastery, profile } = useStore();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return NOTIONS;
    return NOTIONS.filter(
      (n) =>
        n.titre.toLowerCase().includes(s) ||
        n.sousTitre.toLowerCase().includes(s) ||
        n.definitions.some((d) => d.terme.toLowerCase().includes(s))
    );
  }, [q]);

  const validees = NOTIONS.filter((n) => notionMastery(n.id) >= 70).length;

  const plan = useMemo(
    () => buildPlan({ createdAt: profile?.createdAt ?? null, isMastered: (id) => notionMastery(id) >= 70 }),
    [profile?.createdAt, notionMastery]
  );

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Rappel plan de révision */}
      {!plan.examPassed && (
        <Link
          to="/plan"
          className="mt-4 flex items-center gap-3 rounded-2xl border border-brand/30 bg-brand-soft px-4 py-3 hover:border-brand/60 transition-colors animate-fade-up"
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand text-white shrink-0">
            <CalendarCheck size={18} />
          </span>
          <div className="flex-1 min-w-0 text-brand-ink">
            <p className="font-semibold text-sm sm:text-base">
              Bac de philo dans {plan.daysUntilBac} jour{plan.daysUntilBac > 1 ? "s" : ""}
            </p>
            <p className="text-sm opacity-80">
              {plan.finished
                ? "Toutes les notions sont maîtrisées 🎉 Continue de t'entraîner !"
                : plan.todayNotions.length > 0
                  ? `Objectif du jour : ${plan.todayNotions.length} notion${plan.todayNotions.length > 1 ? "s" : ""} à réviser.`
                  : "Objectif du jour atteint 👍 Prends de l'avance !"}
            </p>
          </div>
          <ArrowRight size={18} className="shrink-0 text-brand" />
        </Link>
      )}

      {/* Hero */}
      <section className="pt-10 pb-8 sm:pt-16 sm:pb-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
        <div className="animate-fade-up">
          <p className="chip mb-4">
            <Sparkles size={13} className="text-accent" /> Révision · Bac de philosophie
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
            Pense mieux,
            <br />
            <span className="text-brand">rédige plus fort.</span>
          </h1>
          <p className="mt-5 text-lg text-muted max-w-xl prose-philo">
            Les <strong>17 notions</strong> du programme, avec cours clairs, flashcards, quiz, citations à
            replacer et <em>plans de dissertation</em> tout faits. L'objectif : maîtriser la méthode de la
            problématique et viser le 14+.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/methode" className="btn btn-primary">
              <Compass size={18} /> La méthode
            </Link>
            <Link to="/ponts" className="btn btn-ghost">
              <Network size={18} /> Relier les notions
            </Link>
            {!profile && (
              <Link to="/profil" className="btn btn-ghost">
                <Target size={18} /> Suivre ma progression
              </Link>
            )}
          </div>
        </div>

        {/* Carte progression + constellation 3D */}
        <div className="card p-5 animate-fade-up overflow-hidden" style={{ animationDelay: "120ms" }}>
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="font-display text-xl leading-tight truncate">
                {profile ? `Salut ${profile.pseudo}` : "Ta progression"}
              </p>
              <p className="text-sm text-muted">Maîtrise des 17 notions</p>
            </div>
            <span className="chip shrink-0">
              <Sparkles size={13} className="text-accent" /> {points} pts
            </span>
          </div>

          <Constellation3D />

          <div className="grid grid-cols-3 gap-3">
            <Stat icon={<Sparkles size={16} className="text-accent" />} value={points} label="points" />
            <Stat icon={<BookMarked size={16} className="text-brand" />} value={`${validees}/17`} label="validées" />
            <Stat icon={<Target size={16} className="text-success" />} value={`${mastery}%`} label="maîtrise" />
          </div>

          {!profile && (
            <Link to="/profil" className="btn btn-ghost w-full mt-3 text-sm">
              Choisis un pseudo pour sauvegarder tes scores →
            </Link>
          )}
        </div>
      </section>

      {/* Search */}
      <div className="sticky top-16 z-30 -mx-4 px-4 py-3 bg-[color-mix(in_oklab,var(--canvas)_85%,transparent)] backdrop-blur-md border-y border-line">
        <div className="relative max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher une notion, un terme…"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line bg-surface text-ink placeholder:text-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      {/* Grid */}
      <section className="py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((n, i) => (
            <NotionCard key={n.id} notion={n} mastery={notionMastery(n.id)} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted py-12">Aucune notion ne correspond à « {q} ».</p>
        )}
      </section>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: React.ReactNode; label: string }) {
  return (
    <div className="rounded-xl bg-surface-2 p-3 text-center">
      <div className="flex items-center justify-center gap-1 font-display text-xl font-semibold tabular-nums">
        {icon}
        {value}
      </div>
      <div className="text-xs text-muted mt-0.5">{label}</div>
    </div>
  );
}
