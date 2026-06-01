import type { Notion } from "../types";

export const justice: Notion = {
  id: "justice",
  titre: "La justice",
  sousTitre: "L'égal, le légal et l'équitable",
  couleur: "#1d4ed8",
  accroche:
    "Deux enfants, un gâteau : faut-il le partager en parts strictement égales, ou donner plus à celui qui a le plus faim, ou à celui qui a aidé à le faire ? Cette scène minuscule contient tout le problème de la justice : égalité, mérite, besoin — et le soupçon que « juste » pourrait n'être que le nom donné à l'intérêt du plus fort.",
  definitions: [
    { terme: "Justice (vertu)", def: "Disposition à rendre à chacun ce qui lui revient, à respecter le droit d'autrui." },
    { terme: "Justice (institution)", def: "Ensemble des lois et des tribunaux qui appliquent le droit dans une société." },
    { terme: "Droit naturel", def: "Idée d'un juste universel, valable par nature, antérieur et supérieur aux lois humaines." },
    { terme: "Droit positif", def: "Ensemble des lois effectivement posées (écrites, votées) dans une société donnée." },
    { terme: "Équité", def: "Justice qui corrige la loi générale en tenant compte du cas particulier (Aristote : *epieikeia*)." },
    { terme: "Égalité / équité", def: "Égalité = même traitement pour tous. Équité = traitement proportionné aux différences pertinentes (mérite, besoin)." },
  ],
  cours: [
    {
      titre: "1. Les visages de la justice",
      paragraphes: [
        "« Justice » a plusieurs sens : une **vertu** (être juste, rendre à chacun son dû), une **institution** (lois et tribunaux), et un **idéal** (l'équitable, ce qui *devrait* être le droit).",
        "Tout le problème vient de leur écart : le droit *réel* (les lois) coïncide-t-il avec le juste *idéal* ? La justice institutionnelle est-elle toujours juste ?",
      ],
    },
    {
      titre: "2. Justice et égalité (Aristote)",
      paragraphes: [
        "**Aristote** distingue la justice **commutative** (égalité arithmétique dans les échanges : à valeur égale, prix égal) et la justice **distributive** (égalité *proportionnelle* : répartir honneurs et biens selon le mérite).",
        "L'égalité stricte n'est donc pas toujours juste : donner la même note à qui a travaillé et à qui n'a rien fait serait injuste. D'où l'**équité**, qui corrige la généralité de la loi pour s'ajuster au cas singulier.",
      ],
    },
    {
      titre: "3. Droit naturel ou droit positif ?",
      paragraphes: [
        "Existe-t-il un *juste par nature*, supérieur aux lois ? **Antigone** brave l'interdit de Créon au nom des « lois non écrites » des dieux. **Montesquieu** affirme que des rapports de justice existent avant toute loi, comme des vérités géométriques.",
        "Le **positivisme juridique** (Kelsen) répond : non, le droit naturel est trop flou ; seul existe le droit *positif*, ce que la société pose comme loi. **Dworkin** nuance : le juge interprète la loi selon son *esprit* (on n'hérite pas du crime de son aïeul, même si aucun texte ne l'interdit).",
      ],
    },
    {
      titre: "4. La justice sociale (Rawls)",
      paragraphes: [
        "**John Rawls** cherche des principes justes par une expérience de pensée : derrière un *voile d'ignorance* (j'ignore quelle place je tiendrai dans la société), quelles règles choisirais-je ?",
        "On choisirait l'égalité des libertés pour tous, et l'on n'accepterait les inégalités que si elles profitent aux plus défavorisés (principe de différence). La justice comme **équité** : impartiale parce que pensée sans connaître son propre avantage.",
      ],
    },
    {
      titre: "5. Justice et force",
      paragraphes: [
        "La justice peut-elle se passer de la force ? **Pascal** : « la justice sans la force est impuissante ; la force sans la justice est tyrannique ». Une justice qu'on ne peut pas faire respecter ne sert à rien.",
        "Le risque : que « ce qui est fort » se fasse passer pour « ce qui est juste » (Thrasymaque : la justice est l'intérêt du plus fort). Tout l'enjeu politique est d'unir la force au droit, pour que la force serve la justice et non l'inverse.",
      ],
    },
  ],
  theses: [
    { auteur: "Aristote", oeuvre: "Éthique à Nicomaque", idee: "Justice distributive (proportionnelle au mérite) et commutative (égalité des échanges) ; l'équité corrige la loi générale." },
    { auteur: "Pascal", oeuvre: "Pensées", idee: "Justice et force doivent être unies : la justice sans force est impuissante, la force sans justice est tyrannique." },
    { auteur: "Kelsen", oeuvre: "Théorie pure du droit", idee: "Positivisme : seul existe le droit positif ; le « droit naturel » est trop subjectif pour fonder le droit." },
    { auteur: "John Rawls", oeuvre: "Théorie de la justice", idee: "La justice est l'équité : principes choisis sous un « voile d'ignorance », les inégalités n'étant justes que si elles profitent aux plus défavorisés." },
    { auteur: "Hobbes", oeuvre: "Léviathan", idee: "Avant la loi instituée, rien n'est juste ni injuste ; c'est le souverain qui définit le juste." },
  ],
  citations: [
    { texte: "Ne pouvant faire que ce qui est juste fût fort, on a fait que ce qui est fort fût juste.", auteur: "Pascal", oeuvre: "Pensées", usage: "Pour la tension justice/force : montre le risque que la force usurpe le nom de justice. Excellent en II ou en accroche." },
    { texte: "La justice sans la force est impuissante ; la force sans la justice est tyrannique.", auteur: "Pascal", oeuvre: "Pensées", usage: "Pour la III : la justice effective doit unir droit et force. À ne pas confondre avec la citation précédente." },
    { texte: "Le juste… est une sorte de proportion.", auteur: "Aristote", oeuvre: "Éthique à Nicomaque", usage: "Contre l'égalitarisme naïf : la justice distributive est proportionnelle, pas arithmétique. Mobiliser dans un sujet justice/égalité." },
  ],
  paradoxes: [
    "Le juste existe-t-il par nature, ou seulement par convention et par la loi (droit naturel / positif) ?",
    "La justice, est-ce l'égalité stricte ou l'équité (la proportion) ?",
    "Une loi peut-elle être injuste ? Le juste se réduit-il au légal ?",
    "La justice est-elle autre chose que l'intérêt du plus fort (Thrasymaque) ?",
  ],
  sujets: [
    {
      intitule: "Le juste se réduit-il au légal ?",
      analyse:
        "« Se réduire à » = n'être rien d'autre que. La doxa de l'ordre : est juste ce qui est conforme à la loi. Le grain de sable : on peut juger une loi injuste, donc « juste » déborde « légal ».",
      problematique:
        "La justice se confond-elle avec la conformité aux lois en vigueur, ou existe-t-il une mesure du juste qui permet de juger les lois elles-mêmes ?",
      plan: [
        { partie: "I. Thèse", idee: "Est juste ce qui est légal : la loi fixe le juste et garantit l'ordre.", auteurs: "Hobbes, Kelsen (positivisme)", exemple: "Sans référence commune à la loi, chacun aurait sa propre « justice » : le chaos." },
        { partie: "II. Antithèse", idee: "Mais nous jugeons certaines lois injustes : le juste excède le légal.", auteurs: "Droit naturel, Antigone, distinction légal/légitime", exemple: "Les lois esclavagistes étaient légales et pourtant injustes." },
        { partie: "III. Dépassement", idee: "La loi vise la justice sans l'épuiser ; l'équité corrige la loi pour la rapprocher du juste.", auteurs: "Aristote (équité), Rawls, Dworkin", exemple: "Le juge interprète la loi selon son esprit pour éviter une injustice manifeste." },
      ],
      astuce:
        "Ne pas opposer brutalement droit naturel et positif : la III les articule (la loi positive tend vers un juste qu'elle n'atteint jamais parfaitement). Pont direct avec l'État.",
    },
    {
      intitule: "Être juste, est-ce traiter tout le monde de la même façon ?",
      analyse:
        "Identifie justice et égalité de traitement. Le grain de sable : traiter identiquement des situations différentes peut être profondément injuste.",
      problematique:
        "La justice consiste-t-elle à appliquer à tous un traitement strictement égal, ou à proportionner le traitement aux différences pertinentes entre les personnes ?",
      plan: [
        { partie: "I. Thèse", idee: "La justice exige l'égalité : mêmes droits, même loi pour tous (isonomie).", auteurs: "Égalité devant la loi, démocratie", exemple: "Le même code pénal s'applique au riche et au pauvre." },
        { partie: "II. Antithèse", idee: "Mais l'égalité stricte peut être injuste : elle ignore mérites et besoins.", auteurs: "Aristote (justice distributive)", exemple: "Donner la même chose à qui a beaucoup travaillé et à qui n'a rien fait." },
        { partie: "III. Dépassement", idee: "La justice est l'équité : traiter également les égaux, inégalement les inégaux, au bénéfice des plus défavorisés.", auteurs: "Aristote (équité), Rawls (principe de différence)", exemple: "Aménager un examen pour un élève handicapé n'est pas un privilège mais une équité." },
      ],
      astuce:
        "Formule à viser en III : « traiter également les égaux et inégalement les inégaux ». L'exemple de l'aménagement (handicap, bourse) rend la proportion concrète.",
    },
    {
      intitule: "La justice n'est-elle que l'intérêt du plus fort ?",
      analyse:
        "Thèse cynique de Thrasymaque (La République) : « juste » = ce qui sert ceux qui détiennent le pouvoir. Le grain de sable : si c'était vrai, le mot « injuste » n'aurait aucun sens contre les puissants.",
      problematique:
        "La justice n'est-elle qu'un masque de la domination, ou possède-t-elle une valeur propre qui permet de juger les puissants eux-mêmes ?",
      plan: [
        { partie: "I. Thèse", idee: "La justice semble servir les intérêts des dominants.", auteurs: "Thrasymaque, Pascal (la force se fait passer pour justice), Marx (idéologie)", exemple: "Des lois historiquement taillées pour protéger une classe." },
        { partie: "II. Antithèse", idee: "Mais on critique l'injustice des puissants : la justice prétend valoir pour tous.", auteurs: "Droit naturel, Rawls (impartialité)", exemple: "On juge des dirigeants pour crimes : preuve d'une norme au-dessus de la force." },
        { partie: "III. Dépassement", idee: "La justice est l'exigence d'unir la force au droit pour qu'elle serve l'intérêt commun.", auteurs: "Pascal (force + justice), Rousseau (volonté générale)", exemple: "L'État de droit soumet les gouvernants à la loi qu'ils édictent." },
      ],
      astuce:
        "Si la justice n'était QUE la force, on ne pourrait jamais dire « c'est injuste » : or on le dit, et cela a un sens. Ce constat (en II) suffit à réfuter le réductionnisme.",
    },
  ],
  flashcards: [
    { recto: "Justice distributive vs commutative (Aristote) ?", verso: "Distributive : répartir selon le mérite (égalité proportionnelle). Commutative : égalité arithmétique dans les échanges." },
    { recto: "Qu'est-ce que l'équité ?", verso: "La justice qui corrige la généralité de la loi pour l'ajuster au cas particulier (Aristote, *epieikeia*)." },
    { recto: "Droit naturel vs droit positif ?", verso: "Naturel : un juste universel, supérieur aux lois (Antigone, Montesquieu). Positif : les lois effectivement posées (Kelsen)." },
    { recto: "Le « voile d'ignorance » de Rawls ?", verso: "Choisir les règles de la société sans savoir quelle place on y occupera : on obtient des principes impartiaux et équitables." },
    { recto: "Le principe de différence (Rawls) ?", verso: "Les inégalités ne sont justes que si elles profitent aux plus défavorisés." },
    { recto: "Justice et force selon Pascal ?", verso: "« La justice sans la force est impuissante ; la force sans la justice est tyrannique » : il faut les unir." },
    { recto: "La thèse de Thrasymaque ?", verso: "« La justice est l'intérêt du plus fort » — thèse cynique réfutée par Socrate dans La République." },
  ],
  quiz: [
    { question: "La justice distributive (Aristote) repose sur…", choix: ["l'égalité arithmétique", "la proportion (le mérite)", "la force", "le hasard"], bonne: 1, explication: "Elle répartit honneurs et biens proportionnellement, pas à parts strictement égales." },
    { question: "Le positivisme juridique (Kelsen) soutient que…", choix: ["le droit naturel fonde tout", "seul existe le droit positif", "la justice = la force", "les juges créent le droit naturel"], bonne: 1, explication: "Pour Kelsen, le « droit naturel » est trop flou ; seul vaut le droit posé." },
    { question: "Le « voile d'ignorance » est un outil de…", choix: ["Aristote", "Rawls", "Pascal", "Hobbes"], bonne: 1, explication: "Rawls, pour dériver des principes de justice impartiaux." },
    { question: "« La justice sans la force est impuissante » est de…", choix: ["Rawls", "Aristote", "Pascal", "Kelsen"], bonne: 2, explication: "Pascal, Pensées : il faut unir justice et force." },
    { question: "Antigone illustre le conflit entre…", choix: ["égalité et liberté", "droit naturel et droit positif", "force et richesse", "raison et foi"], bonne: 1, explication: "Les « lois non écrites » contre l'édit de Créon : droit naturel vs droit positif." },
  ],
  liens: ["etat", "devoir", "liberte"],
};
