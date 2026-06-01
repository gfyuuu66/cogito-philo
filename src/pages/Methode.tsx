import { Compass, Layers3, GitBranch, Quote, AlertTriangle, CheckCircle2, ListChecks, ScrollText } from "lucide-react";
import {
  INTRO_STEPS, PROBLEMATIQUE, PLAN, AEI, CITATION_METHOD, MOTS_INTERDITS, MOTS_PRECIS, CHECKLIST,
} from "../content/method";

export default function Methode() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-10">
        <p className="chip mb-3">
          <Compass size={13} className="text-brand" /> Méthode
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Réussir sa dissertation</h1>
        <p className="text-lg text-muted mt-3 max-w-2xl prose-philo">
          La mécanique complète : trouver la <strong>tension</strong>, bâtir un <strong>plan dialectique</strong>,
          rédiger une intro en entonnoir et faire <em>travailler</em> ses citations. Apprends ces gestes : ils valent
          pour les 17 notions.
        </p>
      </header>

      {/* Problématique */}
      <Section icon={GitBranch} title="1. La problématique : la méthode de la tension" id="probleme">
        <p className="prose-philo mb-5">{PROBLEMATIQUE.principe}</p>
        <div className="grid sm:grid-cols-3 gap-3 mb-5">
          {PROBLEMATIQUE.etapes.map((e, i) => (
            <div key={i} className="card p-4">
              <p className="font-display text-lg text-brand">{e.titre}</p>
              <p className="text-sm text-muted mt-1">{e.texte}</p>
            </div>
          ))}
        </div>
        <div className="card p-5 bg-brand-soft/40" style={{ borderLeftWidth: 4, borderLeftColor: "var(--color-brand)" }}>
          <p className="text-sm font-semibold text-brand-ink mb-2">Le gabarit (à apprendre par cœur)</p>
          <pre className="prose-philo whitespace-pre-wrap font-serif text-[1.02rem] leading-relaxed">{PROBLEMATIQUE.gabarit}</pre>
        </div>
        <p className="mt-4 text-sm flex gap-2 text-muted">
          <AlertTriangle size={16} className="text-accent shrink-0 mt-0.5" />
          {PROBLEMATIQUE.test}
        </p>
      </Section>

      {/* Plan */}
      <Section icon={Layers3} title="2. Le plan dialectique en 3 parties" id="plan">
        <p className="prose-philo mb-5">{PLAN.principe}</p>
        <div className="space-y-3 mb-4">
          {PLAN.parties.map((p, i) => (
            <div key={i} className="card p-4 flex gap-4">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand text-white font-display shrink-0">
                {["I", "II", "III"][i]}
              </span>
              <div>
                <p className="font-display text-lg">{p.nom}</p>
                <p className="text-sm text-muted mt-0.5">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm flex gap-2 text-muted">
          <AlertTriangle size={16} className="text-accent shrink-0 mt-0.5" />
          {PLAN.regleSynthese}
        </p>
      </Section>

      {/* Intro */}
      <Section icon={ScrollText} title="3. L'introduction en entonnoir (4 temps)" id="intro">
        <div className="space-y-3">
          {INTRO_STEPS.map((s) => (
            <div key={s.numero} className="card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="grid place-items-center w-7 h-7 rounded-lg bg-accent-soft text-accent font-bold text-sm">
                  {s.numero}
                </span>
                <h3 className="font-display text-lg">{s.titre}</h3>
              </div>
              <p className="text-sm text-muted mb-2">{s.resume}</p>
              <ul className="space-y-1">
                {s.details.map((d, i) => (
                  <li key={i} className="text-sm flex gap-2">
                    <span className="text-brand">›</span> {d}
                  </li>
                ))}
              </ul>
              {s.interdits && (
                <p className="text-sm mt-2 flex flex-wrap gap-2 items-center text-danger">
                  <AlertTriangle size={14} /> À bannir :
                  {s.interdits.map((x, i) => (
                    <span key={i} className="chip" style={{ color: "var(--color-danger)", borderColor: "var(--color-danger)" }}>
                      {x}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* AEI */}
      <Section icon={Layers3} title="4. Rédiger un paragraphe : A.E.I." id="aei">
        <div className="grid sm:grid-cols-3 gap-3 mb-4">
          {AEI.etapes.map((e) => (
            <div key={e.lettre} className="card p-5 text-center">
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-brand text-white font-display text-2xl mx-auto mb-3">
                {e.lettre}
              </span>
              <p className="font-display text-lg">{e.mot}</p>
              <p className="text-sm text-muted mt-1">{e.texte}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted flex gap-2">
          <span className="text-brand font-bold">→</span> {AEI.transition}
        </p>
      </Section>

      {/* Citations */}
      <Section icon={Quote} title="5. Faire travailler une citation" id="citation">
        <p className="prose-philo mb-4">{CITATION_METHOD.principe}</p>
        <ol className="space-y-2 mb-5">
          {CITATION_METHOD.gestes.map((g, i) => (
            <li key={i} className="card p-3.5 flex gap-3 items-start">
              <span className="grid place-items-center w-6 h-6 rounded-lg bg-brand-soft text-brand-ink font-bold text-sm shrink-0">
                {i + 1}
              </span>
              <span className="text-sm">{g}</span>
            </li>
          ))}
        </ol>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="card p-4 border-l-4" style={{ borderLeftColor: "var(--color-danger)" }}>
            <p className="text-sm font-semibold text-danger flex items-center gap-1.5 mb-2">
              <AlertTriangle size={15} /> {CITATION_METHOD.mauvais.label}
            </p>
            <p className="text-sm text-muted italic">{CITATION_METHOD.mauvais.texte}</p>
          </div>
          <div className="card p-4 border-l-4" style={{ borderLeftColor: "var(--color-success)" }}>
            <p className="text-sm font-semibold text-success flex items-center gap-1.5 mb-2">
              <CheckCircle2 size={15} /> {CITATION_METHOD.bon.label}
            </p>
            <p className="text-sm text-muted italic">{CITATION_METHOD.bon.texte}</p>
          </div>
        </div>
      </Section>

      {/* Vocabulaire */}
      <Section icon={AlertTriangle} title="6. Vocabulaire : bannir / privilégier" id="vocab">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="card p-5">
            <p className="font-semibold text-danger mb-3 flex items-center gap-1.5">
              <AlertTriangle size={16} /> À bannir
            </p>
            <ul className="space-y-2">
              {MOTS_INTERDITS.map((m, i) => (
                <li key={i} className="text-sm text-muted flex gap-2">
                  <span className="text-danger">✗</span> {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5">
            <p className="font-semibold text-success mb-3 flex items-center gap-1.5">
              <CheckCircle2 size={16} /> À privilégier
            </p>
            <ul className="space-y-2">
              {MOTS_PRECIS.map((m, i) => (
                <li key={i} className="text-sm text-muted flex gap-2">
                  <span className="text-success">✓</span> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Checklist */}
      <Section icon={ListChecks} title="7. Check-list du jour J" id="checklist">
        <div className="card p-5">
          <ul className="space-y-3">
            {CHECKLIST.map((c, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="grid place-items-center w-6 h-6 rounded-md border-2 border-brand text-brand shrink-0 mt-0.5">
                  <CheckCircle2 size={14} />
                </span>
                <span className="text-[0.97rem]">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}

function Section({ icon: Icon, title, id, children }: { icon: typeof Compass; title: string; id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-32">
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
