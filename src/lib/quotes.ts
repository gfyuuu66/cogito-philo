import { NOTIONS } from "../content";

/**
 * « Citation du jour » : on pioche une citation parmi toutes celles des 17
 * notions, de façon déterministe selon la date (même citation toute la journée,
 * une nouvelle chaque jour).
 */
export interface DailyQuote {
  texte: string;
  auteur: string;
  oeuvre?: string;
  notionId: string;
  notionTitre: string;
}

const ALL: DailyQuote[] = NOTIONS.flatMap((n) =>
  n.citations.map((c) => ({
    texte: c.texte,
    auteur: c.auteur,
    oeuvre: c.oeuvre,
    notionId: n.id,
    notionTitre: n.titre,
  }))
);

export const quoteCount = ALL.length;

export function getDailyQuote(now: Date = new Date()): DailyQuote | null {
  if (ALL.length === 0) return null;
  const dayIndex = Math.floor(now.getTime() / 86_400_000);
  return ALL[dayIndex % ALL.length];
}
