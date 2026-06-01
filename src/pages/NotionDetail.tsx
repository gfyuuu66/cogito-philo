import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft, BookOpen, Quote, Layers, HelpCircle, PenLine,
  Lightbulb, Check, CircleDot, ArrowRight, Sparkles,
} from "lucide-react";
import { getNotion, NOTIONS_BY_ID } from "../content";
import type { NotionId } from "../content";
import { useStore } from "../lib/store";
import { Markup } from "../lib/markup";
import ProgressRing from "../components/ProgressRing";
import Flashcards from "../components/Flashcards";
import Quiz from "../components/Quiz";
import Accordion from "../components/Accordion";

type Tab = "cours" | "auteurs" | "fiches" | "quiz" | "sujets";

const TABS: { key: Tab; label: string; icon: typeof BookOpen }[] = [
  { key: "cours", label: "Cours", icon: BookOpen },
  { key: "auteurs", label: "Auteurs & citations", icon: Quote },
  { key: "fiches", label: "Flashcards", icon: Layers },
  { key: "quiz", label: "Quiz", icon: HelpCircle },
  { key: "sujets", label: "Dissertations", icon: PenLine },
];

export default function NotionDetail() {
  const { id } = useParams<{ id: string }>();
  const notion = getNotion(id ?? "");
  const [tab, setTab] = useState<Tab>("cours");
  const store = useStore();

  if (!notion) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl mb-3">Notion introuvable</h1>
        <Link to="/" className="btn btn-primary mx-auto">
          <ArrowLeft size={16} /> Retour aux notions
        </Link>
      </div>
    );
  }

  const color = notion.couleur;
  const prog = store.notionProgress(notion.id);
  const mastery = store.notionMastery(notion.id);

  return (
    <div>
      {/* Bandeau */}
      <div className="border-b border-line" style={{ background: `linear-gradient(180deg, ${color}14, transparent)` }}>
        <div className="mx-auto max-w-5xl px-4 pt-6 pb-7">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink mb-5">
            <ArrowLeft size={15} /> Toutes les notions
          </Link>

          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">{notion.titre}</h1>
              <p className="text-lg text-muted mt-2">{notion.sousTitre}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                <ChecklistChip ok={prog.coursLu} label="Cours lu" color={color} />
                <ChecklistChip ok={prog.flashcardsDone} label="Flashcards" color={color} />
                <ChecklistChip
                  ok={!!prog.quizBest && prog.quizBest.correct / prog.quizBest.total >= 0.7}
                  label={prog.quizBest ? `Quiz ${prog.quizBest.correct}/${prog.quizBest.total}` : "Quiz"}
                  color={color}
                />
              </div>
            </div>
            <ProgressRing value={mastery} size={84} stroke={8} color={color}>
              <span className="text-base font-bold">{mastery}%</span>
            </ProgressRing>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-30 bg-[color-mix(in_oklab,var(--canvas)_85%,transparent)] backdrop-blur-md border-b border-line">
        <div className="mx-auto max-w-5xl px-4 flex gap-1 overflow-x-auto">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-1.5 px-3.5 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                tab === key ? "text-ink" : "border-transparent text-muted hover:text-ink"
              }`}
              style={tab === key ? { borderColor: color } : undefined}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        {tab === "cours" && <CoursTab notion={notion} color={color} coursLu={prog.coursLu} onRead={() => store.markCoursLu(notion.id)} />}
        {tab === "auteurs" && <AuteursTab notion={notion} color={color} />}
        {tab === "fiches" && (
          <div className="max-w-2xl mx-auto">
            <Flashcards cards={notion.flashcards} color={color} onAllSeen={() => store.markFlashcardsDone(notion.id)} />
          </div>
        )}
        {tab === "quiz" && (
          <div className="max-w-2xl mx-auto">
            <Quiz questions={notion.quiz} color={color} onFinish={(c, t) => store.recordQuiz(notion.id, c, t)} />
          </div>
        )}
        {tab === "sujets" && <SujetsTab notion={notion} color={color} />}

        {/* Liens vers d'autres notions */}
        {notion.liens.length > 0 && (
          <div className="mt-12 pt-6 border-t border-line">
            <p className="text-sm font-semibold text-muted mb-3 flex items-center gap-2">
              <Sparkles size={15} style={{ color }} /> Notions liées
            </p>
            <div className="flex flex-wrap gap-2">
              {notion.liens.map((lid: NotionId) => {
                const l = NOTIONS_BY_ID[lid];
                if (!l) return null;
                return (
                  <Link key={lid} to={`/notion/${lid}`} className="chip card-hover" style={{ color: l.couleur }}>
                    {l.titre} <ArrowRight size={13} />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ChecklistChip({ ok, label, color }: { ok: boolean; label: string; color: string }) {
  return (
    <span className="chip" style={ok ? { color, borderColor: color } : undefined}>
      {ok ? <Check size={13} /> : <CircleDot size={13} className="opacity-50" />} {label}
    </span>
  );
}

/* ---------------- Cours ---------------- */
function CoursTab({ notion, color, coursLu, onRead }: { notion: NonNullable<ReturnType<typeof getNotion>>; color: string; coursLu: boolean; onRead: () => void }) {
  const n = notion;
  return (
    <div className="animate-fade-up grid lg:grid-cols-[1fr_280px] gap-8 items-start">
      <div className="min-w-0">
        {/* Amorce */}
        <div className="card p-5 mb-6" style={{ borderLeftWidth: 4, borderLeftColor: color }}>
          <p className="chip mb-2" style={{ color }}>
            <Lightbulb size={13} /> Amorce
          </p>
          <p className="prose-philo italic">
            <Markup text={n.accroche} />
          </p>
        </div>

        {/* Cours */}
        {n.cours.map((sec, i) => (
          <section key={i} className="mb-7">
            <h2 className="font-display text-2xl mb-3" style={{ color }}>
              {sec.titre}
            </h2>
            <div className="prose-philo">
              {sec.paragraphes.map((p, j) => (
                <p key={j}>
                  <Markup text={p} />
                </p>
              ))}
            </div>
          </section>
        ))}

        <button
          onClick={onRead}
          className={`btn ${coursLu ? "btn-ghost" : "btn-primary"} mt-2`}
          style={!coursLu ? { background: color, borderColor: color } : { color, borderColor: color }}
        >
          <Check size={16} /> {coursLu ? "Cours marqué comme lu" : "Marquer le cours comme lu"}
        </button>
      </div>

      {/* Aside : définitions + débats */}
      <aside className="lg:sticky lg:top-32 space-y-4">
        <div className="card p-5">
          <h3 className="font-display text-lg mb-3">Définitions clés</h3>
          <dl className="space-y-3">
            {n.definitions.map((d, i) => (
              <div key={i}>
                <dt className="font-semibold text-sm" style={{ color }}>
                  {d.terme}
                </dt>
                <dd className="text-sm text-muted leading-snug">
                  <Markup text={d.def} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="card p-5">
          <h3 className="font-display text-lg mb-3">Débats / paradoxes</h3>
          <ul className="space-y-2.5">
            {n.paradoxes.map((p, i) => (
              <li key={i} className="text-sm text-muted leading-snug flex gap-2">
                <span style={{ color }} className="font-bold shrink-0">
                  ?
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

/* ---------------- Auteurs & citations ---------------- */
function AuteursTab({ notion, color }: { notion: NonNullable<ReturnType<typeof getNotion>>; color: string }) {
  return (
    <div className="animate-fade-up grid lg:grid-cols-2 gap-6">
      <div>
        <h2 className="font-display text-2xl mb-4">Les thèses à connaître</h2>
        <div className="space-y-3">
          {notion.theses.map((t, i) => (
            <div key={i} className="card p-4">
              <p className="font-semibold" style={{ color }}>
                {t.auteur}
                {t.oeuvre && <span className="font-normal text-muted italic text-sm"> · {t.oeuvre}</span>}
              </p>
              <p className="text-sm mt-1 prose-philo">
                <Markup text={t.idee} />
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-display text-2xl mb-4">Citations & comment les utiliser</h2>
        <div className="space-y-3">
          {notion.citations.map((c, i) => (
            <div key={i} className="card p-4" style={{ borderLeftWidth: 3, borderLeftColor: color }}>
              <blockquote className="prose-philo italic text-[1.02rem]">« {c.texte} »</blockquote>
              <p className="text-sm font-semibold mt-2">
                — {c.auteur}
                {c.oeuvre && <span className="font-normal text-muted italic"> · {c.oeuvre}</span>}
              </p>
              <p className="text-sm text-muted mt-2 flex gap-2">
                <Lightbulb size={15} className="shrink-0 mt-0.5" style={{ color }} />
                <span>
                  <span className="font-semibold" style={{ color }}>
                    Usage :{" "}
                  </span>
                  <Markup text={c.usage} />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Sujets / plans ---------------- */
function SujetsTab({ notion, color }: { notion: NonNullable<ReturnType<typeof getNotion>>; color: string }) {
  return (
    <div className="animate-fade-up space-y-4">
      <p className="text-muted max-w-2xl">
        Trois sujets type, chacun avec sa <strong className="text-ink">problématique</strong>, un{" "}
        <strong className="text-ink">plan en 3 parties</strong> (auteurs + exemples) et le{" "}
        <strong className="text-ink">cheminement</strong> pour le trouver. Déplie un sujet pour t'entraîner.
      </p>
      {notion.sujets.map((s, i) => (
        <Accordion
          key={i}
          color={color}
          defaultOpen={i === 0}
          title={s.intitule}
          subtitle={`Sujet ${i + 1}`}
        >
          <div className="space-y-5 pt-3">
            <Block label="Analyse du sujet" color={color}>
              <Markup text={s.analyse} />
            </Block>

            <div className="rounded-xl p-4" style={{ background: color + "12" }}>
              <p className="chip mb-2" style={{ color }}>
                Problématique
              </p>
              <p className="prose-philo font-medium">
                <Markup text={s.problematique} />
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-muted mb-2">Plan détaillé</p>
              <div className="space-y-2.5">
                {s.plan.map((p, j) => (
                  <div key={j} className="card p-4">
                    <p className="font-display text-lg" style={{ color }}>
                      {p.partie}
                    </p>
                    <p className="prose-philo mt-1">
                      <Markup text={p.idee} />
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm">
                      {p.auteurs && (
                        <span className="text-muted">
                          <span className="font-semibold" style={{ color }}>
                            Auteurs :{" "}
                          </span>
                          {p.auteurs}
                        </span>
                      )}
                      {p.exemple && (
                        <span className="text-muted">
                          <span className="font-semibold" style={{ color }}>
                            Exemple :{" "}
                          </span>
                          <Markup text={p.exemple} />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Block label="Comment trouver ce plan" color={color} icon>
              <Markup text={s.astuce} />
            </Block>
          </div>
        </Accordion>
      ))}
    </div>
  );
}

function Block({ label, color, children, icon }: { label: string; color: string; children: React.ReactNode; icon?: boolean }) {
  return (
    <div>
      <p className="text-sm font-semibold mb-1 flex items-center gap-1.5" style={{ color }}>
        {icon && <Lightbulb size={14} />} {label}
      </p>
      <p className="prose-philo text-[1rem]">{children}</p>
    </div>
  );
}
