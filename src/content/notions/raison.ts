import type { Notion } from "../types";

export const raison: Notion = {
  id: "raison",
  titre: "La raison",
  sousTitre: "La faculté du vrai — et ses limites",
  couleur: "#0891b2",
  accroche:
    "Nous exigeons des « raisons » : pourquoi le ciel est bleu, pourquoi telle décision. Croire que tout a une explication est le pari fondateur de la science. Mais la raison peut-elle tout expliquer — y compris ce qui semble la dépasser : la foi, l'amour, la mort ?",
  definitions: [
    { terme: "Raison", def: "Faculté de l'esprit qui distingue le vrai du faux (usage théorique) et le bien du mal (usage pratique) ; capacité de raisonner et de bien juger." },
    { terme: "Rationnel / raisonnable", def: "Rationnel : conforme à la logique et au calcul. Raisonnable : sage, mesuré, qui vise de bonnes fins. Le rationnel n'est pas toujours raisonnable." },
    { terme: "Principe de raison suffisante", def: "Rien n'arrive sans une raison qui explique pourquoi il en est ainsi plutôt qu'autrement (Leibniz)." },
    { terme: "Rationalisme / empirisme", def: "Rationalisme : la raison est la source première du savoir (Descartes). Empirisme : tout savoir vient de l'expérience sensible (Hume, Locke)." },
    { terme: "Croyance", def: "Adhésion à une idée sans preuve suffisante. À distinguer du savoir (justifié) et de la foi (croyance religieuse)." },
  ],
  cours: [
    {
      titre: "1. La raison, propre de l'homme",
      paragraphes: [
        "Pour **Aristote**, l'homme est l'« animal doué de *logos* » : raison et langage. La raison est ce qui nous distingue, la faculté de comprendre et de bien juger.",
        "**Descartes** la dit la « chose du monde la mieux partagée » : tous les hommes la possèdent également (le *bon sens*). Ce qui diffère, c'est l'usage qu'on en fait — d'où la nécessité d'une *méthode*.",
      ],
    },
    {
      titre: "2. Rendre le monde intelligible",
      paragraphes: [
        "**Leibniz** énonce le *principe de raison suffisante* : « rien n'est sans raison ». Tout a une cause qui explique pourquoi il est ainsi. C'est ce principe qui pousse à chercher des explications plutôt qu'à se contenter du hasard ou du mystère.",
        "La raison transforme ainsi un monde chaotique en *cosmos* ordonné et connaissable. Elle est le moteur de la science.",
      ],
    },
    {
      titre: "3. D'où vient le savoir ? Raison ou expérience",
      paragraphes: [
        "Le **rationalisme** (Descartes) tient que la raison possède des principes (idées innées, vérités mathématiques) indépendants de l'expérience. L'**empirisme** (Hume, Locke) réplique : l'esprit est une « page blanche », tout vient des sens.",
        "**Kant** opère la synthèse : nos connaissances commencent avec l'expérience, mais la raison y met ses formes (l'espace, le temps, la causalité). La connaissance naît de la rencontre des deux.",
      ],
    },
    {
      titre: "4. Les limites de la raison",
      paragraphes: [
        "La raison peut-elle tout ? **Pascal** rappelle que « le cœur a ses raisons que la raison ne connaît point » : certaines vérités (la foi, l'amour, les premiers principes) se sentent plus qu'elles ne se démontrent.",
        "**Kant** montre que la raison s'égare quand elle prétend connaître l'absolu (Dieu, l'âme, l'univers comme totalité) : elle tombe dans des *antinomies* (on peut prouver une thèse et son contraire). « La dernière démarche de la raison est de reconnaître qu'il y a une infinité de choses qui la surpassent » (Pascal).",
      ],
    },
    {
      titre: "5. Le rationnel est-il raisonnable ?",
      paragraphes: [
        "Une raison purement *instrumentale* calcule les moyens les plus efficaces — sans interroger les fins. **Adorno et Horkheimer** montrent qu'une telle raison peut servir le pire avec une froide logique (l'organisation rationnelle de l'horreur).",
        "D'où la distinction : le **rationnel** (efficace, logique) n'est pas toujours **raisonnable** (sage, juste). La vraie raison ne calcule pas seulement des moyens : elle se donne aussi des fins bonnes.",
      ],
    },
  ],
  theses: [
    { auteur: "Aristote", oeuvre: "Les Politiques", idee: "L'homme est l'animal doué de logos (raison et parole) : la raison est le propre de l'humain." },
    { auteur: "Descartes", oeuvre: "Discours de la méthode", idee: "La raison (bon sens) est la mieux partagée ; il faut une méthode pour bien la conduire." },
    { auteur: "Leibniz", oeuvre: "Monadologie", idee: "Principe de raison suffisante : rien n'existe sans une raison qui l'explique." },
    { auteur: "Hume", oeuvre: "Traité de la nature humaine", idee: "Empirisme : tout vient de l'expérience ; « la raison est l'esclave des passions » (elle calcule les moyens, les passions fixent les fins)." },
    { auteur: "Kant", oeuvre: "Critique de la raison pure", idee: "La connaissance unit expérience et formes a priori de la raison ; la raison s'égare quand elle veut connaître l'inconditionné." },
    { auteur: "Pascal", oeuvre: "Pensées", idee: "La raison a des limites ; le cœur saisit des vérités (premiers principes, foi) qu'elle ne démontre pas." },
  ],
  citations: [
    { texte: "Le cœur a ses raisons que la raison ne connaît point.", auteur: "Pascal", oeuvre: "Pensées", usage: "Pour borner la raison sans la nier : il existe un ordre du cœur (intuition, foi). Décoder : « raisons » = un savoir non démonstratif, pas de l'irrationnel." },
    { texte: "Le bon sens est la chose du monde la mieux partagée.", auteur: "Descartes", oeuvre: "Discours de la méthode", usage: "Pour l'universalité de la raison : tous l'ont également ; ce qui compte, c'est la méthode pour bien l'employer." },
    { texte: "La dernière démarche de la raison est de reconnaître qu'il y a une infinité de choses qui la surpassent.", auteur: "Pascal", oeuvre: "Pensées", usage: "Parfaite en III : reconnaître ses limites est encore un acte de raison, non une défaite." },
  ],
  paradoxes: [
    "La raison est-elle universelle (la même pour tous) ou relative aux cultures et aux époques ?",
    "La raison peut-elle tout connaître et tout expliquer, ou a-t-elle des limites de droit ?",
    "Faut-il opposer la raison au cœur, à la foi, aux passions — ou les articuler ?",
    "Le rationnel est-il toujours raisonnable ? (la raison instrumentale)",
  ],
  sujets: [
    {
      intitule: "La raison peut-elle tout expliquer ?",
      analyse:
        "« Tout » est le mot piège. La doxa scientiste : oui, rien n'échappe à l'explication rationnelle. Le grain de sable : certaines réalités (le sens, la valeur, la foi) résistent à l'explication causale.",
      problematique:
        "L'ambition d'expliquer rationnellement le réel est-elle sans limite, ou existe-t-il des domaines que la raison ne peut épuiser sans se dénaturer ?",
      plan: [
        { partie: "I. Thèse", idee: "La raison a vocation à tout expliquer : rien n'est sans raison.", auteurs: "Leibniz (raison suffisante), Descartes, idéal scientifique", exemple: "La science recule sans cesse les frontières de l'inexpliqué." },
        { partie: "II. Antithèse", idee: "Mais la raison rencontre des limites : l'expérience, l'absolu, le cœur.", auteurs: "Pascal (le cœur), Kant (antinomies), Hume", exemple: "On peut expliquer la chimie de l'amour, non ce qu'il signifie pour celui qui aime." },
        { partie: "III. Dépassement", idee: "Reconnaître ses limites est encore un acte de raison ; expliquer (les faits) n'est pas comprendre (le sens).", auteurs: "Pascal, Kant, distinction expliquer/comprendre (Dilthey)", exemple: "La science explique le « comment » ; le « pourquoi » du sens relève d'un autre ordre." },
      ],
      astuce:
        "La distinction expliquer / comprendre est l'arme de la III : on accorde tout à la raison sur les faits, on lui retire la prétention au sens. Pont direct avec science et religion.",
    },
    {
      intitule: "Faut-il opposer la raison et la croyance ?",
      analyse:
        "Pont raison/religion. La doxa des Lumières : raison (preuve) contre croyance (illusion). Le grain de sable : la science avance par hypothèses (des croyances rationnelles), et toute raison repose sur des principes non démontrés.",
      problematique:
        "La raison et la croyance sont-elles deux ennemies irréductibles, ou bien s'appuient-elles secrètement l'une sur l'autre ?",
      plan: [
        { partie: "I. Thèse", idee: "Raison et croyance s'opposent : l'une exige des preuves, l'autre s'en passe.", auteurs: "Esprit des Lumières, science", exemple: "On ne « croit » pas que l'eau bout à 100°C : on le sait, on le teste." },
        { partie: "II. Antithèse", idee: "Mais la raison elle-même croit : hypothèses, axiomes, confiance dans ses principes.", auteurs: "Hume (croyance à la causalité), Pascal", exemple: "Croire que demain ressemblera à hier n'est pas prouvé, mais présupposé par toute science." },
        { partie: "III. Dépassement", idee: "Distinguer les domaines : la raison régit le savoir, la foi le sens ; chacune déraisonne en empiétant sur l'autre.", auteurs: "Kant (« limiter le savoir pour faire place à la croyance »), Pascal", exemple: "La science ne réfute pas la foi, la foi ne fait pas de physique." },
      ],
      astuce:
        "En II, montrer que la frontière n'est pas si nette (la raison croit aussi) ; en III, la retracer proprement par les domaines de validité. Évite le simplisme « raison = bien, croyance = mal ».",
    },
    {
      intitule: "Le rationnel est-il toujours raisonnable ?",
      analyse:
        "Joue sur deux mots proches mais distincts. Rationnel = logique, calculé, efficace. Raisonnable = sage, mesuré, juste. On peut être très rationnel pour des fins folles.",
      problematique:
        "La rigueur logique et l'efficacité suffisent-elles à rendre une conduite raisonnable, ou la raison doit-elle aussi juger des fins qu'elle poursuit ?",
      plan: [
        { partie: "I. Thèse", idee: "Ce qui est rationnel (cohérent, efficace) paraît raisonnable.", auteurs: "Idéal de rationalité, Descartes", exemple: "Organiser méthodiquement son travail est à la fois rationnel et sage." },
        { partie: "II. Antithèse", idee: "Mais une raison purement instrumentale peut servir le pire avec une parfaite logique.", auteurs: "Adorno et Horkheimer (raison instrumentale), Weber (bureaucratie)", exemple: "Optimiser « rationnellement » une organisation au mépris des personnes." },
        { partie: "III. Dépassement", idee: "Le raisonnable est la raison qui interroge ses fins, pas seulement ses moyens.", auteurs: "Kant (raison pratique), Aristote (prudence/phronèsis)", exemple: "La sagesse choisit de bonnes fins ; l'intelligence sans sagesse est dangereuse." },
      ],
      astuce:
        "Tout le devoir tient dans l'écart rationnel / raisonnable. La II fournit des exemples glaçants (efficacité au service du mal) ; la III réintroduit la question des fins (raison pratique).",
    },
  ],
  flashcards: [
    { recto: "Rationnel vs raisonnable ?", verso: "Rationnel = logique, calculé, efficace. Raisonnable = sage, mesuré, qui vise de bonnes fins. L'un ne garantit pas l'autre." },
    { recto: "Le principe de raison suffisante (Leibniz) ?", verso: "« Rien n'est sans raison » : tout a une cause/explication. Fondement de la recherche scientifique." },
    { recto: "Rationalisme vs empirisme ?", verso: "Rationalisme (Descartes) : la raison est source première du savoir. Empirisme (Hume) : tout vient de l'expérience." },
    { recto: "Que veut dire Pascal avec « le cœur a ses raisons » ?", verso: "Il existe un ordre de vérités (premiers principes, foi, amour) saisies par le cœur, non démontrées par la raison." },
    { recto: "Comment Kant articule raison et expérience ?", verso: "La connaissance commence avec l'expérience mais la raison y applique ses formes a priori (espace, temps, causalité)." },
    { recto: "Qu'est-ce que la raison instrumentale ?", verso: "Une raison qui calcule les moyens efficaces sans interroger les fins ; elle peut servir le pire (Adorno, Horkheimer)." },
    { recto: "Pourquoi « le bon sens est la mieux partagée » (Descartes) ?", verso: "Tous possèdent également la raison ; la différence vient de la méthode avec laquelle on l'emploie." },
  ],
  quiz: [
    { question: "Le principe de raison suffisante est de…", choix: ["Pascal", "Leibniz", "Hume", "Aristote"], bonne: 1, explication: "Leibniz : « rien n'est sans raison »." },
    { question: "L'empirisme soutient que le savoir vient…", choix: ["d'idées innées", "de l'expérience sensible", "de la révélation", "du calcul pur"], bonne: 1, explication: "Hume, Locke : l'esprit est d'abord une page blanche." },
    { question: "« Le cœur a ses raisons que la raison ne connaît point » est de…", choix: ["Descartes", "Kant", "Pascal", "Leibniz"], bonne: 2, explication: "Pascal, Pensées : il borne la raison sans tomber dans l'irrationnel." },
    { question: "La raison instrumentale désigne une raison qui…", choix: ["interroge les fins", "calcule seulement les moyens efficaces", "refuse la logique", "est purement affective"], bonne: 1, explication: "Elle optimise les moyens sans juger les fins (critique d'Adorno/Horkheimer)." },
    { question: "Pour Kant, la raison s'égare quand elle veut connaître…", choix: ["les phénomènes", "l'absolu (Dieu, l'âme, le tout)", "les mathématiques", "l'expérience"], bonne: 1, explication: "Elle tombe alors dans des antinomies (thèse et antithèse également « prouvables »)." },
  ],
  liens: ["verite", "religion", "science"],
};
