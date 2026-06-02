/**
 * Rang philosophique attribué selon les points — un petit côté ludique et
 * motivant, cohérent avec la progression (du Néophyte au Sage).
 */
export interface Rank {
  title: string;
  min: number;
  emoji: string;
}

export const RANKS: Rank[] = [
  { title: "Néophyte", min: 0, emoji: "🌱" },
  { title: "Apprenti", min: 150, emoji: "📖" },
  { title: "Disciple", min: 400, emoji: "🪶" },
  { title: "Dialecticien", min: 700, emoji: "⚖️" },
  { title: "Philosophe", min: 1000, emoji: "🏛️" },
  { title: "Sage", min: 1250, emoji: "🦉" },
];

export function rankOf(points: number): Rank {
  let current = RANKS[0];
  for (const r of RANKS) if (points >= r.min) current = r;
  return current;
}

/** Le rang suivant (ou null si déjà au sommet). */
export function nextRank(points: number): Rank | null {
  return RANKS.find((r) => r.min > points) ?? null;
}
