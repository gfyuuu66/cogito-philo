import { Link } from "react-router-dom";
import { Layers, HelpCircle, Quote } from "lucide-react";
import type { Notion } from "../content/types";
import ProgressRing from "./ProgressRing";

export default function NotionCard({ notion, mastery, index }: { notion: Notion; mastery: number; index: number }) {
  return (
    <Link
      to={`/notion/${notion.id}`}
      className="card card-hover p-5 flex flex-col gap-3 relative overflow-hidden"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <span className="absolute inset-x-0 top-0 h-1" style={{ background: notion.couleur }} aria-hidden />
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              className="grid place-items-center w-9 h-9 rounded-xl font-display text-lg shrink-0"
              style={{ background: notion.couleur + "1f", color: notion.couleur }}
            >
              {notion.titre.replace(/^L['’]|^La |^Le /, "").charAt(0)}
            </span>
            <h3 className="font-display text-xl leading-tight truncate">{notion.titre}</h3>
          </div>
          <p className="text-sm text-muted mt-2 line-clamp-2">{notion.sousTitre}</p>
        </div>
        <ProgressRing value={mastery} size={48} stroke={5} color={notion.couleur} />
      </div>

      <div className="flex items-center gap-3 mt-auto pt-2 text-xs text-faint">
        <span className="flex items-center gap-1">
          <Layers size={13} /> {notion.flashcards.length}
        </span>
        <span className="flex items-center gap-1">
          <HelpCircle size={13} /> {notion.quiz.length}
        </span>
        <span className="flex items-center gap-1">
          <Quote size={13} /> {notion.citations.length}
        </span>
        <span className="ml-auto chip" style={{ color: notion.couleur }}>
          {notion.sujets.length} sujets
        </span>
      </div>
    </Link>
  );
}
