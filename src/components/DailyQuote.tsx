import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
import { getDailyQuote } from "../lib/quotes";

/** Carte « citation du jour » : une citation tirée des 17 notions, qui change chaque jour. */
export default function DailyQuote() {
  const q = getDailyQuote();
  if (!q) return null;
  return (
    <Link
      to={`/notion/${q.notionId}`}
      className="block card p-6 relative overflow-hidden group hover:border-brand/40 transition-colors"
    >
      <Quote size={64} className="absolute -top-3 -left-2 opacity-[0.06] text-brand pointer-events-none" />
      <p className="chip mb-3">
        <Quote size={12} className="text-accent" /> Citation du jour
      </p>
      <blockquote className="font-serif text-lg sm:text-xl italic leading-relaxed text-ink">
        « {q.texte} »
      </blockquote>
      <p className="text-sm text-muted mt-3">
        — <strong className="text-ink not-italic">{q.auteur}</strong>
        {q.oeuvre ? <span className="italic">, {q.oeuvre}</span> : null}
        <span className="mx-1">·</span>
        <span className="group-hover:text-brand transition-colors">{q.notionTitre} →</span>
      </p>
    </Link>
  );
}
