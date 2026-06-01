import type { Notion, NotionId } from "./types";
import { art } from "./notions/art";
import { bonheur } from "./notions/bonheur";
import { conscience } from "./notions/conscience";
import { devoir } from "./notions/devoir";
import { etat } from "./notions/etat";
import { inconscient } from "./notions/inconscient";
import { justice } from "./notions/justice";
import { langage } from "./notions/langage";
import { liberte } from "./notions/liberte";
import { nature } from "./notions/nature";
import { raison } from "./notions/raison";
import { religion } from "./notions/religion";
import { science } from "./notions/science";
import { technique } from "./notions/technique";
import { temps } from "./notions/temps";
import { travail } from "./notions/travail";
import { verite } from "./notions/verite";

/** Les 17 notions, dans l'ordre du programme. */
export const NOTIONS: Notion[] = [
  conscience,
  inconscient,
  liberte,
  devoir,
  bonheur,
  raison,
  verite,
  science,
  technique,
  travail,
  art,
  langage,
  nature,
  temps,
  etat,
  justice,
  religion,
];

export const NOTIONS_BY_ID: Record<NotionId, Notion> = Object.fromEntries(
  NOTIONS.map((n) => [n.id, n])
) as Record<NotionId, Notion>;

export function getNotion(id: string): Notion | undefined {
  return NOTIONS_BY_ID[id as NotionId];
}

export type { Notion, NotionId } from "./types";
