import type { Notion } from "../types";

export const nature: Notion = {
  id: "nature",
  titre: "La nature",
  sousTitre: "L'inné, le donné, l'essence — et ses pièges",
  couleur: "#16a34a",
  accroche:
    "« C'est contre nature », « c'est naturel » : ces formules servent à condamner ou à justifier presque tout. Mais derrière ce mot se cachent au moins trois sens très différents — l'univers, ce que l'homme n'a pas transformé, et l'essence d'une chose — et un piège : croire que « naturel » signifie « bon ».",
  definitions: [
    { terme: "Nature (1)", def: "L'ensemble du réel physique et ses lois : l'univers, le monde, les êtres vivants soumis à des lois." },
    { terme: "Nature (2)", def: "Ce qui n'a pas été transformé par l'homme, par opposition à l'artificiel et à la culture." },
    { terme: "Nature (3)", def: "L'essence d'une chose : ce qu'elle est fondamentalement (« la nature humaine », « la nature du feu »)." },
    { terme: "Culture", def: "Tout ce que l'homme ajoute à la nature : techniques, langues, lois, arts, savoirs, transmis et appris (l'acquis)." },
    { terme: "Sophisme naturaliste", def: "Erreur consistant à déduire ce qui *doit être* (norme) de ce qui *est* (fait) : « c'est naturel, donc c'est bien »." },
  ],
  cours: [
    {
      titre: "1. Les trois sens de « nature »",
      paragraphes: [
        "Premier sens : la **nature comme univers**, l'ensemble du réel régi par des lois (la gravité, les saisons). C'est l'objet de la science.",
        "Deuxième sens : la nature comme **ce qui n'est pas transformé par l'homme** (une forêt vierge), opposée à l'artificiel et à la *culture*. Mais existe-t-il encore une nature « pure » ?",
        "Troisième sens : la nature comme **essence**, ce qu'une chose est en profondeur (« la nature du triangle », « la nature humaine »).",
      ],
    },
    {
      titre: "2. Nature et culture",
      paragraphes: [
        "L'homme est-il un être de **nature** ou de **culture** ? **Rousseau** le distingue de l'animal par la *perfectibilité* : il n'a pas de programme fixe, il peut se transformer indéfiniment.",
        "**Lévi-Strauss** cherche le seuil du passage : la *prohibition de l'inceste* est à la fois universelle (comme la nature) et une règle (comme la culture). Elle marque le moment où l'humanité institue des règles : l'entrée dans la culture.",
      ],
    },
    {
      titre: "3. Y a-t-il une nature humaine ?",
      paragraphes: [
        "Pour **Aristote**, oui : l'homme est par nature un « animal politique » et « doué de raison ». Il a une *essence* qui définit sa fin.",
        "**Sartre** s'y oppose : « il n'y a pas de nature humaine » car « l'existence précède l'essence ». L'homme n'est rien d'autre que ce qu'il se fait : il n'a pas de programme, il est *liberté*. La question reste ouverte.",
      ],
    },
    {
      titre: "4. La nature a-t-elle une finalité ?",
      paragraphes: [
        "**Aristote** pense la nature comme orientée vers des *fins* : « la nature ne fait rien en vain » ; chaque être tend vers son accomplissement (le gland vers le chêne).",
        "La science moderne (**Descartes**) rompt avec cette vision : la nature est une *machine*, un jeu de causes mécaniques sans intention. **Spinoza** identifie Dieu et la Nature (*Deus sive Natura*) : une totalité nécessaire, sans plan extérieur.",
      ],
    },
    {
      titre: "5. « Naturel » veut-il dire « bien » ?",
      paragraphes: [
        "On invoque souvent la nature comme *norme* : « ce serait contre nature ». Mais **Mill** montre que « suivre la nature » est absurde : la nature est aussi *violente*, *cruelle*, *injuste* (la maladie, les catastrophes, la loi du plus fort).",
        "On ne peut donc pas déduire le *bien* du *naturel* (c'est le *sophisme naturaliste*, le passage illégitime de l'*être* au *devoir-être*). La morale ne consiste pas à imiter la nature, mais souvent à la *corriger*.",
      ],
    },
  ],
  theses: [
    { auteur: "Aristote", oeuvre: "Les Politiques / Physique", idee: "La nature est orientée vers des fins (« ne fait rien en vain ») ; l'homme est par nature un animal politique et rationnel." },
    { auteur: "Descartes", oeuvre: "Principes de la philosophie", idee: "La nature est une machine : un système de causes mécaniques sans finalité ni intention." },
    { auteur: "Rousseau", oeuvre: "Discours sur l'origine de l'inégalité", idee: "L'homme se distingue par la perfectibilité ; à l'état de nature, il n'est ni bon ni méchant, c'est la société qui le déprave." },
    { auteur: "Sartre", oeuvre: "L'existentialisme est un humanisme", idee: "« Il n'y a pas de nature humaine » : l'existence précède l'essence, l'homme se fait par sa liberté." },
    { auteur: "Lévi-Strauss", oeuvre: "Les Structures élémentaires de la parenté", idee: "La prohibition de l'inceste, universelle et normative, marque le passage de la nature à la culture." },
    { auteur: "Mill", oeuvre: "La Nature", idee: "« Suivre la nature » est absurde : la nature est cruelle ; la morale corrige la nature, elle ne l'imite pas." },
  ],
  citations: [
    { texte: "La nature ne fait rien en vain.", auteur: "Aristote", oeuvre: "Les Politiques", usage: "Pour la vision finaliste de la nature (tout être tend vers une fin). À opposer à la nature-machine de Descartes." },
    { texte: "Il n'y a pas de nature humaine, puisqu'il n'y a pas de Dieu pour la concevoir.", auteur: "Sartre", oeuvre: "L'existentialisme est un humanisme", usage: "Pour un sujet « y a-t-il une nature humaine ? » : l'homme est liberté, non essence figée. Décoder : l'homme se définit par ses actes." },
    { texte: "La coutume est une seconde nature qui détruit la première.", auteur: "Pascal", oeuvre: "Pensées", usage: "Brouille la frontière nature/culture : ce qu'on croit naturel est souvent une habitude acquise. Utile en II." },
  ],
  paradoxes: [
    "Existe-t-il une nature humaine, ou l'homme se fait-il entièrement par la culture et la liberté ?",
    "Peut-on fonder une morale sur la nature ? « Naturel » signifie-t-il « bien » ?",
    "La nature a-t-elle une finalité, ou est-elle une machine aveugle ?",
    "L'homme fait-il partie de la nature, ou s'en distingue-t-il ?",
  ],
  sujets: [
    {
      intitule: "Y a-t-il une nature humaine ?",
      analyse:
        "« Nature humaine » = essence universelle et fixe de l'homme. La doxa : oui, certains traits sont communs à tous (besoins, raison). Le grain de sable : l'homme varie selon les cultures et se définit par la liberté.",
      problematique:
        "L'homme possède-t-il une essence fixe et universelle qui le définit, ou bien se construit-il librement par la culture et l'histoire ?",
      plan: [
        { partie: "I. Thèse", idee: "Il existe une nature humaine : des traits universels définissent l'homme.", auteurs: "Aristote (animal politique et rationnel), besoins biologiques", exemple: "Tous les hommes parlent, vivent en société, sont mortels." },
        { partie: "II. Antithèse", idee: "Mais l'homme se définit par la culture et la liberté : pas d'essence figée.", auteurs: "Sartre (l'existence précède l'essence), Rousseau (perfectibilité), Pascal (coutume)", exemple: "Les mœurs, les valeurs, les identités varient énormément selon les sociétés." },
        { partie: "III. Dépassement", idee: "Le propre de l'homme est peut-être de n'avoir pas de nature fixe : sa « nature » est d'être un être de culture et de liberté.", auteurs: "Rousseau (perfectibilité), Sartre", exemple: "Là où l'animal a un programme, l'homme s'invente — c'est cela, sa constante." },
      ],
      astuce:
        "Le paradoxe assumé en III est élégant : la nature humaine serait l'absence de nature déterminée (la perfectibilité/liberté). Pont direct avec la liberté.",
    },
    {
      intitule: "Ce qui est naturel est-il toujours un modèle ?",
      analyse:
        "Pont nature/morale. La doxa écologique ou « sagesse » : la nature est bonne, il faut la suivre. Le grain de sable : la nature est aussi violente ; tirer une norme d'un fait est illégitime.",
      problematique:
        "La nature peut-elle servir de norme à nos conduites, ou est-il illégitime de déduire ce qui doit être de ce qui est ?",
      plan: [
        { partie: "I. Thèse", idee: "La nature semble un modèle de sagesse et d'équilibre à imiter.", auteurs: "Stoïciens (« vivre selon la nature »), écologie", exemple: "On valorise le « naturel », le respect des rythmes naturels." },
        { partie: "II. Antithèse", idee: "Mais la nature est aussi cruelle : on ne peut en tirer une morale.", auteurs: "Mill (« suivre la nature » est absurde), sophisme naturaliste", exemple: "La maladie, la prédation, la loi du plus fort sont « naturelles »." },
        { partie: "III. Dépassement", idee: "La morale ne déduit pas le bien du naturel : la culture corrige la nature en se donnant des fins.", auteurs: "Mill, Rousseau, distinction fait / valeur", exemple: "Soigner les plus faibles va « contre » la sélection naturelle — et c'est précisément moral." },
      ],
      astuce:
        "Marteler la distinction fait / norme (être / devoir-être) : c'est l'arme contre le « c'est naturel donc c'est bien ». La III montre que la valeur de la culture est de corriger la nature.",
    },
    {
      intitule: "L'homme fait-il partie de la nature ?",
      analyse:
        "La doxa scientifique : oui, l'homme est un être biologique. Le grain de sable : par la culture, la technique, la liberté, il semble se mettre à part — voire au-dessus.",
      problematique:
        "L'homme est-il un être naturel parmi d'autres, ou se distingue-t-il de la nature au point de s'en exclure ?",
      plan: [
        { partie: "I. Thèse", idee: "L'homme appartient pleinement à la nature : il est un vivant soumis à ses lois.", auteurs: "Darwin (continuité du vivant), biologie", exemple: "Naissance, besoins, mort : l'homme est un animal." },
        { partie: "II. Antithèse", idee: "Mais il s'en distingue par la culture, la technique, la liberté, la conscience.", auteurs: "Rousseau (perfectibilité), Sartre (liberté), Lévi-Strauss", exemple: "L'homme transforme la nature, invente des lois, sait qu'il mourra." },
        { partie: "III. Dépassement", idee: "L'homme est dans la nature tout en la dépassant : d'où une responsabilité particulière à son égard.", auteurs: "Jonas (responsabilité), Descartes (maîtrise)", exemple: "Capable de détruire la nature, l'homme en devient responsable — preuve qu'il n'en est pas un simple élément." },
      ],
      astuce:
        "La III articule appartenance et distinction (ni pur animal, ni pur esprit) et débouche sur la responsabilité écologique. Pont avec la technique.",
    },
  ],
  flashcards: [
    { recto: "Les trois sens de « nature » ?", verso: "(1) l'univers et ses lois ; (2) ce que l'homme n'a pas transformé (vs culture) ; (3) l'essence d'une chose." },
    { recto: "Nature vs culture : qu'est-ce que la perfectibilité (Rousseau) ?", verso: "La capacité de l'homme à se transformer indéfiniment, sans programme fixe : elle le distingue de l'animal." },
    { recto: "Le seuil nature/culture chez Lévi-Strauss ?", verso: "La prohibition de l'inceste : universelle (comme la nature) ET règle (comme la culture). Elle marque l'entrée dans la culture." },
    { recto: "« Il n'y a pas de nature humaine » : qui, pourquoi ?", verso: "Sartre : l'existence précède l'essence, l'homme se fait par sa liberté. Pas d'essence figée." },
    { recto: "Nature finaliste (Aristote) vs nature-machine (Descartes) ?", verso: "Aristote : la nature tend vers des fins (« rien en vain »). Descartes : la nature est un mécanisme sans intention." },
    { recto: "Qu'est-ce que le sophisme naturaliste ?", verso: "Déduire le devoir-être de l'être : « c'est naturel donc c'est bien ». Illégitime (Mill : la nature est aussi cruelle)." },
    { recto: "« La coutume est une seconde nature » : portée ?", verso: "Pascal : ce qu'on croit naturel est souvent une habitude acquise. La frontière nature/culture est floue." },
  ],
  quiz: [
    { question: "« Il n'y a pas de nature humaine » est de…", choix: ["Aristote", "Sartre", "Rousseau", "Descartes"], bonne: 1, explication: "Sartre : l'existence précède l'essence, l'homme est liberté." },
    { question: "La prohibition de l'inceste marque, selon Lévi-Strauss…", choix: ["la pure nature", "le passage de la nature à la culture", "la fin de la culture", "un fait biologique sans règle"], bonne: 1, explication: "Universelle et normative à la fois : seuil entre nature et culture." },
    { question: "Le « sophisme naturaliste » consiste à…", choix: ["nier la nature", "déduire le bien du naturel (l'être du devoir-être)", "imiter la culture", "confondre science et art"], bonne: 1, explication: "On ne peut pas tirer une norme d'un simple fait (Mill, Hume)." },
    { question: "Pour Descartes, la nature est…", choix: ["orientée vers des fins", "une machine sans finalité", "divine et bonne", "un modèle moral"], bonne: 1, explication: "Vision mécaniste : la nature est un système de causes, sans intention." },
    { question: "« La nature ne fait rien en vain » exprime une vision…", choix: ["mécaniste", "finaliste (Aristote)", "relativiste", "sceptique"], bonne: 1, explication: "Aristote : tout être tend vers une fin, son accomplissement." },
  ],
  liens: ["technique", "liberte", "conscience"],
};
