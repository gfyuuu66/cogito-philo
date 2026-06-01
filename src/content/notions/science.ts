import type { Notion } from "../types";

export const science: Notion = {
  id: "science",
  titre: "La science",
  sousTitre: "Une connaissance certaine… mais provisoire ?",
  couleur: "#0284c7",
  accroche:
    "Une intelligence artificielle génère en quelques secondes une « preuve » vidéo d'un événement qui n'a jamais eu lieu. À l'ère des deepfakes, distinguer le vrai du vraisemblable devient vital — et redonne tout son prix à ce qui fait la force de la science : une méthode pour établir, et corriger, ce que l'on tient pour vrai.",
  definitions: [
    { terme: "Science", def: "Connaissance rationnelle, méthodique et vérifiable du réel, cherchant des lois universelles." },
    { terme: "Hypothèse", def: "Supposition provisoire, formulée pour expliquer un phénomène, et destinée à être testée par l'expérience." },
    { terme: "Induction", def: "Raisonnement qui généralise à partir de cas observés (« tous les cygnes observés sont blancs, donc tous les cygnes sont blancs »)." },
    { terme: "Falsifiabilité", def: "Caractère d'une théorie qui peut être contredite par l'expérience. Pour Popper, critère de scientificité." },
    { terme: "Paradigme", def: "Cadre théorique partagé par une communauté scientifique à une époque (Kuhn). Les « révolutions scientifiques » en changent." },
  ],
  cours: [
    {
      titre: "1. La science contre l'opinion",
      paragraphes: [
        "La science ne prolonge pas le sens commun : elle rompt avec lui. **Bachelard** parle d'*obstacle épistémologique* : nos préjugés, nos évidences premières font écran à la connaissance.",
        "« Rien n'est donné, tout est construit » : le fait scientifique n'est pas cueilli dans la nature, il est *construit* par la théorie, la mesure, l'instrument. La science se bâtit *contre* l'opinion.",
      ],
    },
    {
      titre: "2. La méthode expérimentale",
      paragraphes: [
        "La démarche classique : **observation → hypothèse → expérimentation → validation**. **Claude Bernard** en fait la règle de la médecine : on imagine une cause (hypothèse), puis on conçoit une expérience pour la tester.",
        "La science combine la *déduction* (tirer des conséquences nécessaires) et l'*induction* (généraliser à partir de cas). Et c'est cette seconde qui pose problème.",
      ],
    },
    {
      titre: "3. Le problème de l'induction (Hume)",
      paragraphes: [
        "**Hume** montre qu'aucune quantité d'observations ne prouve une loi universelle. Avoir vu un million de cygnes blancs n'interdit pas qu'existe un *cygne noir* (découvert ensuite en Australie).",
        "Conclusion : la science généralise par *habitude*, mais ne peut jamais démontrer que la nature se comportera demain comme hier. Ses lois ne sont pas des certitudes absolues.",
      ],
    },
    {
      titre: "4. La falsifiabilité (Popper)",
      paragraphes: [
        "**Popper** retourne le problème : puisqu'on ne peut jamais *prouver* définitivement une théorie, ce qui fait la science, c'est qu'elle puisse être *réfutée*. Une théorie est scientifique si elle prend le risque d'un test qui pourrait la contredire.",
        "« Tous les métaux se dilatent à la chaleur » est scientifique (testable). « Une force invisible guide nos vies » ne l'est pas (rien ne pourrait la démentir). La science avance par *conjectures et réfutations* : elle élimine ses erreurs.",
      ],
    },
    {
      titre: "5. Les limites : Duhem et Kuhn",
      paragraphes: [
        "**Duhem** nuance Popper : on ne teste jamais une hypothèse *isolée*. Si l'expérience échoue, l'erreur peut venir de l'instrument, d'un calcul, d'une hypothèse auxiliaire. On teste tout un *réseau* d'idées à la fois.",
        "**Kuhn** ajoute que la science ne progresse pas de façon purement linéaire : elle vit dans des *paradigmes* qui, en temps de crise, sont renversés par des *révolutions scientifiques* (Newton → Einstein). La vérité scientifique est donc rigoureuse mais *historique* et *provisoire*.",
      ],
    },
  ],
  theses: [
    { auteur: "Bachelard", oeuvre: "La Formation de l'esprit scientifique", idee: "La science se construit contre l'opinion et les « obstacles épistémologiques » ; « rien n'est donné, tout est construit »." },
    { auteur: "Claude Bernard", oeuvre: "Introduction à l'étude de la médecine expérimentale", idee: "La méthode expérimentale : observation, hypothèse, expérience qui peut confirmer ou infirmer." },
    { auteur: "Hume", oeuvre: "Enquête sur l'entendement humain", idee: "Problème de l'induction : la généralisation à partir de l'expérience ne fournit jamais de certitude (cygne noir)." },
    { auteur: "Popper", oeuvre: "Conjectures et réfutations", idee: "Une théorie est scientifique si elle est falsifiable ; la science progresse en réfutant, non en prouvant." },
    { auteur: "Duhem", oeuvre: "La Théorie physique", idee: "Holisme : aucune hypothèse n'est testée seule ; un échec n'accuse pas une idée unique." },
    { auteur: "Kuhn", oeuvre: "La Structure des révolutions scientifiques", idee: "La science évolue par paradigmes et révolutions, pas seulement par accumulation linéaire." },
  ],
  citations: [
    { texte: "Une théorie qui n'est réfutable par aucun événement concevable n'est pas scientifique.", auteur: "Popper", oeuvre: "Conjectures et réfutations", usage: "Critère de démarcation science / non-science. À mobiliser pour distinguer science et pseudo-science, ou montrer le caractère provisoire du savoir." },
    { texte: "Rien n'est donné, tout est construit.", auteur: "Bachelard", oeuvre: "La Formation de l'esprit scientifique", usage: "Contre l'empirisme naïf : le fait scientifique n'est pas observé passivement, il est construit. Parfait pour un sujet « l'expérience suffit-elle ? »." },
    { texte: "L'expérience seule ne peut jamais condamner une hypothèse isolée.", auteur: "Duhem (esprit de)", oeuvre: "La Théorie physique", usage: "Pour nuancer Popper en III : la réfutation elle-même n'est pas si simple ; on teste un réseau d'idées." },
  ],
  paradoxes: [
    "La science atteint-elle la vérité absolue, ou seulement des vérités provisoires ?",
    "La science prouve-t-elle ses théories, ou peut-elle seulement les réfuter ?",
    "La science est-elle purement objective, ou dépend-elle de paradigmes et de contextes ?",
    "Quel critère distingue une science d'une pseudo-science ?",
  ],
  sujets: [
    {
      intitule: "Les théories scientifiques nous donnent-elles la vérité ?",
      analyse:
        "La doxa : la science = le vrai par excellence. Le grain de sable : l'histoire des sciences est un cimetière de théories « vraies » puis abandonnées. La vérité scientifique serait-elle provisoire ?",
      problematique:
        "La science délivre-t-elle une vérité définitive sur le réel, ou son objectivité même la condamne-t-elle à n'offrir que des vérités révisables ?",
      plan: [
        { partie: "I. Thèse", idee: "La science offre la connaissance la plus sûre, fondée sur la méthode et la preuve.", auteurs: "Bachelard, Claude Bernard", exemple: "On prédit une éclipse à la seconde près : la science « marche »." },
        { partie: "II. Antithèse", idee: "Mais ses vérités sont provisoires : l'induction est faillible, les théories sont réfutables.", auteurs: "Hume (cygne noir), Popper (falsifiabilité), Kuhn (révolutions)", exemple: "La physique de Newton, longtemps « vraie », est dépassée par Einstein." },
        { partie: "III. Dépassement", idee: "La force de la science n'est pas de posséder une vérité close, mais de se corriger sans cesse ; elle vise le vrai comme un idéal régulateur.", auteurs: "Popper (conjectures et réfutations), Bachelard (« vérité approchée »)", exemple: "Chaque réfutation est un progrès, non un échec." },
      ],
      astuce:
        "Renverser l'objection en argument (III) : ce qui semblait une faiblesse (la science se trompe et se corrige) est sa supériorité sur le dogme. Pont direct avec la vérité.",
    },
    {
      intitule: "Une théorie scientifique peut-elle être définitivement prouvée ?",
      analyse:
        "« Définitivement » est le cœur. On accorde que la science « prouve » en un sens (vérification) ; la question est de savoir si une preuve peut être finale, irrévocable.",
      problematique:
        "L'accumulation de vérifications peut-elle établir une théorie de manière définitive, ou la scientificité implique-t-elle au contraire qu'aucune preuve ne soit jamais close ?",
      plan: [
        { partie: "I. Thèse", idee: "La science prouve ses théories par l'expérience et la prédiction.", auteurs: "Claude Bernard, vérification expérimentale", exemple: "Une loi confirmée mille fois inspire une confiance légitime." },
        { partie: "II. Antithèse", idee: "Mais aucune vérification finie ne prouve une loi universelle, et tout test engage d'autres hypothèses.", auteurs: "Hume (induction), Popper (falsifiabilité), Duhem (holisme)", exemple: "Un seul contre-exemple suffit à réfuter ; mille confirmations ne suffisent pas à prouver." },
        { partie: "III. Dépassement", idee: "Une théorie n'est jamais prouvée définitivement, mais « corroborée » : robuste tant qu'elle résiste aux tests.", auteurs: "Popper (corroboration), Bachelard", exemple: "On fait décoller des avions sur des théories non « définitives » mais hautement éprouvées." },
      ],
      astuce:
        "L'asymétrie de Popper est l'argument décisif en II : vérifier ne prouve pas (induction), mais falsifier réfute (un contre-exemple suffit). C'est logique, donc imparable.",
    },
    {
      intitule: "L'expérience suffit-elle à fonder la science ?",
      analyse:
        "La doxa empiriste : la science = observer les faits. Le grain de sable : les faits ne « parlent » pas seuls ; il faut une théorie pour les voir et les interpréter.",
      problematique:
        "Le recueil des faits par l'expérience suffit-il à constituer une science, ou faut-il d'abord des hypothèses et des cadres théoriques pour que l'expérience ait un sens ?",
      plan: [
        { partie: "I. Thèse", idee: "La science repose sur l'expérience : observer, mesurer, recueillir des faits.", auteurs: "Empirisme, Claude Bernard", exemple: "Sans observation, pas d'astronomie ni de biologie." },
        { partie: "II. Antithèse", idee: "Mais il n'y a pas d'observation neutre : la théorie précède et organise les faits.", auteurs: "Bachelard (« rien n'est donné »), Popper (toute observation est orientée)", exemple: "On ne « voit » une cellule qu'avec un microscope ET une théorie cellulaire." },
        { partie: "III. Dépassement", idee: "La science naît du dialogue entre théorie et expérience : l'hypothèse guide l'expérience qui, en retour, la corrige.", auteurs: "Kant (expérience + concepts), Claude Bernard, Popper", exemple: "L'expérience tranche entre des hypothèses qu'elle ne produit pas elle-même." },
      ],
      astuce:
        "Idée forte en II : « un fait n'est jamais brut ». La III articule au lieu d'opposer : ni pur empirisme (contre I), ni pur rationalisme. C'est exactement la position de Kant et de Bachelard.",
    },
  ],
  flashcards: [
    { recto: "Qu'est-ce qu'un « obstacle épistémologique » (Bachelard) ?", verso: "Un préjugé, une évidence du sens commun qui fait écran à la connaissance scientifique. La science se construit contre eux." },
    { recto: "Le problème de l'induction (Hume) ?", verso: "Aucune quantité d'observations ne prouve une loi universelle : un seul contre-exemple (cygne noir) peut la détruire." },
    { recto: "La falsifiabilité (Popper) ?", verso: "Critère de scientificité : une théorie est scientifique si elle peut être réfutée par l'expérience. La science avance en réfutant." },
    { recto: "Vérifier prouve-t-il une théorie ?", verso: "Non : la vérification ne prouve jamais (induction), mais une seule falsification réfute. C'est l'asymétrie de Popper." },
    { recto: "Le holisme de Duhem ?", verso: "On ne teste jamais une hypothèse isolée : un échec peut venir de l'instrument, d'un calcul ou d'une hypothèse auxiliaire." },
    { recto: "Un paradigme (Kuhn) ?", verso: "Le cadre théorique d'une communauté scientifique à une époque ; les « révolutions » le renversent (Newton → Einstein)." },
    { recto: "« Rien n'est donné, tout est construit » signifie ?", verso: "Bachelard : le fait scientifique n'est pas observé passivement, il est construit par la théorie et l'instrument." },
  ],
  quiz: [
    { question: "Le problème de l'induction est posé par…", choix: ["Popper", "Hume", "Bachelard", "Kuhn"], bonne: 1, explication: "Hume : généraliser à partir de l'expérience ne donne aucune certitude (cygne noir)." },
    { question: "Pour Popper, une théorie est scientifique si elle est…", choix: ["vérifiable une fois", "falsifiable (réfutable)", "belle", "ancienne"], bonne: 1, explication: "Elle doit pouvoir être contredite par un test concevable." },
    { question: "L'asymétrie de Popper signifie que…", choix: ["vérifier prouve, falsifier réfute", "vérifier ne prouve pas, mais falsifier réfute", "tout est prouvable", "rien n'est testable"], bonne: 1, explication: "Mille confirmations ne prouvent pas ; un seul contre-exemple réfute." },
    { question: "« Rien n'est donné, tout est construit » est de…", choix: ["Claude Bernard", "Bachelard", "Hume", "Duhem"], bonne: 1, explication: "Bachelard : le fait scientifique est construit, pas cueilli." },
    { question: "Les « révolutions scientifiques » et les paradigmes sont l'œuvre de…", choix: ["Kuhn", "Popper", "Comte", "Bachelard"], bonne: 0, explication: "Thomas Kuhn : la science change parfois de cadre (paradigme) de façon non cumulative." },
    { question: "Le holisme de Duhem affirme qu'on teste…", choix: ["une seule hypothèse à la fois", "un réseau d'hypothèses à la fois", "jamais rien", "uniquement des maths"], bonne: 1, explication: "Un échec expérimental n'accuse pas une hypothèse isolée." },
  ],
  liens: ["verite", "raison", "religion"],
};
