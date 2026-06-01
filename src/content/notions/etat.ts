import type { Notion } from "../types";

export const etat: Notion = {
  id: "etat",
  titre: "L'État",
  sousTitre: "Protecteur de la liberté, ou menace pour elle ?",
  couleur: "#0f766e",
  accroche:
    "Imaginez un « blackout » total : plus d'électricité, plus de police, plus de lois appliquées. La première crainte n'est pas le manque de confort, mais les pillages. Cette angoisse dit l'essentiel : l'effondrement de l'autorité réveille aussitôt la peur du chaos — et rappelle pourquoi les hommes ont inventé l'État.",
  definitions: [
    { terme: "État", def: "Institution souveraine détenant l'autorité politique et juridique sur un territoire et une population donnés." },
    { terme: "Souveraineté", def: "Pouvoir suprême de commander en dernier ressort, sans être soumis à un pouvoir supérieur." },
    { terme: "État de nature", def: "Fiction théorique : ce que serait l'humanité sans État ni lois. Sert à comprendre la nécessité (ou non) de l'État." },
    { terme: "Contrat social", def: "Accord (hypothétique) par lequel les individus instituent une autorité commune en échange de la sécurité et du droit." },
    { terme: "Volonté générale", def: "Chez Rousseau, volonté du peuple visant le bien commun (≠ somme des intérêts particuliers). Source légitime de la loi." },
    { terme: "Légal / légitime", def: "Légal = conforme à la loi en vigueur. Légitime = conforme à la justice et à la morale. Une loi peut être légale sans être légitime." },
  ],
  cours: [
    {
      titre: "1. Pourquoi l'État ? (Hobbes)",
      paragraphes: [
        "Pour **Hobbes**, dans l'*état de nature*, sans pouvoir commun, les hommes égaux et rivaux vivent dans la peur : c'est la « guerre de tous contre tous », où « l'homme est un loup pour l'homme ».",
        "Pour en sortir, ils passent un **contrat** : chacun renonce à sa liberté naturelle et la confie à un souverain tout-puissant, le *Léviathan*, en échange de la sécurité. L'État naît de la peur de la mort violente.",
        "**Max Weber** en donne la définition classique : l'État revendique le *monopole de la violence physique légitime* sur un territoire.",
      ],
    },
    {
      titre: "2. L'État légitime : la volonté générale (Rousseau)",
      paragraphes: [
        "**Rousseau** refuse qu'on aliène sa liberté à un maître. Le bon contrat fait que chacun, « s'unissant à tous, n'obéisse pourtant qu'à lui-même ». La loi doit exprimer la **volonté générale**, c'est-à-dire le bien commun.",
        "Alors obéir à la loi n'est plus se soumettre : c'est rester libre, car on obéit à une règle qu'on s'est soi-même donnée (*autonomie*). « L'homme est né libre, et partout il est dans les fers » : tout l'enjeu est de rendre les fers légitimes.",
      ],
    },
    {
      titre: "3. Légal n'est pas légitime",
      paragraphes: [
        "L'État peut devenir **tyrannique** : voter des lois *légales* mais *illégitimes* (lois ségrégationnistes, antisémites). La conformité à la loi ne garantit donc pas la justice.",
        "D'où la distinction décisive : le **légal** (droit positif, ce qui est écrit) et le **légitime** (ce qui est juste). C'est l'écart entre les deux qui rend pensable la désobéissance.",
      ],
    },
    {
      titre: "4. Obéissance et désobéissance",
      paragraphes: [
        "Face à une loi injuste, **Thoreau** théorise la **désobéissance civile** : refuser publiquement et sans violence une loi inique (repris par Gandhi, Martin Luther King).",
        "Le danger inverse est l'**obéissance aveugle**. **Hannah Arendt**, jugeant Eichmann, parle de la *banalité du mal* : le mal extrême peut être commis par un homme ordinaire qui « ne fait qu'obéir » sans penser. L'expérience de **Milgram** confirme la facilité de la soumission à l'autorité. D'où un possible *devoir* de désobéir.",
      ],
    },
    {
      titre: "5. La démocratie et ses limites",
      paragraphes: [
        "La démocratie réalise l'idéal d'autonomie (les citoyens font la loi) et d'isonomie (égalité devant la loi). Mais elle a ses risques.",
        "**Tocqueville** redoute un « despotisme doux » : des individus repliés sur leur vie privée, qui abandonnent volontiers le pouvoir politique pour leur confort. La démocratie est un régime *inachevé*, qui doit sans cesse corriger ses injustices — c'est sa faiblesse et sa grandeur.",
      ],
    },
  ],
  theses: [
    { auteur: "Hobbes", oeuvre: "Léviathan", idee: "Sans État, c'est la guerre de tous contre tous ; le contrat institue un souverain absolu garant de la sécurité." },
    { auteur: "Locke", oeuvre: "Traité du gouvernement civil", idee: "L'État doit garantir les droits naturels (vie, liberté, propriété) ; son pouvoir est limité et divisé. Légitime la résistance à la tyrannie." },
    { auteur: "Rousseau", oeuvre: "Du contrat social", idee: "La loi légitime exprime la volonté générale ; obéir à une loi qu'on s'est donnée, c'est rester libre." },
    { auteur: "Max Weber", oeuvre: "Le Savant et le Politique", idee: "L'État détient le monopole de la violence physique légitime sur un territoire." },
    { auteur: "Hannah Arendt", oeuvre: "Eichmann à Jérusalem", idee: "La « banalité du mal » : l'obéissance irréfléchie peut rendre des hommes ordinaires complices du pire." },
    { auteur: "Tocqueville", oeuvre: "De la démocratie en Amérique", idee: "La démocratie menace d'un « despotisme doux » : le repli des individus sur la sphère privée." },
  ],
  citations: [
    { texte: "L'homme est un loup pour l'homme.", auteur: "Hobbes", oeuvre: "Le Citoyen (De Cive)", usage: "Pour la thèse de la nécessité de l'État : sans autorité, la rivalité dégénère en violence. Décoder : ce n'est pas que l'homme soit « méchant », c'est l'insécurité qui rend la violence rationnelle." },
    { texte: "L'État revendique avec succès, à son profit, le monopole de la violence physique légitime.", auteur: "Max Weber", oeuvre: "Le Savant et le Politique", usage: "Définition rigoureuse de l'État, parfaite pour la partie « définition des termes » de l'intro." },
    { texte: "L'homme est né libre, et partout il est dans les fers.", auteur: "Rousseau", oeuvre: "Du contrat social", usage: "Ouverture forte : pose le problème de la légitimité du pouvoir. Comment des fers (la loi) peuvent-ils être justes ?" },
  ],
  paradoxes: [
    "L'État protège-t-il la liberté individuelle ou la menace-t-il ?",
    "Doit-on toujours obéir aux lois, ou existe-t-il un devoir de désobéir ?",
    "L'État repose-t-il sur la force ou sur le droit (légal / légitime) ?",
    "La démocratie est-elle le meilleur régime malgré ses imperfections ?",
  ],
  sujets: [
    {
      intitule: "Peut-on désobéir aux lois ?",
      analyse:
        "« Peut-on » a deux sens : en a-t-on le droit (moral) ? est-ce légitime ? La doxa : désobéir, c'est mal, c'est le désordre. Le grain de sable : certaines lois sont elles-mêmes injustes.",
      problematique:
        "À quelles conditions la désobéissance à la loi cesse-t-elle d'être un crime contre l'ordre pour devenir un devoir moral au nom de la justice ?",
      plan: [
        { partie: "I. Thèse", idee: "Obéir aux lois est la condition de l'ordre et de la paix.", auteurs: "Hobbes (état de nature), Rousseau (le sophisme du resquilleur)", exemple: "Si chacun désobéit aux lois qui lui déplaisent, plus de société possible." },
        { partie: "II. Antithèse", idee: "Mais une loi légale peut être injuste : y obéir devient complicité.", auteurs: "Distinction légal/légitime, Thoreau, Arendt (banalité du mal), Antigone", exemple: "Les lois ségrégationnistes ; « je ne faisais qu'obéir aux ordres »." },
        { partie: "III. Dépassement", idee: "La désobéissance civile — publique, non-violente, au nom du droit — peut être un devoir, surtout en démocratie.", auteurs: "Thoreau, Gandhi, Martin Luther King, Rousseau (autonomie)", exemple: "Rosa Parks : enfreindre une loi injuste pour appeler à une loi plus juste." },
      ],
      astuce:
        "La III n'est pas « parfois oui, parfois non » : elle fixe des conditions strictes (non-violence, publicité, visée de justice) qui distinguent la désobéissance civile du simple délit.",
    },
    {
      intitule: "L'État est-il l'ennemi de la liberté individuelle ?",
      analyse:
        "La doxa libérale : l'État = contrainte, interdictions, surveillance, donc ennemi de la liberté. Le grain de sable : sans État, ma liberté serait à la merci du plus fort.",
      problematique:
        "L'État, en limitant ce que je peux faire, détruit-il ma liberté, ou en est-il au contraire la condition de possibilité ?",
      plan: [
        { partie: "I. Thèse", idee: "L'État apparaît comme une contrainte qui limite la liberté.", auteurs: "Critique de la surveillance, le Léviathan", exemple: "Lois, impôts, interdits ; le « 1984 » d'Orwell." },
        { partie: "II. Antithèse", idee: "Mais sans État, la liberté de chacun serait détruite par la violence de tous.", auteurs: "Hobbes (état de nature), Locke", exemple: "Dans l'anarchie, le plus fort impose sa loi : aucune liberté réelle." },
        { partie: "III. Dépassement", idee: "L'État de droit ne supprime pas la liberté : il la rend effective et égale pour tous.", auteurs: "Rousseau (autonomie), Locke (droits garantis)", exemple: "La loi qui interdit de me nuire protège aussi ma liberté." },
      ],
      astuce:
        "Distinguer liberté « naturelle » (illimitée mais sans garantie) et liberté « civile » (limitée mais garantie). La III montre qu'on échange la première contre la seconde, plus réelle.",
    },
    {
      intitule: "L'État a-t-il tous les droits sur l'individu ?",
      analyse:
        "Le mot clé est « tous ». Personne ne nie que l'État ait des droits ; la question est de savoir s'ils sont illimités. Tension entre puissance nécessaire et limites morales.",
      problematique:
        "L'autorité de l'État est-elle sans limite, ou s'arrête-t-elle là où commencent les droits fondamentaux de la personne ?",
      plan: [
        { partie: "I. Thèse", idee: "L'État doit disposer d'une autorité forte, presque absolue, pour assurer l'ordre.", auteurs: "Hobbes (souverain absolu)", exemple: "Il peut lever l'impôt, juger, et même envoyer à la guerre." },
        { partie: "II. Antithèse", idee: "Mais un pouvoir sans limite devient tyrannique et bafoue la dignité.", auteurs: "Locke (droits naturels), Arendt, désobéissance civile", exemple: "Les régimes totalitaires : l'État qui dispose de tout, y compris des vies." },
        { partie: "III. Dépassement", idee: "L'État légitime est limité par le droit et la volonté générale qu'il doit servir.", auteurs: "Rousseau, Montesquieu (séparation des pouvoirs)", exemple: "État de droit : la loi vaut aussi pour les gouvernants." },
      ],
      astuce:
        "Amorce idéale : la conscription (l'État qui peut exiger qu'on risque sa vie) montre l'étendue vertigineuse de son pouvoir — et pose d'emblée la question de ses limites.",
    },
  ],
  flashcards: [
    { recto: "Qu'est-ce que l'état de nature ?", verso: "Fiction théorique : l'humanité sans État ni lois. Sert à montrer pourquoi (ou non) l'État est nécessaire." },
    { recto: "Le contrat social chez Hobbes ?", verso: "Pour fuir la « guerre de tous contre tous », les hommes confient leur liberté à un souverain absolu (Léviathan) en échange de la sécurité." },
    { recto: "Définition de l'État par Max Weber ?", verso: "L'institution qui détient le monopole de la violence physique légitime sur un territoire." },
    { recto: "Qu'est-ce que la volonté générale (Rousseau) ?", verso: "La volonté du peuple orientée vers le bien commun (≠ somme des intérêts particuliers). Elle fonde la légitimité de la loi." },
    { recto: "Légal vs légitime ?", verso: "Légal = conforme à la loi écrite. Légitime = conforme à la justice. Une loi peut être légale sans être légitime." },
    { recto: "La « banalité du mal » (Arendt) ?", verso: "Le mal extrême peut être commis par un homme ordinaire qui obéit sans penser (Eichmann)." },
    { recto: "Le « despotisme doux » (Tocqueville) ?", verso: "Le risque démocratique : des individus repliés sur le privé qui délaissent le pouvoir politique pour leur confort." },
  ],
  quiz: [
    { question: "« L'homme est un loup pour l'homme » sert à justifier…", choix: ["l'anarchie", "la nécessité d'un État fort (Hobbes)", "la désobéissance", "la démocratie directe"], bonne: 1, explication: "Hobbes : sans autorité commune, l'insécurité mène à la guerre de tous contre tous." },
    { question: "La volonté générale, chez Rousseau, vise…", choix: ["l'intérêt du roi", "le bien commun", "la somme des intérêts privés", "la force"], bonne: 1, explication: "Elle se distingue de la « volonté de tous » (somme des intérêts particuliers)." },
    { question: "Une loi peut être légale mais non…", choix: ["écrite", "votée", "légitime", "appliquée"], bonne: 2, explication: "Légal (conforme à la loi) ≠ légitime (conforme à la justice)." },
    { question: "La « banalité du mal » est un concept de…", choix: ["Hobbes", "Hannah Arendt", "Weber", "Tocqueville"], bonne: 1, explication: "Arendt, à propos du procès d'Eichmann." },
    { question: "La désobéissance civile (Thoreau) est…", choix: ["violente et secrète", "publique et non-violente", "un simple délit", "interdite en démocratie"], bonne: 1, explication: "Elle assume publiquement la transgression d'une loi injuste, sans violence." },
  ],
  liens: ["justice", "liberte", "devoir"],
};
