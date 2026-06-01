/**
 * Modèle de données du contenu philosophique.
 * Le texte des cours et paragraphes accepte une mise en forme légère :
 *   **gras**  → mot important
 *   *italique* → notion / nuance
 */

export type NotionId =
  | "art"
  | "bonheur"
  | "conscience"
  | "devoir"
  | "etat"
  | "inconscient"
  | "justice"
  | "langage"
  | "liberte"
  | "nature"
  | "raison"
  | "religion"
  | "science"
  | "technique"
  | "temps"
  | "travail"
  | "verite";

export interface Definition {
  terme: string;
  def: string;
}

export interface These {
  auteur: string;
  oeuvre?: string;
  idee: string;
}

export interface Citation {
  texte: string;
  auteur: string;
  oeuvre?: string;
  /** Comment et à quel moment de la dissertation s'en servir. */
  usage: string;
}

export interface CourseSection {
  titre: string;
  paragraphes: string[];
}

export interface PlanPartie {
  /** Étiquette : "I. Thèse", "II. Antithèse", "III. Dépassement" */
  partie: string;
  /** L'idée directrice de la partie (titre rédigé). */
  idee: string;
  /** Auteurs / concepts à mobiliser. */
  auteurs?: string;
  /** Un exemple concret pour illustrer. */
  exemple?: string;
}

export interface Sujet {
  intitule: string;
  /** Comment décrypter le sujet et repérer la tension. */
  analyse: string;
  /** La problématique rédigée (la tension finale). */
  problematique: string;
  plan: PlanPartie[];
  /** "Comment j'ai trouvé ce plan" : le cheminement. */
  astuce: string;
}

export interface Flashcard {
  recto: string;
  verso: string;
}

export interface QuizQuestion {
  question: string;
  choix: string[];
  /** index de la bonne réponse dans `choix` */
  bonne: number;
  explication: string;
}

export interface Notion {
  id: NotionId;
  titre: string;
  sousTitre: string;
  /** teinte d'accent (hex) pour personnaliser la carte */
  couleur: string;
  /** amorce / accroche contemporaine pour ouvrir une dissertation */
  accroche: string;
  definitions: Definition[];
  cours: CourseSection[];
  theses: These[];
  citations: Citation[];
  /** débats / tensions qui problématisent la notion */
  paradoxes: string[];
  /** 3 sujets type avec plan complet */
  sujets: Sujet[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  liens: NotionId[];
}
