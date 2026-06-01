import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle, Check } from "lucide-react";
import type { Flashcard } from "../content/types";
import { Markup } from "../lib/markup";

interface Props {
  cards: Flashcard[];
  color: string;
  onAllSeen?: () => void;
}

export default function Flashcards({ cards, color, onAllSeen }: Props) {
  const [order, setOrder] = useState(() => cards.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(new Set());

  const idx = order[pos];
  const card = cards[idx];
  const allSeen = seen.size >= cards.length;

  useEffect(() => {
    if (allSeen) onAllSeen?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allSeen]);

  const markSeen = (i: number) =>
    setSeen((s) => {
      if (s.has(i)) return s;
      const n = new Set(s);
      n.add(i);
      return n;
    });

  const go = (delta: number) => {
    setFlipped(false);
    setPos((p) => (p + delta + cards.length) % cards.length);
  };

  const flip = () => {
    setFlipped((f) => {
      if (!f) markSeen(idx);
      return !f;
    });
  };

  const shuffle = () => {
    const o = [...order];
    for (let i = o.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [o[i], o[j]] = [o[j], o[i]];
    }
    setOrder(o);
    setPos(0);
    setFlipped(false);
  };

  const reset = () => {
    setOrder(cards.map((_, i) => i));
    setPos(0);
    setFlipped(false);
    setSeen(new Set());
  };

  const progress = useMemo(() => Math.round((seen.size / cards.length) * 100), [seen, cards.length]);

  return (
    <div className="animate-fade-up">
      <div className="flex items-center justify-between mb-3 text-sm text-muted">
        <span className="tabular-nums font-medium">
          Carte {pos + 1} / {cards.length}
        </span>
        <span className="flex items-center gap-2">
          {allSeen && (
            <span className="chip" style={{ color, borderColor: color }}>
              <Check size={13} /> Toutes vues
            </span>
          )}
          <span className="tabular-nums">{progress}%</span>
        </span>
      </div>

      <div className="flip-scene select-none" style={{ minHeight: 280 }}>
        <button
          onClick={flip}
          className={`flip-card w-full text-left ${flipped ? "is-flipped" : ""}`}
          style={{ minHeight: 280 }}
          aria-label="Retourner la carte"
        >
          {/* Recto */}
          <div className="flip-face card p-8 grid place-items-center" style={{ minHeight: 280, borderTopWidth: 4, borderTopColor: color }}>
            <div className="text-center">
              <p className="chip mb-4" style={{ color }}>
                Question
              </p>
              <p className="font-display text-2xl leading-snug">
                <Markup text={card.recto} />
              </p>
              <p className="mt-6 text-xs text-faint">Clique pour révéler la réponse</p>
            </div>
          </div>
          {/* Verso */}
          <div
            className="flip-face flip-face--back card p-8 grid place-items-center"
            style={{ minHeight: 280, background: "color-mix(in oklab, " + color + " 8%, var(--surface))", borderTopWidth: 4, borderTopColor: color }}
          >
            <div className="text-center">
              <p className="chip mb-4" style={{ color }}>
                Réponse
              </p>
              <p className="prose-philo text-lg">
                <Markup text={card.verso} />
              </p>
            </div>
          </div>
        </button>
      </div>

      <div className="flex items-center justify-between mt-4 gap-2">
        <button className="btn btn-ghost" onClick={() => go(-1)}>
          <ChevronLeft size={18} /> <span className="hidden sm:inline">Précédent</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost" onClick={shuffle} title="Mélanger">
            <Shuffle size={16} />
          </button>
          <button className="btn btn-ghost" onClick={reset} title="Réinitialiser">
            <RotateCcw size={16} />
          </button>
        </div>
        <button className="btn btn-primary" onClick={() => go(1)} style={{ background: color, borderColor: color }}>
          <span className="hidden sm:inline">Suivant</span> <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
