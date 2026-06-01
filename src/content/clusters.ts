import type { NotionId } from "./types";

/**
 * « Les notions qui vont ensemble » : regroupements thématiques + ponts entre
 * notions, pour montrer au correcteur qu'on relie le programme.
 */

export interface Pont {
  a: NotionId;
  b: NotionId;
  lien: string;
}

export interface Cluster {
  id: string;
  titre: string;
  description: string;
  notionIds: NotionId[];
  ponts: Pont[];
}

export const CLUSTERS: Cluster[] = [
  {
    id: "sujet",
    titre: "Le sujet",
    description:
      "L'homme face à lui-même : ce qu'il sait de soi, ce qui lui échappe, et sa capacité à se déterminer.",
    notionIds: ["conscience", "inconscient", "liberte", "devoir"],
    ponts: [
      { a: "conscience", b: "inconscient", lien: "Suis-je transparent à moi-même, ou une part de moi m'échappe-t-elle ?" },
      { a: "inconscient", b: "liberte", lien: "Si l'inconscient me détermine, suis-je encore libre et responsable ?" },
      { a: "conscience", b: "liberte", lien: "Se connaître soi-même rend-il plus libre, ou peut-il paralyser ?" },
      { a: "liberte", b: "devoir", lien: "Le devoir suppose la liberté (« tu dois, donc tu peux »)." },
    ],
  },
  {
    id: "morale-politique",
    titre: "La morale & la politique",
    description:
      "Bien agir et vivre ensemble : le devoir, le juste, l'État, et la place du bonheur.",
    notionIds: ["devoir", "justice", "etat", "bonheur"],
    ponts: [
      { a: "devoir", b: "bonheur", lien: "Le devoir s'oppose-t-il au bonheur, ou en rend-il digne ?" },
      { a: "justice", b: "etat", lien: "Légal n'est pas légitime : une loi de l'État peut être injuste." },
      { a: "etat", b: "devoir", lien: "Doit-on toujours obéir, ou existe-t-il un devoir de désobéir ?" },
      { a: "justice", b: "bonheur", lien: "Peut-on être heureux en étant injuste ? (Gygès, Calliclès / Socrate)" },
    ],
  },
  {
    id: "connaissance",
    titre: "La raison & le réel",
    description:
      "Connaître le vrai : les pouvoirs et les limites de la raison, de la science, et le statut de la croyance.",
    notionIds: ["raison", "verite", "science", "religion"],
    ponts: [
      { a: "science", b: "verite", lien: "La science donne-t-elle la vérité, ou seulement des vérités provisoires ?" },
      { a: "raison", b: "religion", lien: "Foi et raison s'opposent-elles, ou relèvent-elles de domaines distincts ?" },
      { a: "raison", b: "verite", lien: "La certitude rationnelle suffit-elle à garantir la vérité ?" },
      { a: "science", b: "religion", lien: "Le « comment » (science) et le « pourquoi » (religion) — Russell." },
    ],
  },
  {
    id: "culture",
    titre: "La culture",
    description:
      "Ce que l'homme produit : l'œuvre d'art, le langage, la technique et le travail.",
    notionIds: ["art", "langage", "technique", "travail"],
    ponts: [
      { a: "art", b: "technique", lien: "Même origine (technè) : qu'est-ce qui distingue l'œuvre de l'objet utile ?" },
      { a: "travail", b: "technique", lien: "La technique libère-t-elle le travail ou l'aliène-t-elle ?" },
      { a: "langage", b: "art", lien: "Le langage poétique dit-il ce que le langage ordinaire manque ?" },
      { a: "langage", b: "verite", lien: "Les mots nous rapprochent-ils des choses ou les recouvrent-ils ?" },
    ],
  },
  {
    id: "existence",
    titre: "La nature & le temps",
    description:
      "L'homme dans le monde : son rapport à la nature, au temps, et à sa propre finitude.",
    notionIds: ["nature", "temps", "liberte", "bonheur"],
    ponts: [
      { a: "nature", b: "technique", lien: "Maîtriser la nature, ou s'en sentir responsable (Jonas) ?" },
      { a: "temps", b: "bonheur", lien: "Faut-il vivre dans le présent pour être heureux ?" },
      { a: "temps", b: "conscience", lien: "Le temps existe-t-il hors de la conscience qui le vit ?" },
      { a: "nature", b: "liberte", lien: "L'homme a-t-il une nature, ou se fait-il librement ?" },
    ],
  },
];

export interface SujetPont {
  intitule: string;
  notions: NotionId[];
  idee: string;
}

/** Sujets « transversaux » à ressortir le jour J pour montrer qu'on relie tout. */
export const SUJETS_PONTS: SujetPont[] = [
  { intitule: "Peut-on être heureux sans être libre ?", notions: ["bonheur", "liberte"], idee: "Un bonheur de pure satisfaction passive est-il un vrai bonheur ? La liberté entre comme « mener sa vie » vs « subir une vie agréable »." },
  { intitule: "La conscience de soi rend-elle plus libre ?", notions: ["conscience", "liberte"], idee: "Se connaître permet de se déterminer (I), mais peut paralyser ou rester illusoire (II) ; la liberté est lucidité conquise (III)." },
  { intitule: "Le devoir s'oppose-t-il au bonheur ?", notions: ["devoir", "bonheur"], idee: "Le devoir contraint (Kant) mais rend digne du bonheur ; la vertu comme composante du bonheur (Aristote)." },
  { intitule: "Faut-il opposer la raison et la croyance ?", notions: ["raison", "religion"], idee: "Distinguer les domaines : la raison régit le savoir, la foi le sens (Kant, Russell)." },
  { intitule: "Les théories scientifiques nous donnent-elles la vérité ?", notions: ["science", "verite"], idee: "La science vise le vrai mais par des vérités révisables (Popper, Bachelard) : sa force est de se corriger." },
  { intitule: "L'art nous détourne-t-il de la réalité ?", notions: ["art", "verite"], idee: "Illusion (Platon) ou dévoilement d'une vérité plus profonde (Hegel, Proust) ?" },
  { intitule: "La technique nous libère-t-elle ?", notions: ["technique", "liberte"], idee: "Elle libère des contraintes naturelles (Descartes) mais crée des dépendances (Heidegger) : tout dépend de l'usage et de la responsabilité (Jonas)." },
  { intitule: "Le travail est-il une fatalité ?", notions: ["travail", "liberte"], idee: "Nécessité subie (Genèse) ou réalisation de soi (Marx, Hegel) ? Le problème, c'est l'aliénation, pas le travail." },
  { intitule: "Peut-on désobéir aux lois ?", notions: ["etat", "justice", "devoir"], idee: "Ordre nécessaire (Hobbes) vs lois injustes (légal/légitime) ; la désobéissance civile comme devoir (Thoreau, Arendt)." },
  { intitule: "Le langage trahit-il la pensée ?", notions: ["langage", "conscience"], idee: "Le mot exprime la pensée (Hegel) mais le mot général trahit le singulier (Bergson) ; travailler la langue (poésie)." },
  { intitule: "Le temps est-il notre ennemi ?", notions: ["temps", "bonheur"], idee: "Il détruit (Héraclite) mais conditionne la vie et le sens (Heidegger) ; le problème est notre usage du temps (Sénèque)." },
  { intitule: "Sommes-nous responsables de la nature ?", notions: ["nature", "technique"], idee: "Maîtrise (Descartes) vs responsabilité née de la puissance (Jonas)." },
];
