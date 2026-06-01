import type { Notion } from "../types";

export const travail: Notion = {
  id: "travail",
  titre: "Le travail",
  sousTitre: "Malédiction subie, ou ce qui fait l'homme ?",
  couleur: "#b45309",
  accroche:
    "Beaucoup de jeunes rêvent aujourd'hui de devenir créateurs de contenu pour échapper au travail « de bureau », vécu comme une prison. Mais en cherchant à monétiser chacune de ses passions et son image, échappe-t-on vraiment à la contrainte du travail — ou en invente-t-on une nouvelle forme ?",
  definitions: [
    { terme: "Travail", def: "Activité par laquelle l'homme transforme la nature pour subvenir à ses besoins. Effort souvent contraint, mais aussi production et réalisation de soi." },
    { terme: "Aliénation", def: "Processus par lequel l'homme devient étranger à lui-même : son travail et son produit lui échappent et se retournent contre lui (Marx)." },
    { terme: "Tripalium (étymologie)", def: "« Travail » viendrait du latin *tripalium*, un instrument de torture : le travail est d'abord associé à la peine." },
    { terme: "Loisir (skholè)", def: "Chez les Anciens, temps libre consacré à la pensée et aux activités nobles — non l'oisiveté, mais l'école de l'esprit." },
    { terme: "Praxis / poièsis", def: "Poièsis : production d'un objet extérieur (fabriquer). Praxis : action qui a sa fin en elle-même (agir, contempler)." },
  ],
  cours: [
    {
      titre: "1. Le travail comme malédiction",
      paragraphes: [
        "L'étymologie (*tripalium*, instrument de torture) et la **Genèse** (« tu gagneras ton pain à la sueur de ton front ») présentent le travail comme une *peine*, une *nécessité* imposée par la condition humaine.",
        "Il faut travailler pour *survivre* : lutter contre la rareté et la rudesse de la nature. Sous cet angle, le travail apparaît comme un mal nécessaire, subi.",
      ],
    },
    {
      titre: "2. Travail et loisir (Aristote)",
      paragraphes: [
        "Pour **Aristote**, le travail manuel est *servile* : réservé aux esclaves, il occupe le corps et empêche l'élévation de l'esprit. La vie pleinement humaine est dans le **loisir** (*skholè*) : la contemplation, la politique, la philosophie.",
        "Le vrai bonheur ne serait donc pas dans le travail, mais dans le temps *libéré* du travail. Vision aristocratique, mais qui pose une question toujours actuelle : travaille-t-on pour vivre, ou vit-on pour travailler ?",
      ],
    },
    {
      titre: "3. Le travail humanise (Marx, Hegel)",
      paragraphes: [
        "**Marx** renverse la malédiction : le travail est le propre de l'homme. La célèbre comparaison de l'*architecte et de l'abeille* : l'abeille bâtit par instinct ; l'architecte, lui, conçoit l'œuvre *dans sa tête* avant de la réaliser. Le travail humain est *conscient*, *projeté*, libre.",
        "En transformant la nature, l'homme se transforme lui-même. **Hegel** l'avait montré avec le maître et l'esclave : c'est l'esclave qui, par le travail, *forme* le monde et accède à la conscience de soi. Le travail est formateur (*Bildung*).",
      ],
    },
    {
      titre: "4. L'aliénation",
      paragraphes: [
        "Mais dans le système **capitaliste**, ce travail libérateur se retourne. **Marx** décrit l'*aliénation* : l'ouvrier ne possède pas ce qu'il produit, répète un geste vide de sens, vend sa force de travail comme une marchandise. Il devient un *rouage*.",
        "Le travail qui devait l'humaniser le *déshumanise*. L'aliénation n'est pas dans le travail en soi, mais dans ses *conditions* (propriété privée, division du travail, salariat). Le but n'est donc pas de supprimer le travail, mais de le *libérer*.",
      ],
    },
    {
      titre: "5. Faut-il travailler moins ?",
      paragraphes: [
        "**Russell** (*Éloge de l'oisiveté*) soutient qu'on travaille trop : la technique permettrait de réduire le temps de travail, libérant du temps pour la culture, la pensée, la vie.",
        "À l'heure des « bullshit jobs » (emplois jugés inutiles par ceux qui les exercent), la question revient : le travail est-il toujours une *valeur* en soi, ou doit-il rester un *moyen* au service d'une vie libre ?",
      ],
    },
  ],
  theses: [
    { auteur: "La Genèse", oeuvre: "Bible", idee: "Le travail est une peine liée à la faute : « tu gagneras ton pain à la sueur de ton front »." },
    { auteur: "Aristote", oeuvre: "Les Politiques", idee: "Le travail manuel est servile ; la vie humaine accomplie est dans le loisir (skholè), le temps de l'esprit." },
    { auteur: "Hegel", oeuvre: "Phénoménologie de l'esprit", idee: "Par le travail, l'esclave transforme le monde et se forme : le travail est formateur et donne accès à la conscience de soi." },
    { auteur: "Marx", oeuvre: "Le Capital / Manuscrits de 1844", idee: "Le travail humain (conscient, projeté) définit l'homme, mais le capitalisme l'aliène : l'ouvrier devient étranger à son produit et à lui-même." },
    { auteur: "Russell", oeuvre: "Éloge de l'oisiveté", idee: "On travaille trop ; réduire le temps de travail libérerait du temps pour la culture et la pensée." },
  ],
  citations: [
    { texte: "Ce qui distingue dès l'abord le plus mauvais architecte de l'abeille la plus experte, c'est qu'il a construit la cellule dans sa tête avant de la construire dans la ruche.", auteur: "Marx", oeuvre: "Le Capital", usage: "La citation reine sur la spécificité humaine du travail : conscience et projet. À utiliser pour montrer que le travail humanise (contre l'idée de pure peine)." },
    { texte: "Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin.", auteur: "Voltaire", oeuvre: "Candide", usage: "Pour la valeur positive du travail (utilité morale et sociale), souvent en I ou en transition." },
    { texte: "Tu gagneras ton pain à la sueur de ton front.", auteur: "Genèse", oeuvre: "Bible", usage: "Pour la thèse du travail-malédiction : effort et nécessité. Bonne amorce aussi (origine mythique du travail)." },
  ],
  paradoxes: [
    "Le travail est-il une malédiction subie ou ce qui fait l'humanité de l'homme ?",
    "Le travail libère-t-il l'homme ou l'aliène-t-il ?",
    "Travaille-t-on seulement pour vivre, ou pour se réaliser et être reconnu ?",
    "Le travail est-il une valeur en soi, ou un simple moyen au service d'une vie libre ?",
  ],
  sujets: [
    {
      intitule: "Le travail est-il une fatalité ?",
      analyse:
        "« Fatalité » = ce qui est inévitable et subi, qu'on le veuille ou non. La doxa : oui, il faut bien travailler pour vivre. Le grain de sable : le travail n'est-il que contrainte, ou aussi réalisation ?",
      problematique:
        "Le travail est-il une nécessité subie qui pèse sur la condition humaine, ou bien une activité par laquelle l'homme se construit et s'émancipe ?",
      plan: [
        { partie: "I. Thèse", idee: "Le travail apparaît comme une fatalité : il faut travailler pour survivre.", auteurs: "Genèse, étymologie (tripalium), Aristote (travail servile)", exemple: "Sans travail, pas de nourriture ni d'abri : la nécessité commande." },
        { partie: "II. Antithèse", idee: "Mais le travail humanise : il transforme la nature et l'homme lui-même.", auteurs: "Marx (l'architecte et l'abeille), Hegel (le travail formateur), Voltaire", exemple: "On se reconnaît dans son œuvre ; un métier donne une identité." },
        { partie: "III. Dépassement", idee: "Ce n'est pas le travail qui est subi, mais ses conditions (l'aliénation) ; on peut le libérer.", auteurs: "Marx (aliénation), Russell (réduire le temps de travail)", exemple: "Un artisan fier de son ouvrage vs un ouvrier réduit à un geste répétitif." },
      ],
      astuce:
        "Déplacement-clé en III : le problème n'est pas LE travail, mais le travail ALIÉNÉ. On passe de « faut-il travailler ? » à « comment travailler pour rester humain ? ».",
    },
    {
      intitule: "Travailler, est-ce perdre sa liberté ?",
      analyse:
        "Pont travail/liberté. La doxa : travailler = obéir, se soumettre (subordination salariale), donc perdre sa liberté. Le grain de sable : le travail libère aussi de la nature et forme l'esprit.",
      problematique:
        "Le travail, par la contrainte et la subordination qu'il impose, nous prive-t-il de liberté, ou est-il au contraire une voie d'émancipation ?",
      plan: [
        { partie: "I. Thèse", idee: "Le travail semble une perte de liberté : contrainte, horaires, subordination.", auteurs: "Aristote (servilité), Marx (aliénation)", exemple: "« Métro, boulot, dodo » ; vendre son temps à un employeur." },
        { partie: "II. Antithèse", idee: "Mais le travail libère de la nécessité naturelle et forme l'homme.", auteurs: "Hegel (l'esclave se forme par le travail), Marx (le travail humanise)", exemple: "Maîtriser un savoir-faire, c'est gagner une forme d'autonomie." },
        { partie: "III. Dépassement", idee: "Tout dépend des conditions : un travail choisi et reconnu émancipe ; un travail aliéné asservit.", auteurs: "Marx, Russell (équilibre travail/loisir)", exemple: "Choisir son métier et y trouver du sens, contre le « bullshit job » subi." },
      ],
      astuce:
        "Ne pas trancher en bloc : la III conditionne la réponse (selon que le travail est aliéné ou émancipateur). Pont naturel avec la liberté et la technique.",
    },
    {
      intitule: "Le travail n'est-il qu'un moyen de subvenir à ses besoins ?",
      analyse:
        "« N'est-il que » = se réduit-il à. La doxa utilitaire : on travaille pour gagner sa vie. Le grain de sable : le travail est aussi reconnaissance, lien social, réalisation.",
      problematique:
        "Le travail se réduit-il à sa fonction économique de survie, ou possède-t-il une valeur humaine plus profonde (identité, reconnaissance, accomplissement) ?",
      plan: [
        { partie: "I. Thèse", idee: "Le travail est d'abord un moyen de satisfaire ses besoins.", auteurs: "Genèse, économie classique", exemple: "On accepte des emplois pénibles « pour le salaire »." },
        { partie: "II. Antithèse", idee: "Mais le travail est aussi source d'identité, de lien social et de reconnaissance.", auteurs: "Hegel (reconnaissance), Marx (réalisation de soi)", exemple: "« Que fais-tu dans la vie ? » : le métier dit qui l'on est socialement." },
        { partie: "III. Dépassement", idee: "Le travail oscille entre moyen et fin ; l'idéal est qu'il reste un moyen au service d'une vie libre et sensée.", auteurs: "Russell, Marx (libérer le travail)", exemple: "Travailler pour vivre, sans réduire la vie au travail." },
      ],
      astuce:
        "Garder en tête la distinction moyen / fin (cf. le bonheur). La III évite deux excès : le travail pur gagne-pain (I) et le travaillisme qui fait du travail le sens de la vie.",
    },
  ],
  flashcards: [
    { recto: "Que dit l'étymologie « tripalium » ?", verso: "Le mot « travail » viendrait d'un instrument de torture : le travail est d'abord associé à la peine et à la contrainte." },
    { recto: "Travail / loisir chez Aristote ?", verso: "Le travail manuel est servile ; la vie accomplie est dans le loisir (skholè) : contemplation, politique, pensée." },
    { recto: "L'architecte et l'abeille (Marx) ?", verso: "L'abeille bâtit par instinct ; l'architecte conçoit l'œuvre dans sa tête avant de la réaliser. Le travail humain est conscient et projeté." },
    { recto: "Qu'est-ce que l'aliénation (Marx) ?", verso: "L'homme devient étranger à lui-même : il ne possède pas son produit, répète un geste vide de sens, se réduit à une marchandise." },
    { recto: "Le travail formateur chez Hegel ?", verso: "Par le travail, l'esclave transforme le monde et accède à la conscience de soi : le travail forme l'homme (Bildung)." },
    { recto: "La thèse de Russell sur le travail ?", verso: "On travaille trop ; réduire le temps de travail libérerait du temps pour la culture et la pensée (Éloge de l'oisiveté)." },
    { recto: "L'aliénation est-elle dans le travail lui-même ?", verso: "Non : dans ses CONDITIONS (propriété privée, division du travail, salariat). Le but est de libérer le travail, pas de le supprimer." },
  ],
  quiz: [
    { question: "La comparaison de l'architecte et de l'abeille est de…", choix: ["Hegel", "Marx", "Aristote", "Russell"], bonne: 1, explication: "Marx, Le Capital : le travail humain est conscient et projeté, contrairement à l'instinct animal." },
    { question: "Pour Aristote, le travail manuel est…", choix: ["la plus noble activité", "servile, indigne de l'homme libre", "un loisir", "un jeu"], bonne: 1, explication: "Il occupe le corps et empêche le loisir contemplatif (skholè)." },
    { question: "L'aliénation, selon Marx, vient surtout…", choix: ["du travail en lui-même", "des conditions du travail (capitalisme)", "du loisir", "de la nature"], bonne: 1, explication: "Propriété privée, division du travail, salariat : ce sont elles qu'il faut transformer." },
    { question: "Chez Hegel, qui se forme par le travail ?", choix: ["le maître", "l'esclave", "le roi", "le philosophe seul"], bonne: 1, explication: "L'esclave, en transformant le monde, accède à la conscience de soi (dialectique maître/esclave)." },
    { question: "Russell, dans l'Éloge de l'oisiveté, défend…", choix: ["la paresse totale", "une réduction du temps de travail", "le travail à vie", "la fin de toute technique"], bonne: 1, explication: "Moins de travail, mieux réparti, pour libérer du temps pour la culture." },
  ],
  liens: ["technique", "liberte", "nature"],
};
