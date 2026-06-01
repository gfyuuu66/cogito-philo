/**
 * Méthode de la dissertation de philosophie.
 * Contenu structuré, affiché dans la page « Méthode ».
 */

export interface MethodStep {
  numero: number;
  titre: string;
  resume: string;
  details: string[];
  interdits?: string[];
}

/** L'introduction en 4 temps (l'entonnoir). */
export const INTRO_STEPS: MethodStep[] = [
  {
    numero: 1,
    titre: "L'amorce (l'accroche)",
    resume: "Amener le sujet intelligemment, sans qu'il tombe du ciel.",
    details: [
      "Pars d'un fait précis : exemple historique, situation contemporaine, mythe, œuvre, paradoxe du quotidien — en lien direct avec le thème.",
      "Enchaîne vite vers le sujet : l'amorce doit conduire à la question, pas faire un hors-sujet décoratif.",
    ],
    interdits: ["« De tout temps… »", "« Depuis la nuit des temps… »", "« Dans la société actuelle… »"],
  },
  {
    numero: 2,
    titre: "Énoncé du sujet et définition des termes",
    resume: "Citer le sujet, puis définir les mots-clés philosophiquement.",
    details: [
      "Recopie le sujet exact.",
      "Définis chaque terme important de façon philosophique (pas « le Larousse dit que… »).",
      "Repère le mot qui fait problème (souvent un « tout », « seulement », « toujours », « ne… que »).",
    ],
  },
  {
    numero: 3,
    titre: "La problématique (la tension)",
    resume: "Montrer que le sujet cache un paradoxe à résoudre.",
    details: [
      "Utilise le gabarit : « D'un côté… mais d'un autre côté… dès lors, le problème est… ».",
      "La question finale ne doit PAS pouvoir se répondre par oui/non : commence par « Comment… », « Dans quelle mesure… », « À quelles conditions… ».",
    ],
  },
  {
    numero: 4,
    titre: "L'annonce du plan",
    resume: "Annoncer I, II, III de façon fluide.",
    details: [
      "Phrases liées, qui racontent une progression : « Dans un premier temps… Toutefois… Enfin… ».",
      "Annonce des idées, pas des numéros.",
    ],
    interdits: ["« Dans un grand I, puis dans un grand II… »"],
  },
];

/** La problématique : principe, gabarit, test. */
export const PROBLEMATIQUE = {
  principe:
    "Un sujet de philo n'est jamais une simple question. C'est un piège : deux idées qui semblent vraies toutes les deux mais se contredisent. Ta problématique met cette tension au jour.",
  etapes: [
    { titre: "1. L'évidence (la doxa)", texte: "La réponse spontanée, celle de « tout le monde ». C'est ton point de départ, ta future Partie I." },
    { titre: "2. Le grain de sable (l'objection)", texte: "Ce qui cloche dans l'évidence : une exception, un concept, une situation qui la fait vaciller. Ta future Partie II." },
    { titre: "3. La tension (ta problématique)", texte: "Relie les deux pour formuler le problème à résoudre. Ta future Partie III y répondra." },
  ],
  gabarit:
    "D'un côté, il semble évident que [Évidence / Thèse], parce que…\nMais d'un autre côté, à y regarder de plus près, on se rend compte que [Objection / Antithèse], parce que…\nDès lors, le problème qui se pose est le suivant : Comment concilier X et Y ? / À quelles conditions… sans pour autant… ?",
  test:
    "Test ultime : si ta question finale se répond par un simple « oui » ou « non », ce n'est pas une bonne problématique. Reformule avec « Comment… », « Dans quelle mesure… », « À quelles conditions… ».",
};

