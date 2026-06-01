import type { Notion } from "../types";

export const conscience: Notion = {
  id: "conscience",
  titre: "La conscience",
  sousTitre: "Se savoir soi : privilège ou illusion ?",
  couleur: "#0d9488",
  accroche:
    "L'être humain est sans doute le seul vivant qui sait qu'il va mourir. Cette lucidité fait sa grandeur — il peut se penser lui-même — mais aussi son angoisse. La conscience est ce pouvoir étrange de se dédoubler : être à la fois acteur de sa vie et spectateur de soi.",
  definitions: [
    { terme: "Conscience", def: "Relation par laquelle un sujet se rapporte à lui-même et au monde. Du latin *cum-scientia* : « accompagné de savoir »." },
    { terme: "Conscience immédiate", def: "Présence spontanée à ce que je vis (je perçois, je sens) sans retour réflexif." },
    { terme: "Conscience réflexive", def: "Retour de l'esprit sur lui-même : je sais que je pense, je me prends pour objet. Le « redoublement » propre à l'homme." },
    { terme: "Conscience morale", def: "Capacité de juger le bien et le mal de ses actes (le remords, le devoir)." },
    { terme: "Cogito", def: "« Je pense » : l'acte par lequel, chez Descartes, le sujet saisit sa propre existence comme certaine." },
  ],
  cours: [
    {
      titre: "1. Les sens de la conscience",
      paragraphes: [
        "La conscience est d'abord **présence au monde** : percevoir, sentir, c'est être conscient de quelque chose. Mais l'homme a aussi une **conscience réflexive** : il peut faire *retour sur lui-même*, se prendre pour objet de pensée.",
        "On distingue enfin la conscience *psychologique* (j'ai conscience de ce que je vis) de la conscience *morale* (je juge si mon acte est bien ou mal). Cette dernière fonde la responsabilité.",
      ],
    },
    {
      titre: "2. La conscience fonde le sujet (Descartes)",
      paragraphes: [
        "**Descartes** cherche une certitude absolue. Il *doute de tout* : ses sens le trompent, le monde pourrait être un rêve, un « malin génie » pourrait l'abuser. Mais une chose résiste : pour douter, il faut penser, et pour penser, il faut exister.",
        "D'où le **cogito** : « *Je pense, donc je suis* ». La conscience de soi devient le roc inébranlable sur lequel reconstruire toute connaissance. Le sujet, c'est d'abord une *chose pensante*.",
      ],
    },
    {
      titre: "3. La conscience de soi est-elle connaissance de soi ?",
      paragraphes: [
        "Avoir conscience de soi, est-ce se connaître ? Pas si vite. **Kant** note que le « je pense » accompagne toutes mes représentations, mais ne me livre pas la *connaissance* de ce que je suis.",
        "Pire : **Spinoza** affirme que nous nous croyons libres parce que nous sommes conscients de nos actes mais *ignorants des causes* qui nous déterminent. La conscience peut donc être source d'**illusion** — ce que l'hypothèse de l'inconscient (Freud) radicalisera.",
      ],
    },
    {
      titre: "4. La conscience et autrui",
      paragraphes: [
        "Pour **Hegel**, la conscience de soi ne se forme pas seule : j'ai besoin d'être *reconnu* par une autre conscience (dialectique du maître et de l'esclave). Je deviens sujet dans le regard d'autrui.",
        "**Sartre** radicalise : sous le *regard* d'autrui, j'éprouve que je suis aussi un objet pour lui (la honte). Autrui est à la fois ce qui me menace et ce qui me révèle à moi-même.",
      ],
    },
    {
      titre: "5. Conscience et liberté",
      paragraphes: [
        "**Bergson** lie la conscience à la *liberté* : plus un acte est automatique (habitude, instinct), moins il est conscient ; plus il exige un *choix*, plus la conscience s'intensifie. La conscience « est synonyme de choix ».",
        "La **conscience morale**, enfin, fait de moi un être responsable : le remords prouve que je me juge, donc que je me tiens pour l'auteur de mes actes.",
      ],
    },
  ],
  theses: [
    { auteur: "Descartes", oeuvre: "Méditations métaphysiques", idee: "Le cogito : la conscience de soi est la première certitude, fondement du sujet et du savoir." },
    { auteur: "Locke", oeuvre: "Essai sur l'entendement humain", idee: "L'identité personnelle repose sur la conscience et la mémoire : je suis le même tant que je me souviens d'être moi." },
    { auteur: "Kant", oeuvre: "Critique de la raison pure", idee: "Le « je pense » accompagne mes représentations (aperception), mais ne me donne pas la connaissance de mon moi." },
    { auteur: "Hegel", oeuvre: "Phénoménologie de l'esprit", idee: "La conscience de soi advient par la reconnaissance d'autrui (maître / esclave)." },
    { auteur: "Bergson", oeuvre: "L'Énergie spirituelle", idee: "La conscience est d'autant plus vive que le choix est libre : conscience = vie + liberté." },
    { auteur: "Sartre", oeuvre: "L'Être et le Néant", idee: "La conscience est toujours conscience de quelque chose (intentionnalité) ; le regard d'autrui me révèle à moi-même." },
  ],
  citations: [
    { texte: "Je pense, donc je suis.", auteur: "Descartes", oeuvre: "Discours de la méthode", usage: "Pour fonder le sujet conscient en I. À ne jamais lâcher seule : expliquer que c'est la SEULE certitude qui résiste au doute." },
    { texte: "L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant.", auteur: "Pascal", oeuvre: "Pensées", usage: "La conscience comme grandeur paradoxale : fragile mais capable de se penser et de penser l'univers." },
    { texte: "Les hommes se croient libres parce qu'ils sont conscients de leurs actions, mais ignorants des causes qui les déterminent.", auteur: "Spinoza", oeuvre: "Éthique", usage: "En II, pour montrer que la conscience peut être illusion : transition idéale vers l'inconscient et le déterminisme." },
    { texte: "Conscience ! conscience ! instinct divin…", auteur: "Rousseau", oeuvre: "Profession de foi du vicaire savoyard", usage: "Sur la conscience morale : un sentiment intérieur du bien et du mal, antérieur au raisonnement." },
  ],
  paradoxes: [
    "La conscience est-elle le propre de l'homme, ou les animaux ont-ils une forme de conscience ?",
    "La conscience de soi est-elle une vraie connaissance de soi, ou une source d'illusions ?",
    "Suis-je le maître de mes pensées, ou suis-je traversé par ce qui m'échappe (l'inconscient) ?",
    "La conscience me sépare-t-elle du monde et des autres, ou est-ce par elle que je m'y relie ?",
  ],
  sujets: [
    {
      intitule: "La conscience est-elle le propre de l'homme ?",
      analyse:
        "Deux pièges dans « propre » : (1) ce qui appartient en exclusivité à l'homme, (2) ce qui le définit. Il faut aussi distinguer conscience immédiate (sentir) et réflexive (se savoir). Les animaux ont peut-être la première, pas la seconde.",
      problematique:
        "La conscience appartient-elle en propre à l'homme, ou n'est-elle qu'une différence de degré avec l'animal — et l'homme est-il d'ailleurs toujours pleinement conscient ?",
      plan: [
        { partie: "I. Thèse", idee: "La conscience réflexive et morale semble réserver à l'homme un statut de sujet.", auteurs: "Descartes (cogito), Kant (l'homme « possède le Je »), Pascal", exemple: "L'homme peut dire « je », tenir un journal, se juger lui-même." },
        { partie: "II. Antithèse", idee: "Mais l'animal a des états de conscience, et l'homme a de larges zones d'inconscience.", auteurs: "Éthologie (test du miroir), Darwin (continuité), Freud", exemple: "Les grands singes se reconnaissent dans un miroir ; l'homme dort, rêve, agit par habitude." },
        { partie: "III. Dépassement", idee: "Le propre de l'homme n'est pas d'« avoir » une conscience, mais d'en faire un usage réflexif, langagier et moral.", auteurs: "Bergson (degrés), Hegel (reconnaissance)", exemple: "Seul l'homme se demande s'il est conscient — la question elle-même est une preuve." },
      ],
      astuce:
        "La III se trouve en remarquant que poser le sujet (« suis-je conscient ? ») est déjà un acte réflexif que seul l'homme accomplit. On déplace « propre » de l'avoir vers l'exercice.",
    },
    {
      intitule: "Suis-je ce que j'ai conscience d'être ?",
      analyse:
        "Le sujet oppose l'être (ce que je suis vraiment) et le paraître à mes propres yeux (ce dont j'ai conscience). La transparence du cogito est-elle totale ?",
      problematique:
        "Ma conscience me donne-t-elle un accès transparent et complet à ce que je suis, ou me cache-t-elle une part de moi-même ?",
      plan: [
        { partie: "I. Thèse", idee: "Je me saisis immédiatement par la conscience : je suis ce que je pense être.", auteurs: "Descartes (cogito), Locke (mémoire et identité)", exemple: "Je sais que j'ai mal, que je veux ceci : personne ne le sait mieux que moi." },
        { partie: "II. Antithèse", idee: "Mais je me trompe sur moi : illusions, mauvaise foi, déterminismes inconscients.", auteurs: "Spinoza (ignorance des causes), Freud (inconscient), Sartre (mauvaise foi)", exemple: "Un lapsus, un acte manqué révèlent un désir que je m'avoue pas." },
        { partie: "III. Dépassement", idee: "Le moi n'est pas une donnée transparente mais une tâche : se connaître se conquiert.", auteurs: "Socrate (« connais-toi toi-même »), Freud (« rendre conscient l'inconscient »)", exemple: "On apprend qui l'on est par l'épreuve, le temps, le regard d'autrui." },
      ],
      astuce:
        "Tension entre « avoir conscience de soi » et « se connaître » : la II creuse l'écart, la III en fait un projet (le moi à construire). Évite de conclure « l'inconscient gouverne tout » : ce serait nier toute liberté.",
    },
    {
      intitule: "La conscience de soi rend-elle plus libre ?",
      analyse:
        "On suppose un lien évident entre se connaître et se déterminer. Mais la conscience peut aussi paralyser (l'hésitation, l'angoisse), et l'inconscient peut rester maître.",
      problematique:
        "La conscience de soi est-elle la condition de la liberté, ou peut-elle au contraire l'entraver, voire n'être qu'une illusion de liberté ?",
      plan: [
        { partie: "I. Thèse", idee: "Se connaître, c'est pouvoir se déterminer plutôt que subir ses impulsions.", auteurs: "Descartes, Kant (autonomie), Stoïciens", exemple: "Repérer sa colère permet de ne pas s'y laisser emporter." },
        { partie: "II. Antithèse", idee: "Mais la conscience peut être illusion (Spinoza) ou source d'angoisse paralysante.", auteurs: "Spinoza, Bergson (l'excès de réflexion fige l'action)", exemple: "Trop analyser un choix peut empêcher de choisir." },
        { partie: "III. Dépassement", idee: "La liberté n'est pas donnée par la conscience seule : elle se gagne en éclairant ses déterminations pour agir avec elles.", auteurs: "Freud (« là où était le ça, le je doit advenir »), Sartre", exemple: "Comprendre pourquoi je répète une erreur est le début de la liberté de ne plus la commettre." },
      ],
      astuce:
        "Plan « ni naïf, ni désespéré » : la conscience ne suffit pas (contre I) mais n'est pas vaine (contre II). La liberté est un travail de lucidité.",
    },
  ],
  flashcards: [
    { recto: "Conscience immédiate vs réflexive ?", verso: "Immédiate : présence spontanée à ce qu'on vit. Réflexive : retour sur soi, se savoir en train de penser (propre à l'homme)." },
    { recto: "Le cogito de Descartes, en une phrase ?", verso: "« Je pense, donc je suis » : même en doutant de tout, je ne peux douter que je pense, donc que j'existe. Première certitude." },
    { recto: "Que reproche Spinoza à la conscience ?", verso: "Elle nous fait croire libres car nous sommes conscients de nos actes mais ignorants des causes qui nous déterminent." },
    { recto: "La conscience de soi chez Hegel ?", verso: "Elle advient par la reconnaissance d'une autre conscience (dialectique maître/esclave) : on devient sujet dans le regard d'autrui." },
    { recto: "Conscience et liberté selon Bergson ?", verso: "La conscience s'intensifie avec le choix : acte automatique = peu de conscience ; choix libre = conscience vive." },
    { recto: "Qu'est-ce que la conscience morale ?", verso: "La capacité de juger le bien et le mal de ses actes ; le remords prouve qu'on se tient pour l'auteur de ses actes." },
    { recto: "Conscience selon Sartre (intentionnalité) ?", verso: "« Toute conscience est conscience de quelque chose » : elle se dépasse vers le monde ; le regard d'autrui me révèle aussi comme objet." },
  ],
  quiz: [
    { question: "Le cogito est l'œuvre de…", choix: ["Spinoza", "Descartes", "Hegel", "Bergson"], bonne: 1, explication: "« Je pense, donc je suis » : Descartes, Discours de la méthode / Méditations." },
    { question: "Pour Spinoza, la conscience…", choix: ["nous donne la connaissance des causes", "nous fait croire libres par ignorance des causes", "n'existe pas", "est propre aux animaux"], bonne: 1, explication: "Nous sommes conscients de nos actes mais ignorants de ce qui les détermine." },
    { question: "La reconnaissance par autrui comme source de la conscience de soi est une idée de…", choix: ["Hegel", "Descartes", "Kant", "Locke"], bonne: 0, explication: "Phénoménologie de l'esprit : dialectique du maître et de l'esclave." },
    { question: "Selon Bergson, la conscience est d'autant plus intense que…", choix: ["l'acte est automatique", "l'acte engage un choix libre", "on dort", "on obéit"], bonne: 1, explication: "Conscience = choix : l'habitude diminue la conscience, le choix l'augmente." },
    { question: "Le test du miroir sert à étudier…", choix: ["la mémoire", "une forme de conscience de soi chez l'animal", "le langage", "le devoir"], bonne: 1, explication: "Certains animaux (grands singes) se reconnaissent : argument contre l'exclusivité humaine de la conscience." },
  ],
  liens: ["inconscient", "liberte", "devoir"],
};
