import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  NotebookText, Compass, Telescope, Network, BookOpen, GitBranch,
  Quote, Lightbulb, ArrowRight, Sparkles,
} from "lucide-react";
import { NOTIONS, NOTIONS_BY_ID } from "../content";
import type { NotionId } from "../content";
import { RESUME_BY_ID, LIRE_SUJET, REPERER, DECODE_EXEMPLES } from "../content/resume";
import { CLUSTERS } from "../content/clusters";
import { Markup } from "../lib/markup";
import LiensConstellation3D from "../components/LiensConstellation3D";

export default function Resume() {
  const [active, setActive] = useState<NotionId | null>(null);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  // Met une notion en avant : la sélectionne (carte 3D) et fait défiler sa fiche.
  const focus = (id: NotionId) => {
    setActive(id);
    const el = cardRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <header className="mb-12">
        <p className="chip mb-3">
          <NotebookText size={13} className="text-brand" /> Résumé
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Tout le programme, en simple
        </h1>
        <p className="text-lg text-muted mt-3 max-w-3xl prose-philo">
          Les <strong>17 notions</strong> réexpliquées avec des <strong>mots simples</strong>, leurs
          <em> thèses clés</em> à ressortir en dissertation, et la méthode pour <strong>repérer les notions
          cachées</strong> dans un sujet. Une carte en 3D montre comment tout se relie.
        </p>
      </header>

      {/* 1. Lire un sujet */}
      <Section icon={Compass} title="Lire un sujet de dissertation (en 3 mouvements)">
        <p className="prose-philo mb-5"><Markup text={LIRE_SUJET.principe} /></p>
        <div className="grid sm:grid-cols-3 gap-3">
          {LIRE_SUJET.plan.map((p, i) => (
            <div key={i} className="card p-4 flex flex-col">
              <span className="grid place-items-center w-8 h-8 rounded-xl bg-brand text-white font-display shrink-0 mb-2">
                {i + 1}
              </span>
              <p className="font-display text-lg leading-snug">{p.moment}</p>
              <p className="text-sm text-muted mt-1"><Markup text={p.simple} /></p>
              <p className="text-sm italic mt-2 text-brand-ink">« {p.exemple} »</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 2. Repérer les notions cachées */}
      <Section icon={Telescope} title="Repérer les notions cachées">
        <p className="prose-philo mb-5">{REPERER.intro}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <ol className="space-y-2.5">
            {REPERER.etapes.map((e, i) => (
              <li key={i} className="card p-3.5 flex gap-3 items-start">
                <span className="grid place-items-center w-6 h-6 rounded-lg bg-brand-soft text-brand-ink font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm"><Markup text={e} /></span>
              </li>
            ))}
          </ol>

          <div className="card p-4">
            <p className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Sparkles size={15} className="text-accent" /> Les mots-radars
            </p>
            <ul className="space-y-2.5">
              {REPERER.radars.map((r, i) => (
                <li key={i} className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm">
                  <span className="text-muted">{r.si}</span>
                  <ArrowRight size={13} className="text-faint shrink-0" />
                  {r.pense.map((id) => (
                    <NotionChip key={id} id={id} onClick={focus} />
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Exemples décodés */}
        <h3 className="font-display text-xl mt-8 mb-3 flex items-center gap-2">
          <Lightbulb size={18} className="text-accent" /> Des exemples décodés
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {DECODE_EXEMPLES.map((d, i) => (
            <div key={i} className="card p-4">
              <p className="font-display text-lg leading-snug mb-2">« {d.sujet} »</p>
              <div className="flex flex-wrap items-center gap-1.5 mb-2">
                <span className="text-xs text-faint mr-1">Notion visible :</span>
                <NotionChip id={d.surface} onClick={focus} />
                <span className="text-xs text-faint mx-1">+ cachées :</span>
                {d.cachees.map((id) => (
                  <NotionChip key={id} id={id} onClick={focus} />
                ))}
              </div>
              <p className="text-sm text-muted">{d.pourquoi}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Carte 3D des liens */}
      <Section icon={Network} title="La carte des liens (en 3D)">
        <p className="prose-philo mb-4">
          Chaque trait relie deux notions qui « vont ensemble ». <strong>Survole</strong> une notion pour
          voir ses liens, ou <strong>clique</strong> pour aller à sa fiche. Plus tu relies les notions, plus
          ta copie monte.
        </p>
        <div className="card p-4 sm:p-6">
          <LiensConstellation3D active={active} onSelect={focus} />
        </div>
      </Section>

      {/* 4. Les 17 fiches */}
      <Section icon={BookOpen} title="Les 17 notions en simple">
        <div className="grid gap-4 md:grid-cols-2">
          {NOTIONS.map((n) => {
            const r = RESUME_BY_ID[n.id];
            const isActive = active === n.id;
            return (
              <article
                key={n.id}
                ref={(el) => {
                  cardRefs.current[n.id] = el;
                }}
                className="card relative overflow-hidden p-5 flex flex-col gap-3 scroll-mt-24 transition-shadow"
                style={
                  isActive
                    ? { boxShadow: `0 0 0 2px ${n.couleur}, var(--shadow-lift)` }
                    : undefined
                }
              >
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: n.couleur }} aria-hidden />

                {/* En-tête */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="grid place-items-center w-10 h-10 rounded-xl font-display text-xl shrink-0"
                    style={{ background: n.couleur + "1f", color: n.couleur }}
                  >
                    {n.titre.replace(/^L['’]|^La |^Le /, "").charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl leading-tight">{n.titre}</h3>
                    <p className="text-sm font-serif italic text-muted leading-snug">{r.essence}</p>
                  </div>
                </div>

                {/* Explication simple */}
                <p className="text-[0.95rem] leading-relaxed"><Markup text={r.simple} /></p>

                {/* Le débat */}
                <div className="rounded-xl bg-surface-2 p-3">
                  <p className="text-xs font-semibold text-muted mb-1 flex items-center gap-1.5">
                    <GitBranch size={13} className="text-brand" /> LE DÉBAT
                  </p>
                  <p className="text-sm"><Markup text={r.tension} /></p>
                </div>

                {/* À retenir */}
                <div>
                  <p className="text-xs font-semibold text-muted mb-1.5 flex items-center gap-1.5">
                    <Quote size={13} className="text-accent" /> À RETENIR
                  </p>
                  <ul className="space-y-1.5">
                    {r.retenir.map((t, i) => (
                      <li key={i} className="text-sm flex gap-2">
                        <span className="text-brand mt-0.5 shrink-0">›</span>
                        <span>
                          <span className="font-semibold text-brand-ink">{t.auteur}</span>
                          {" — "}
                          {t.idee}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mots-clés */}
                <div className="flex flex-wrap gap-1.5">
                  {r.motsCles.map((m, i) => (
                    <span key={i} className="chip">{m}</span>
                  ))}
                </div>

                {/* Exemple */}
                <p className="text-sm text-muted flex gap-2">
                  <Lightbulb size={15} className="text-accent shrink-0 mt-0.5" />
                  <span>{r.exemple}</span>
                </p>

                {/* Parallèles + cours complet */}
                <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-2 border-t border-line">
                  <span className="text-xs text-faint mr-0.5">Parallèles :</span>
                  {n.liens.map((id) => (
                    <NotionChip key={id} id={id} onClick={focus} />
                  ))}
                  <Link
                    to={`/notion/${n.id}`}
                    className="ml-auto text-sm font-medium text-brand hover:underline flex items-center gap-1"
                  >
                    Cours complet <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* 5. Familles */}
      <Section icon={Sparkles} title="Les grandes familles">
        <p className="prose-philo mb-5">
          Les notions se rangent en familles : les voir ensemble aide à faire des <em>parallèles</em>. Pour
          les ponts détaillés et des sujets transversaux, va voir la page{" "}
          <Link to="/ponts" className="text-brand font-medium hover:underline">Ponts</Link>.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {CLUSTERS.map((c) => (
            <div key={c.id} className="card p-4">
              <p className="font-display text-lg mb-1">{c.titre}</p>
              <p className="text-sm text-muted mb-3">{c.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.notionIds.map((id) => (
                  <NotionChip key={id} id={id} onClick={focus} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

/** Petite étiquette de notion, colorée, qui met sa fiche en avant au clic. */
function NotionChip({ id, onClick }: { id: NotionId; onClick: (id: NotionId) => void }) {
  const n = NOTIONS_BY_ID[id];
  if (!n) return null;
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className="chip card-hover"
      style={{ color: n.couleur }}
      title={`Voir la fiche : ${n.titre}`}
    >
      {n.titre}
    </button>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Compass;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14">
      <h2 className="font-display text-2xl sm:text-3xl mb-5 flex items-center gap-3">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-soft text-brand-ink shrink-0">
          <Icon size={20} />
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}
