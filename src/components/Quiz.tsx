import { useState } from "react";
import { Check, X, ArrowRight, RotateCcw, Trophy } from "lucide-react";
import type { QuizQuestion } from "../content/types";
import { Markup } from "../lib/markup";

interface Props {
  questions: QuizQuestion[];
  color: string;
  onFinish?: (correct: number, total: number) => void;
}

export default function Quiz({ questions, color, onFinish }: Props) {
  const [i, setI] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[i];
  const answered = selected !== null;
  const isLast = i === questions.length - 1;

  const choose = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    if (idx === q.bonne) setCorrect((c) => c + 1);
  };

  const next = () => {
    if (isLast) {
      setDone(true);
      onFinish?.(correct, questions.length);
    } else {
      setI((n) => n + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setI(0);
    setSelected(null);
    setCorrect(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((correct / questions.length) * 100);
    const great = pct >= 70;
    return (
      <div className="card p-8 text-center animate-pop" style={{ borderTopWidth: 4, borderTopColor: color }}>
        <div className="grid place-items-center w-16 h-16 rounded-full mx-auto mb-4" style={{ background: color + "22", color }}>
          <Trophy size={30} />
        </div>
        <h3 className="font-display text-2xl mb-1">{great ? "Excellent !" : pct >= 40 ? "Pas mal !" : "À retravailler"}</h3>
        <p className="text-4xl font-display font-bold tabular-nums my-2" style={{ color }}>
          {correct}/{questions.length}
        </p>
        <p className="text-muted mb-6">{pct}% de bonnes réponses{great ? " — notion validée." : "."}</p>
        <button className="btn btn-primary mx-auto" onClick={restart} style={{ background: color, borderColor: color }}>
          <RotateCcw size={16} /> Recommencer
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-up">
      <div className="flex items-center justify-between mb-3 text-sm text-muted">
        <span className="tabular-nums font-medium">
          Question {i + 1} / {questions.length}
        </span>
        <span className="tabular-nums">Score : {correct}</span>
      </div>

      <div className="h-1.5 rounded-full bg-surface-2 mb-5 overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${((i + (answered ? 1 : 0)) / questions.length) * 100}%`, background: color }} />
      </div>

      <div className="card p-6 mb-4" style={{ borderTopWidth: 4, borderTopColor: color }}>
        <p className="font-display text-xl mb-5 leading-snug">
          <Markup text={q.question} />
        </p>
        <div className="grid gap-2.5">
          {q.choix.map((choix, idx) => {
            const isCorrect = idx === q.bonne;
            const isPicked = idx === selected;
            let cls = "border-line bg-surface hover:bg-surface-2";
            let icon = null;
            if (answered) {
              if (isCorrect) {
                cls = "border-[color:var(--color-success)] bg-[color-mix(in_oklab,var(--color-success)_12%,var(--surface))]";
                icon = <Check size={18} className="text-success" />;
              } else if (isPicked) {
                cls = "border-[color:var(--color-danger)] bg-[color-mix(in_oklab,var(--color-danger)_10%,var(--surface))]";
                icon = <X size={18} className="text-danger" />;
              } else {
                cls = "border-line opacity-60";
              }
            }
            return (
              <button
                key={idx}
                onClick={() => choose(idx)}
                disabled={answered}
                className={`flex items-center justify-between gap-3 text-left px-4 py-3 rounded-xl border transition-colors ${cls} ${
                  answered ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <span className="text-[0.97rem]">
                  <Markup text={choix} />
                </span>
                {icon}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-4 p-3.5 rounded-xl bg-surface-2 text-sm leading-relaxed animate-fade-up">
            <span className="font-semibold" style={{ color }}>
              {selected === q.bonne ? "Bravo. " : "Explication. "}
            </span>
            <Markup text={q.explication} />
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button className="btn btn-primary" onClick={next} disabled={!answered} style={{ background: color, borderColor: color, opacity: answered ? 1 : 0.5 }}>
          {isLast ? "Voir le résultat" : "Suivant"} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
