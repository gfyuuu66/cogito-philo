import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Compass, Network, Sparkles, Target, BookMarked } from "lucide-react";
import { NOTIONS } from "../content";
import NotionCard from "../components/NotionCard";
import ProgressRing from "../components/ProgressRing";
import { useStore } from "../lib/store";

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

  return (
    <div className="mx-auto max-w-6xl px-4">
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

        {/* Stat card */}
        <div className="card p-6 animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="flex items-center gap-4">
            <ProgressRing value={mastery} size={92} stroke={9}>
              <span className="text-lg font-bold">{mastery}%</span>
            </ProgressRing>
            <div>
              <p className="font-display text-xl">{profile ? `Salut ${profile.pseudo}` : "Ta progression"}</p>
              <p className="text-sm text-muted">Maîtrise globale des 17 notions</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-6">
            <Stat icon={<Sparkles size={16} className="text-accent" />} value={points} label="points" />
            <Stat icon={<BookMarked size={16} className="text-brand" />} value={`${validees}/17`} label="validées" />
            <Stat icon={<Target size={16} className="text-success" />} value={NOTIONS.length} label="notions" />
          </div>
          {!profile && (
            <Link to="/profil" className="btn btn-ghost w-full mt-4 text-sm">
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
