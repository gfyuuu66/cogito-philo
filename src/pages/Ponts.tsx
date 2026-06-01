import { Link } from "react-router-dom";
import { Network, ArrowLeftRight, Lightbulb } from "lucide-react";
import { CLUSTERS, SUJETS_PONTS } from "../content/clusters";
import { NOTIONS_BY_ID } from "../content";

export default function Ponts() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-10">
        <p className="chip mb-3">
          <Network size={13} className="text-brand" /> Relier les notions
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Les notions qui vont ensemble</h1>
        <p className="text-lg text-muted mt-3 max-w-2xl prose-philo">
          Le meilleur réflexe pour viser haut : montrer que tu <strong>relies</strong> les notions. Voici les grandes
          familles, les <em>ponts</em> entre elles, et des sujets transversaux à ressortir le jour J.
        </p>
      </header>

      {/* Clusters */}
      <div className="space-y-6">
        {CLUSTERS.map((cluster) => (
          <section key={cluster.id} className="card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h2 className="font-display text-2xl">{cluster.titre}</h2>
              <div className="flex flex-wrap gap-1.5">
                {cluster.notionIds.map((id) => {
                  const n = NOTIONS_BY_ID[id];
                  if (!n) return null;
                  return (
                    <Link key={id} to={`/notion/${id}`} className="chip card-hover" style={{ color: n.couleur }}>
                      {n.titre}
                    </Link>
                  );
                })}
              </div>
            </div>
            <p className="text-muted mb-5">{cluster.description}</p>

            <div className="grid sm:grid-cols-2 gap-2.5">
              {cluster.ponts.map((p, i) => {
                const a = NOTIONS_BY_ID[p.a];
                const b = NOTIONS_BY_ID[p.b];
                return (
                  <div key={i} className="rounded-xl bg-surface-2 p-3.5">
                    <p className="flex items-center gap-2 text-sm font-semibold mb-1">
                      <span style={{ color: a?.couleur }}>{a?.titre}</span>
                      <ArrowLeftRight size={14} className="text-faint" />
                      <span style={{ color: b?.couleur }}>{b?.titre}</span>
                    </p>
                    <p className="text-sm text-muted">{p.lien}</p>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Sujets-ponts */}
      <section className="mt-12">
        <h2 className="font-display text-2xl sm:text-3xl mb-2 flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent-soft text-accent shrink-0">
            <Lightbulb size={20} />
          </span>
          Sujets transversaux
        </h2>
        <p className="text-muted mb-5">Des sujets qui combinent plusieurs notions — parfaits pour montrer ta vue d'ensemble.</p>
        <div className="grid md:grid-cols-2 gap-3">
          {SUJETS_PONTS.map((s, i) => (
            <div key={i} className="card p-4">
              <p className="font-display text-lg leading-snug mb-2">{s.intitule}</p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {s.notions.map((id) => {
                  const n = NOTIONS_BY_ID[id];
                  if (!n) return null;
                  return (
                    <Link key={id} to={`/notion/${id}`} className="chip" style={{ color: n.couleur }}>
                      {n.titre}
                    </Link>
                  );
                })}
              </div>
              <p className="text-sm text-muted">{s.idee}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