/** Le plan dialectique. */
export const PLAN = {
  principe:
    "Le plan dialectique (Thèse / Antithèse / Synthèse) est le plus sûr. Oublie le « Oui / Non / Peut-être » : c'est le meilleur moyen d'avoir 6/20.",
  parties: [
    { nom: "I. La thèse (l'évidence)", role: "Tu réponds par la réponse la plus logique et tu la défends à fond, avec des arguments solides." },
    { nom: "II. L'antithèse (l'objection)", role: "Tu critiques la Partie I : tu montres ses limites, le problème moral ou logique qu'elle pose, et tu défends la position inverse." },
    { nom: "III. La synthèse (le dépassement)", role: "Tu RÉSOUS la contradiction. Surtout pas « un peu des deux ». Souvent : tu redéfinis un mot du sujet, ou tu poses une condition stricte." },
  ],
  regleSynthese:
    "La III ne fait pas un compromis mou. Elle dépasse : elle distingue deux sens d'un mot, ou pose une condition (« il est juste de faire X, à la seule condition de Y »).",
};

/** La méthode AEI pour rédiger un paragraphe. */
export const AEI = {
  titre: "Rédiger un paragraphe : la méthode A.E.I.",
  etapes: [
    { lettre: "A", mot: "Argument", texte: "Tu affirmes ton idée (ex. : la science avance en corrigeant ses erreurs)." },
    { lettre: "E", mot: "Explication", texte: "Tu l'expliques avec un concept ou un auteur (ex. : la falsifiabilité de Popper)." },
    { lettre: "I", mot: "Illustration", texte: "Tu donnes un exemple précis (ex. : « tous les métaux se dilatent », théorie testable)." },
  ],
  transition:
    "Entre chaque grande partie, une phrase de transition : elle relève la limite de ce qui précède et ouvre la partie suivante.",
};

/** L'art d'utiliser une citation (name-dropping vs citation au travail). */
export const CITATION_METHOD = {
  principe:
    "Une citation ne vaut rien si tu la « lâches » seule. Le geste qui rapporte des points : citer → décoder → s'en servir.",
  gestes: [
    "Citer : la citation exacte + l'auteur (+ l'œuvre si tu la connais).",
    "Décoder : reformule ce qu'elle veut dire avec tes mots.",
    "S'en servir : montre ce qu'elle prouve dans TON raisonnement, à CE moment du plan.",
  ],
  mauvais: {
    label: "Note basse — name-dropping",
    texte:
      "« Comme dit Kant, “agis seulement d'après la maxime…”. Donc la morale c'est important. » → La citation est plaquée, non expliquée, non reliée au sujet.",
  },
  bon: {
    label: "Note haute — citation au travail",
    texte:
      "« Kant formule l'impératif catégorique : “agis seulement d'après la maxime telle que tu puisses vouloir qu'elle devienne une loi universelle.” Autrement dit, une action n'est morale que si elle peut être universalisée sans se contredire. Or le mensonge échoue à ce test : si tout le monde mentait, la parole ne vaudrait plus rien. La citation prouve donc que certains moyens sont immoraux par principe, quelles qu'en soient les conséquences. »",
  },
};

/** Vocabulaire à bannir et à privilégier. */
export const MOTS_INTERDITS = [
  "« De tout temps… », « Depuis la nuit des temps… »",
  "« C'est pas un bon acte », « ça fait des problèmes » (familier)",
  "« Un peu des deux », « ça dépend des gens » (en synthèse)",
  "« Dans un grand I… »",
  "Confondre légal et légitime, objectif et subjectif",
];

export const MOTS_PRECIS = [
  "Légitime / légal, objectif / subjectif, nécessaire / contingent",
  "Aliénation, autonomie / hétéronomie, dignité",
  "Falsifiable, induction, a priori / a posteriori",
  "Immanent / transcendant, finalité, déterminisme",
];

/** Check-list du jour J. */
export const CHECKLIST = [
  "Choisis ton sujet avec ta tête, pas tes émotions : décortique chaque mot avant de fuir.",
  "Passe 30 à 45 min au brouillon : trouve d'abord l'évidence, l'objection, puis les 3 parties et la problématique.",
  "Ne rédige rien tant que ton plan et ta problématique ne sont pas verrouillés.",
  "Pour chaque sous-partie : Argument → Explication (auteur/concept) → Illustration.",
  "Une citation = citer + décoder + s'en servir. Jamais lâchée seule.",
  "Relis : mots précis, pas de familier, transitions entre les parties.",
];
