import type { Notion } from "../types";

export const langage: Notion = {
  id: "langage",
  titre: "Le langage",
  sousTitre: "Communiquer, penser, ou manipuler ?",
  couleur: "#9333ea",
  accroche:
    "Sur les réseaux, un mot-dièse peut détruire une réputation en une nuit. Cette puissance d'une simple formule lancée en ligne révèle que le langage n'est jamais un outil neutre : il informe, mais il agit aussi, façonne les esprits et peut devenir une arme.",
  definitions: [
    { terme: "Langage", def: "Faculté humaine d'utiliser des signes pour exprimer une pensée et communiquer." },
    { terme: "Langue", def: "Système de signes propre à une communauté (le français, l'arabe). Le langage est la faculté ; la langue, sa réalisation sociale (Saussure)." },
    { terme: "Signe", def: "Union d'un signifiant (le son, le mot) et d'un signifié (le concept). Pour Saussure, ce lien est *arbitraire*." },
    { terme: "Performatif", def: "Énoncé qui accomplit l'acte qu'il énonce : « je promets », « je vous déclare mariés ». Dire, c'est alors faire (Austin)." },
    { terme: "Novlangue", def: "Langue appauvrie inventée par Orwell (*1984*) : réduire le vocabulaire pour rendre certaines pensées impossibles." },
  ],
  cours: [
    {
      titre: "1. Langage et communication",
      paragraphes: [
        "Le langage est d'abord un **système de signes** permettant d'échanger informations, ordres, émotions. Mais l'animal aussi communique : les abeilles « dansent » pour indiquer une source (von Frisch).",
        "**Benveniste** marque la différence : le code des abeilles est un *signal* fixe, non analysable, sans dialogue. Le langage humain est *double articulation*, créatif, ouvert : il peut parler du passé, du futur, de l'absent, et même mentir.",
      ],
    },
    {
      titre: "2. Langage et pensée",
      paragraphes: [
        "Peut-on penser sans mots ? **Hegel** répond non : « c'est dans les mots que nous pensons ». Sans langage, la pensée resterait confuse, incapable d'abstraction. Croire qu'on a une idée claire qu'on ne parvient pas à dire serait une illusion.",
        "Mais **Bergson** objecte : le mot, toujours *général*, trahit la singularité de ce que je vis. « Amour », « tristesse » écrasent la nuance unique de mon expérience. Le langage exprime la pensée *et* la déforme.",
      ],
    },
    {
      titre: "3. Langage et vision du monde",
      paragraphes: [
        "L'**hypothèse de Sapir-Whorf** soutient que la langue qu'on parle *façonne* notre perception du monde : chaque langue découpe le réel à sa manière (les mots des couleurs, du temps, varient).",
        "**Quine** radicalise avec l'exemple *« gavagai »* : un explorateur ne peut jamais traduire ce mot avec certitude (le lapin ? un instant de lapin ?). Mais **Rosch** nuance : malgré le vocabulaire, les humains reconnaissent les mêmes couleurs focales. La langue *oriente* la pensée sans la *déterminer* totalement.",
      ],
    },
    {
      titre: "4. Langage et pouvoir",
      paragraphes: [
        "Le langage *agit* : « je promets », « je te baptise » accomplissent ce qu'ils disent (les **performatifs** d'Austin).",
        "Il peut donc manipuler. **Orwell** imagine la *novlangue* : en supprimant des mots (liberté, révolte), on rend la dissidence impensable. **Klemperer** (LTI) analyse comment le régime nazi a corrompu la langue allemande pour façonner les esprits. Réduire le vocabulaire, c'est réduire la pensée.",
      ],
    },
    {
      titre: "5. Convaincre ou persuader",
      paragraphes: [
        "**Convaincre** s'adresse à la raison (preuves, arguments) ; **persuader** s'adresse aux émotions (séduction, peur). **Platon** dénonce les *sophistes* (Gorgias) : le bon orateur peut faire croire n'importe quoi à n'importe qui, indépendamment du vrai.",
        "À l'heure des écrans et des images virales, ce danger reprend l'allégorie de la *caverne* : prendre les apparences (les ombres) pour la réalité. Le langage peut éclairer comme aveugler.",
      ],
    },
  ],
  theses: [
    { auteur: "Hegel", oeuvre: "Encyclopédie / Philosophie de l'esprit", idee: "« C'est dans les mots que nous pensons » : le langage est le milieu nécessaire de la pensée." },
    { auteur: "Bergson", oeuvre: "Essai sur les données immédiates de la conscience", idee: "Le mot, général et figé, trahit la singularité mouvante de l'expérience vécue." },
    { auteur: "Saussure", oeuvre: "Cours de linguistique générale", idee: "Le signe est arbitraire (lien conventionnel signifiant/signifié) ; distinguer la langue (système social) de la parole (usage individuel)." },
    { auteur: "Benveniste", oeuvre: "Problèmes de linguistique générale", idee: "Le « langage » animal est un code fermé ; seul l'homme a un langage créatif, double, capable de dialogue." },
    { auteur: "Austin", oeuvre: "Quand dire, c'est faire", idee: "Certains énoncés (performatifs) accomplissent une action : dire, c'est parfois faire." },
    { auteur: "Orwell", oeuvre: "1984", idee: "La novlangue : appauvrir le vocabulaire pour rendre la pensée critique impossible." },
  ],
  citations: [
    { texte: "C'est dans les mots que nous pensons.", auteur: "Hegel", oeuvre: "Philosophie de l'esprit", usage: "Cœur d'un sujet langage/pensée : contre l'idée d'une pensée pure antérieure aux mots. Décoder : sans langage, pas de concepts." },
    { texte: "Le mot aux contours bien arrêtés… emmagasine ce qu'il y a de stable… et par là écrase ou recouvre les impressions délicates de notre conscience.", auteur: "Bergson", oeuvre: "Essai sur les données immédiates de la conscience", usage: "Pour l'antithèse : le langage trahit le vécu singulier. Utile aussi pour l'art (qui dirait l'indicible)." },
    { texte: "La pensée naît de la parole… la langue structure le pensable.", auteur: "Orwell (esprit de)", oeuvre: "1984", usage: "Sur langage et pouvoir : la novlangue montre que limiter les mots, c'est limiter les pensées. Idéal comme exemple frappant." },
  ],
  paradoxes: [
    "Le langage exprime-t-il fidèlement la pensée, ou la trahit-il et la déforme ?",
    "Peut-on penser sans langage ?",
    "Le langage sert-il seulement à communiquer, ou aussi à agir et à manipuler ?",
    "La langue que nous parlons détermine-t-elle notre vision du monde ?",
  ],
  sujets: [
    {
      intitule: "Le langage sert-il seulement à communiquer ?",
      analyse:
        "« Seulement » est le mot clé : on ne nie pas la fonction de communication, on demande s'il n'y a que cela. Le grain de sable : penser, agir, créer, mentir sont d'autres fonctions du langage.",
      problematique:
        "La fonction du langage se réduit-elle à transmettre des informations, ou bien penser, agir et créer relèvent-ils aussi, et d'abord, du langage ?",
      plan: [
        { partie: "I. Thèse", idee: "Le langage est d'abord un outil de communication.", auteurs: "Approche fonctionnelle, code (Saussure)", exemple: "Demander son chemin, transmettre une consigne." },
        { partie: "II. Antithèse", idee: "Mais le langage sert aussi à penser, à agir et à manipuler.", auteurs: "Hegel (penser), Austin (performatif), Orwell (manipuler)", exemple: "« Je promets » crée une obligation ; la novlangue verrouille la pensée." },
        { partie: "III. Dépassement", idee: "Le langage n'est pas un simple instrument extérieur : il est le milieu même de la pensée et du rapport au monde.", auteurs: "Hegel, Benveniste (le langage fait l'homme et la société)", exemple: "La poésie ne « communique » pas une info : elle fait exister un sens neuf." },
      ],
      astuce:
        "Refuser la métaphore de l'outil en III : un outil est extérieur à celui qui l'emploie ; le langage, lui, nous constitue. C'est ce déplacement qui fait la profondeur du devoir.",
    },
    {
      intitule: "Les mots nous éloignent-ils des choses ?",
      analyse:
        "Pont langage/vérité. La doxa : les mots nomment les choses, donc nous en rapprochent. Le grain de sable : le mot général manque le singulier, et la langue impose un découpage.",
      problematique:
        "Le langage nous donne-t-il accès aux choses, ou s'interpose-t-il entre nous et le réel en le recouvrant de mots ?",
      plan: [
        { partie: "I. Thèse", idee: "Les mots nous rapprochent des choses : nommer, c'est connaître et partager.", auteurs: "Hegel (le mot fixe le concept)", exemple: "Apprendre le nom d'une plante, c'est commencer à la distinguer." },
        { partie: "II. Antithèse", idee: "Mais le mot général trahit le singulier et la langue impose sa grille.", auteurs: "Bergson (le mot écrase le vécu), Sapir-Whorf", exemple: "Aucun mot ne dit exactement CE chagrin-ci, unique." },
        { partie: "III. Dépassement", idee: "Le langage est un médiateur imparfait mais nécessaire : il faut le travailler (style, métaphore, poésie) pour approcher les choses.", auteurs: "Bergson, esthétique", exemple: "Le poète invente des mots/images pour dire ce que la langue ordinaire manque." },
      ],
      astuce:
        "La III transforme un défaut (l'imperfection du langage) en tâche (travailler la langue). Le pont avec l'art (dire l'indicible) enrichit la copie.",
    },
    {
      intitule: "Peut-on penser sans langage ?",
      analyse:
        "Question de fait ET de droit. Y a-t-il une pensée non verbale (images, intuitions) ? Et une pensée abstraite est-elle possible sans mots ?",
      problematique:
        "La pensée peut-elle exister indépendamment du langage, ou bien tout acte de penser suppose-t-il déjà des mots ?",
      plan: [
        { partie: "I. Thèse", idee: "Il semble exister une pensée sans mots : images, intuitions, gestes.", auteurs: "Expérience commune, pensée des artistes / animaux", exemple: "Visualiser un trajet sans le formuler ; l'« avoir sur le bout de la langue »." },
        { partie: "II. Antithèse", idee: "Mais la pensée claire et abstraite suppose le langage.", auteurs: "Hegel (« c'est dans les mots que nous pensons »)", exemple: "Impossible de raisonner en mathématiques ou en droit sans symboles et concepts." },
        { partie: "III. Dépassement", idee: "Pensée et langage se co-constituent : il y a des degrés, la pensée verbale étant la plus élaborée.", auteurs: "Merleau-Ponty, Bergson", exemple: "Chercher ses mots, c'est déjà penser ET élaborer sa pensée en la disant." },
      ],
      astuce:
        "« Chercher ses mots » est l'exemple décisif pour la III : on ne traduit pas une pensée toute faite, on la forme en la formulant. Ni pensée pure d'abord (contre I), ni langage seul (contre II).",
    },
  ],
  flashcards: [
    { recto: "Langue vs langage (Saussure) ?", verso: "Le langage est la faculté humaine de signifier ; la langue, le système de signes propre à une communauté." },
    { recto: "Pourquoi le signe est-il « arbitraire » (Saussure) ?", verso: "Aucun lien naturel entre le mot (signifiant) et le concept (signifié) : « arbre » et *tree* désignent la même chose." },
    { recto: "Qu'est-ce qu'un performatif (Austin) ?", verso: "Un énoncé qui accomplit l'acte qu'il dit : « je promets », « je déclare la séance ouverte ». Dire, c'est faire." },
    { recto: "« C'est dans les mots que nous pensons » : qui ? portée ?", verso: "Hegel : le langage est nécessaire à la pensée ; pas de pensée claire et abstraite sans mots." },
    { recto: "L'objection de Bergson au langage ?", verso: "Le mot général écrase la singularité du vécu : il fixe le stable et recouvre les nuances délicates de la conscience." },
    { recto: "La novlangue (Orwell) montre quoi ?", verso: "Que réduire le vocabulaire réduit la pensée : sans le mot « liberté », l'idée de révolte devient impensable." },
    { recto: "Différence langage humain / code animal (Benveniste) ?", verso: "Le code animal (abeilles) est fixe et fermé ; le langage humain est créatif, ouvert, capable de dialogue et de fiction." },
  ],
  quiz: [
    { question: "Pour Hegel, la pensée…", choix: ["existe avant tout langage", "se forme dans et par les mots", "n'a aucun rapport au langage", "est purement animale"], bonne: 1, explication: "« C'est dans les mots que nous pensons » : le langage est le milieu de la pensée." },
    { question: "Le caractère « arbitraire » du signe est une thèse de…", choix: ["Austin", "Saussure", "Bergson", "Orwell"], bonne: 1, explication: "Saussure : pas de lien naturel entre signifiant et signifié." },
    { question: "Un énoncé performatif…", choix: ["décrit un fait", "accomplit l'acte qu'il énonce", "est toujours faux", "ne sert qu'à informer"], bonne: 1, explication: "« Je promets » fait la promesse (Austin)." },
    { question: "La novlangue, dans 1984, vise à…", choix: ["enrichir la langue", "rendre certaines pensées impossibles", "traduire toutes les langues", "communiquer plus vite"], bonne: 1, explication: "Appauvrir le vocabulaire pour verrouiller la pensée critique." },
    { question: "Convaincre, à la différence de persuader, s'adresse à…", choix: ["l'émotion", "la raison (preuves, arguments)", "la peur", "l'imagination"], bonne: 1, explication: "Persuader joue sur les affects ; convaincre sur la raison (cf. Platon contre les sophistes)." },
  ],
  liens: ["verite", "conscience", "art"],
};
