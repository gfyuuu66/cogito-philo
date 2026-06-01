import type { Notion } from "../types";

export const devoir: Notion = {
  id: "devoir",
  titre: "Le devoir",
  sousTitre: "Agir par obligation morale, contre son intérêt ?",
  couleur: "#475569",
  accroche:
    "Personne ne nous regarde, nous pourrions tricher sans risque — et pourtant quelque chose en nous dit « non ». Ce « non » intérieur, gratuit, sans calcul, c'est l'énigme du devoir : pourquoi devrais-je bien agir même quand le mal serait plus avantageux ?",
  definitions: [
    { terme: "Devoir", def: "Obligation morale : ce que je dois faire indépendamment de mon intérêt ou de mon plaisir." },
    { terme: "Obligation / contrainte", def: "L'obligation vient de l'intérieur (je me sens tenu) ; la contrainte vient de l'extérieur (on me force). Le devoir est obligation, non contrainte." },
    { terme: "Impératif catégorique", def: "Commandement moral inconditionnel (« tu dois ») valable en lui-même, par opposition à l'impératif hypothétique (« si tu veux X, fais Y »)." },
    { terme: "Dignité", def: "Valeur absolue de la personne humaine, qui n'a pas de prix et ne peut être échangée. S'oppose à ce qui n'a qu'une valeur relative (un prix)." },
    { terme: "Déontologie / conséquentialisme", def: "Deux morales : juger l'acte d'après le respect d'une règle (déontologie, Kant) ou d'après ses résultats (conséquentialisme, utilitarisme)." },
  ],
  cours: [
    {
      titre: "1. Devoir, obligation, contrainte",
      paragraphes: [
        "Le **devoir** n'est pas une contrainte extérieure : un voleur me *contraint* à donner mon argent, mais je ne *dois* pas le faire. Le devoir est une **obligation intérieure** : je me sens tenu, librement, par une exigence morale.",
        "C'est pourquoi le devoir suppose la **liberté** : on ne peut être obligé qu'à ce qu'on est libre d'accomplir ou de refuser.",
      ],
    },
    {
      titre: "2. La morale du devoir (Kant)",
      paragraphes: [
        "**Kant** distingue agir *conformément* au devoir (par intérêt : le commerçant honnête pour garder ses clients) et agir *par* devoir (par pur respect de la loi morale). Seul le second a une valeur morale.",
        "La règle est l'**impératif catégorique** : « agis seulement d'après la maxime dont tu peux vouloir qu'elle devienne une loi universelle ». Test simple : si tout le monde le faisait, est-ce que cela tiendrait encore ? Le mensonge échoue au test : si tous mentaient, la parole ne vaudrait plus rien.",
      ],
    },
    {
      titre: "3. La dignité de la personne",
      paragraphes: [
        "Autre formulation : « agis de façon à traiter l'humanité, en toi comme en autrui, **toujours comme une fin et jamais simplement comme un moyen** ».",
        "Une personne a une **dignité**, non un *prix* : on ne peut l'échanger ni l'instrumentaliser. Manipuler, mentir, exploiter, c'est traiter l'autre comme un simple outil — donc le nier comme personne.",
      ],
    },
    {
      titre: "4. La morale des conséquences",
      paragraphes: [
        "À l'opposé, l'**utilitarisme** (Bentham, Mill) juge un acte d'après ses *résultats* : est bon ce qui maximise le bonheur du plus grand nombre. Mentir pour sauver une vie devient alors permis.",
        "Le **dilemme du tramway** met les deux morales face à face : sacrifier une personne pour en sauver cinq ? L'utilitariste dit oui (le bilan est meilleur) ; le kantien hésite (on utilise alors une personne comme un simple moyen).",
      ],
    },
    {
      titre: "5. Sur quoi fonder le devoir ?",
      paragraphes: [
        "Le devoir ne se fonde pas sur la **tradition** ou la **religion** seules (« c'est mal parce que c'est interdit ») : ce serait *dogmatique*, sans justification rationnelle.",
        "Il ne se fonde pas non plus sur la **nature** : **Mill** montre que « suivre la nature » est absurde, car la nature est aussi violente et cruelle. La morale n'imite pas la nature, elle la *corrige*. Le devoir se fonde finalement sur la **raison**, commune à tous.",
      ],
    },
  ],
  theses: [
    { auteur: "Kant", oeuvre: "Fondements de la métaphysique des mœurs", idee: "La valeur morale d'un acte tient à l'intention (agir par devoir) et au respect de la loi universelle ; ne jamais traiter l'humanité comme un simple moyen." },
    { auteur: "Bentham / Mill", oeuvre: "L'Utilitarisme", idee: "Un acte est bon s'il maximise le bonheur du plus grand nombre : la morale se juge aux conséquences." },
    { auteur: "Aristote", oeuvre: "Éthique à Nicomaque", idee: "La morale n'est pas affaire de règle abstraite mais de vertu : disposition à bien agir, acquise par habitude (le juste milieu)." },
    { auteur: "Hume", oeuvre: "Traité de la nature humaine", idee: "La morale repose sur le sentiment, non sur la seule raison ; on ne déduit pas le « devoir-être » de l'« être »." },
    { auteur: "Nietzsche", oeuvre: "Généalogie de la morale", idee: "La morale du devoir cache souvent un ressentiment des faibles ; il faut en faire la critique généalogique." },
  ],
  citations: [
    { texte: "Agis de telle sorte que tu traites l'humanité, aussi bien dans ta personne que dans tout autre, toujours en même temps comme une fin, et jamais simplement comme un moyen.", auteur: "Kant", oeuvre: "Fondements de la métaphysique des mœurs", usage: "LA citation du respect d'autrui. À mobiliser dès qu'un sujet touche à la manipulation, au mensonge, à l'exploitation. Décoder : la personne a une dignité, pas un prix." },
    { texte: "Agis seulement d'après la maxime telle que tu puisses vouloir en même temps qu'elle devienne une loi universelle.", auteur: "Kant", oeuvre: "Fondements de la métaphysique des mœurs", usage: "Pour exposer le critère du devoir : l'universalisation. Idéal contre la triche, le mensonge, le « si tout le monde faisait pareil ? »." },
    { texte: "Deux choses remplissent le cœur d'une admiration toujours nouvelle : le ciel étoilé au-dessus de moi et la loi morale en moi.", auteur: "Kant", oeuvre: "Critique de la raison pratique", usage: "Belle ouverture ou clôture : la loi morale a une grandeur comparable à celle du cosmos." },
  ],
  paradoxes: [
    "Faut-il juger un acte sur l'intention (Kant) ou sur ses conséquences (utilitarisme) ?",
    "Doit-on toujours faire son devoir, même contre son bonheur et son intérêt ?",
    "Existe-t-il des devoirs absolus (ne jamais mentir), ou tout dépend-il des circonstances ?",
    "Le devoir se fonde-t-il sur la raison, le sentiment, ou la société ?",
  ],
  sujets: [
    {
      intitule: "Le devoir s'oppose-t-il au bonheur ?",
      analyse:
        "Pont entre devoir et bonheur. La doxa kantienne : le devoir commande parfois contre notre intérêt, donc contre notre bonheur. Mais agir bien ne procure-t-il pas une satisfaction propre ?",
      problematique:
        "Le devoir est-il nécessairement sacrifice du bonheur, ou bien accomplir son devoir est-il une autre voie, plus haute, vers une vie réussie ?",
      plan: [
        { partie: "I. Thèse", idee: "Le devoir contraint souvent contre nos désirs : il semble l'ennemi du bonheur.", auteurs: "Kant (agir par devoir, non par inclination)", exemple: "Rendre un portefeuille trouvé plein d'argent." },
        { partie: "II. Antithèse", idee: "Mais agir selon le devoir procure estime de soi ; la vertu est une composante du bonheur.", auteurs: "Aristote (vertu), Stoïciens (la vertu suffit)", exemple: "La satisfaction durable d'avoir bien agi, contre le plaisir vite éteint d'avoir triché." },
        { partie: "III. Dépassement", idee: "Le devoir ne donne pas le bonheur mais en rend digne ; il fonde un bonheur qui mérite ce nom.", auteurs: "Kant (« se rendre digne d'être heureux »)", exemple: "On n'estime pas heureuse une vie agréable mais infâme." },
      ],
      astuce:
        "Ne pas réconcilier trop vite. La III distingue « être heureux » et « mériter de l'être » : c'est la solution kantienne, plus fine qu'un compromis.",
    },
    {
      intitule: "N'avons-nous de devoirs qu'envers autrui ?",
      analyse:
        "« Ne… que » = exclusivement. La doxa : le devoir concerne les autres (ne pas nuire). Le grain de sable : devoirs envers soi-même, voire envers le vivant.",
      problematique:
        "Le devoir se limite-t-il à nos obligations envers les autres, ou avons-nous aussi des devoirs envers nous-mêmes et au-delà de l'humanité ?",
      plan: [
        { partie: "I. Thèse", idee: "Le devoir semble régler nos rapports à autrui (ne pas nuire, respecter).", auteurs: "Morale commune, justice", exemple: "Tenir ses promesses, ne pas voler." },
        { partie: "II. Antithèse", idee: "Mais nous avons des devoirs envers nous-mêmes : ne pas nous avilir, cultiver nos facultés.", auteurs: "Kant (devoir de ne pas se traiter soi-même comme un simple moyen)", exemple: "Le devoir de ne pas se détruire, de respecter sa propre dignité." },
        { partie: "III. Dépassement", idee: "Tout devoir renvoie au respect de l'humanité — en autrui comme en moi — et s'étend au vivant.", auteurs: "Kant, éthique de l'environnement (Jonas, principe responsabilité)", exemple: "Nos devoirs envers les générations futures et la nature." },
      ],
      astuce:
        "Le « en toi comme en autrui » de Kant est la charnière : l'humanité que je dois respecter est une, qu'elle soit en moi ou en l'autre.",
    },
    {
      intitule: "Une bonne intention suffit-elle à rendre une action morale ?",
      analyse:
        "Oppose intention et conséquences. « L'enfer est pavé de bonnes intentions » : la bonne volonté peut produire le mal. Mais juger seulement sur les résultats efface la responsabilité morale.",
      problematique:
        "La valeur morale d'un acte tient-elle à la bonne intention de son auteur, ou aux conséquences réelles qu'il produit ?",
      plan: [
        { partie: "I. Thèse", idee: "Seule l'intention compte : une bonne volonté fait la valeur morale.", auteurs: "Kant (la « bonne volonté »)", exemple: "On excuse celui qui voulait aider et a maladroitement échoué." },
        { partie: "II. Antithèse", idee: "Mais une bonne intention peut faire un mal réel : il faut répondre des conséquences.", auteurs: "Utilitarisme (Mill), Weber (éthique de responsabilité)", exemple: "Le dilemme du tramway ; aider sans compétence peut aggraver la situation." },
        { partie: "III. Dépassement", idee: "Agir moralement, c'est unir bonne volonté et responsabilité des effets prévisibles.", auteurs: "Max Weber (conviction + responsabilité)", exemple: "Vouloir le bien ET s'informer pour que l'acte produise effectivement le bien." },
      ],
      astuce:
        "Weber (éthique de conviction / de responsabilité) est l'outil parfait pour la III : il articule les deux morales au lieu de choisir l'une contre l'autre.",
    },
  ],
  flashcards: [
    { recto: "Obligation vs contrainte ?", verso: "Obligation = intérieure et morale (je me sens tenu) ; contrainte = extérieure et physique (on me force). Le devoir est obligation." },
    { recto: "Agir « par devoir » vs « conformément au devoir » (Kant) ?", verso: "Par devoir = par pur respect de la loi morale (valeur morale). Conformément = par intérêt qui coïncide avec le devoir (sans valeur morale)." },
    { recto: "L'impératif catégorique, formule de l'universalisation ?", verso: "« Agis seulement d'après la maxime dont tu peux vouloir qu'elle devienne une loi universelle. »" },
    { recto: "L'impératif catégorique, formule de l'humanité ?", verso: "Traiter l'humanité (en soi et en autrui) toujours comme une fin, jamais simplement comme un moyen." },
    { recto: "Dignité vs prix (Kant) ?", verso: "Ce qui a un prix peut être remplacé ; ce qui a une dignité (la personne) est sans équivalent et ne peut être instrumentalisé." },
    { recto: "Le critère utilitariste du bien ?", verso: "Maximiser le bonheur du plus grand nombre : on juge l'acte à ses conséquences (Bentham, Mill)." },
    { recto: "Que montre le dilemme du tramway ?", verso: "Le conflit entre morale des conséquences (sacrifier 1 pour 5) et morale du devoir (ne pas instrumentaliser une personne)." },
  ],
  quiz: [
    { question: "Pour Kant, une action a une valeur morale si elle est faite…", choix: ["pour en tirer profit", "par devoir, par respect de la loi morale", "par habitude", "par plaisir"], bonne: 1, explication: "Agir PAR devoir (et non seulement conformément au devoir) : l'intention compte." },
    { question: "« Traiter l'humanité toujours comme une fin… » interdit surtout…", choix: ["de travailler", "d'instrumentaliser autrui (le manipuler, l'exploiter)", "d'être heureux", "de raisonner"], bonne: 1, explication: "On ne doit jamais réduire une personne à un simple moyen." },
    { question: "L'utilitarisme juge un acte d'après…", choix: ["l'intention", "les conséquences (le bonheur produit)", "la tradition", "la loi divine"], bonne: 1, explication: "Bentham/Mill : est bon ce qui maximise le bonheur du plus grand nombre." },
    { question: "Selon Mill, fonder la morale sur « ce qui est naturel » est…", choix: ["évident", "une erreur, car la nature est aussi cruelle", "la seule voie", "kantien"], bonne: 1, explication: "La morale corrige la nature, elle ne l'imite pas." },
    { question: "Un impératif « hypothétique » a la forme…", choix: ["« tu dois, un point c'est tout »", "« si tu veux X, fais Y »", "« l'humanité est une fin »", "« agis universellement »"], bonne: 1, explication: "Il est conditionnel (moyen-fin), à la différence de l'impératif catégorique, inconditionnel." },
  ],
  liens: ["bonheur", "justice", "liberte"],
};
