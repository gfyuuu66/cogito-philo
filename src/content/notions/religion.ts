import type { Notion } from "../types";

export const religion: Notion = {
  id: "religion",
  titre: "La religion",
  sousTitre: "Foi et raison : ennemies ou étrangères ?",
  couleur: "#9a3412",
  accroche:
    "Le procès de Galilée, condamné pour avoir affirmé que la Terre tourne, est devenu le symbole d'un conflit entre science et religion. Mais ce conflit est-il inévitable, ou naît-il d'un malentendu : la religion qui voudrait faire de la physique, ou la science qui voudrait dicter le sens de la vie ?",
  definitions: [
    { terme: "Religion", def: "Système de croyances et de pratiques rapportées au sacré, unissant une communauté. Du latin *religare* (relier) ou *relegere* (recueillir)." },
    { terme: "Foi", def: "Adhésion à une vérité qui ne repose pas sur une preuve rationnelle, mais sur la confiance et l'intériorité." },
    { terme: "Sacré / profane", def: "Le sacré est ce qui est mis à part, objet de respect et d'interdits ; le profane, l'ordinaire (Durkheim)." },
    { terme: "Théisme / déisme / athéisme / agnosticisme", def: "Théisme : Dieu personnel. Déisme : un Dieu sans religion révélée. Athéisme : nie Dieu. Agnosticisme : juge la question indécidable." },
    { terme: "Transcendance", def: "Ce qui dépasse l'expérience sensible et le monde (souvent : le divin). S'oppose à l'immanence (ce qui est dans le monde)." },
  ],
  cours: [
    {
      titre: "1. Qu'est-ce que la religion ?",
      paragraphes: [
        "L'étymologie hésite : *religare* (relier les hommes entre eux et au divin) ou *relegere* (recueillir, observer scrupuleusement les rites). La religion comporte des **croyances**, des **rites** et une **communauté**.",
        "**Durkheim** l'analyse comme un *fait social* : la religion repose sur la distinction du **sacré** et du **profane**, et la société s'y rend en quelque sorte un culte à elle-même : elle renforce le lien collectif.",
      ],
    },
    {
      titre: "2. Peut-on prouver l'existence de Dieu ?",
      paragraphes: [
        "La tradition a proposé des *preuves* : l'argument **ontologique** (Anselme : l'idée d'un être parfait implique son existence), **cosmologique** (tout a une cause, donc une cause première), **physico-théologique** (l'ordre du monde suppose un horloger).",
        "**Kant** réfute ces preuves : la raison ne peut atteindre Dieu, qui dépasse toute expérience possible. L'existence de Dieu ne se *démontre* pas — ce qui n'interdit pas d'y croire.",
      ],
    },
    {
      titre: "3. Le pari de Pascal",
      paragraphes: [
        "**Pascal** ne prétend pas prouver Dieu, mais raisonner sur la croyance comme un *pari* : si vous croyez et que Dieu existe, vous gagnez tout ; s'il n'existe pas, vous perdez peu. L'enjeu est infini, le risque fini.",
        "Surtout, « le cœur a ses raisons que la raison ne connaît point » : la foi relève d'un autre ordre que la démonstration. Elle est *sentie*, non *prouvée*.",
      ],
    },
    {
      titre: "4. Les soupçons : Feuerbach, Marx, Freud, Nietzsche",
      paragraphes: [
        "Les « maîtres du soupçon » critiquent la religion comme *illusion*. **Feuerbach** : Dieu est une *projection* — l'homme attribue à un être idéal ses propres qualités. **Marx** : la religion est « l'*opium du peuple* », une consolation qui fait accepter la misère.",
        "**Freud** : la religion est une *illusion*, le prolongement du besoin infantile d'un père protecteur. **Nietzsche** annonce que « *Dieu est mort* » : la croyance ne structure plus la culture, à charge pour l'homme de créer ses propres valeurs.",
      ],
    },
    {
      titre: "5. Religion, science et morale",
      paragraphes: [
        "Faut-il opposer science et religion ? **Russell** propose de séparer leurs *domaines* : la science répond au « *comment* » (comment fonctionne le monde), la religion au « *pourquoi* » (le sens, les valeurs). Le conflit naît quand l'une empiète sur l'autre.",
        "**Kant** lui aussi sépare savoir et foi : il « limite le savoir pour faire place à la croyance ». La religion devient alors affaire de *morale* et de *sens*. Reste l'enjeu de la **tolérance** : la religion peut relier (*religare*) ou, dévoyée en fanatisme, diviser.",
      ],
    },
  ],
  theses: [
    { auteur: "Pascal", oeuvre: "Pensées", idee: "On ne prouve pas Dieu ; le pari et le cœur (non la raison démonstrative) conduisent à la foi." },
    { auteur: "Kant", oeuvre: "Critique de la raison pure", idee: "Les preuves de Dieu échouent ; il faut « limiter le savoir pour faire place à la croyance » (foi morale)." },
    { auteur: "Feuerbach", oeuvre: "L'Essence du christianisme", idee: "Dieu est une projection : l'homme attribue à un être idéal ses propres perfections." },
    { auteur: "Marx", oeuvre: "Critique de la philosophie du droit de Hegel", idee: "La religion est « l'opium du peuple » : consolation illusoire qui détourne de la transformation sociale." },
    { auteur: "Freud", oeuvre: "L'Avenir d'une illusion", idee: "La religion est une illusion née du désir d'un père protecteur face à la détresse humaine." },
    { auteur: "Durkheim", oeuvre: "Les Formes élémentaires de la vie religieuse", idee: "La religion est un fait social (sacré/profane) qui assure la cohésion du groupe." },
  ],
  citations: [
    { texte: "La religion est l'opium du peuple.", auteur: "Marx", oeuvre: "Critique de la philosophie du droit de Hegel", usage: "Pour la critique sociale : la religion console mais endort la révolte. À nuancer (Marx parle aussi du « soupir de la créature accablée »)." },
    { texte: "Dieu est mort.", auteur: "Nietzsche", oeuvre: "Le Gai Savoir", usage: "Pour la modernité : la croyance ne fonde plus la culture ; l'homme doit créer ses valeurs. Décoder : c'est un constat culturel, pas une « preuve » athée." },
    { texte: "Le cœur a ses raisons que la raison ne connaît point.", auteur: "Pascal", oeuvre: "Pensées", usage: "Pour situer la foi hors du champ de la démonstration : elle relève d'un autre ordre que la raison scientifique." },
  ],
  paradoxes: [
    "La religion s'oppose-t-elle à la raison et à la science, ou relève-t-elle d'un autre domaine ?",
    "La croyance religieuse est-elle une illusion, ou une dimension propre de l'humanité ?",
    "Peut-on prouver — ou réfuter — l'existence de Dieu ?",
    "La religion relie-t-elle les hommes (religare), ou les divise-t-elle (fanatisme) ?",
  ],
  sujets: [
    {
      intitule: "La religion est-elle l'ennemie de la raison ?",
      analyse:
        "Pont religion/raison/science. La doxa des Lumières : la foi (sans preuve) s'oppose à la raison (preuve). Le grain de sable : foi et raison n'ont peut-être pas le même objet.",
      problematique:
        "La foi religieuse contredit-elle nécessairement la raison, ou bien occupe-t-elle un domaine que la raison ne saurait épuiser ?",
      plan: [
        { partie: "I. Thèse", idee: "Foi et raison semblent s'opposer : l'une croit sans preuve, l'autre exige des preuves.", auteurs: "Lumières, conflit de Galilée, critiques (Freud, Marx)", exemple: "La condamnation de la science au nom d'une lecture littérale des textes." },
        { partie: "II. Antithèse", idee: "Mais la religion ne porte pas sur les mêmes objets : non les faits, mais le sens et la morale.", auteurs: "Russell (comment/pourquoi), Pascal (le cœur), Kant (foi morale)", exemple: "La science explique l'origine de l'univers, non le sens de l'existence." },
        { partie: "III. Dépassement", idee: "Raison et foi peuvent coexister si chacune reste dans son domaine ; le conflit naît de l'empiètement (et le fanatisme, du dévoiement).", auteurs: "Kant, Russell", exemple: "La science ne réfute pas la foi ; la foi ne fait pas de physique." },
      ],
      astuce:
        "La distinction des domaines (faits / sens, « comment » / « pourquoi ») est l'outil central. La III peut ajouter : confondre les domaines produit soit le scientisme, soit le fanatisme.",
    },
    {
      intitule: "La religion n'est-elle qu'une illusion ?",
      analyse:
        "« N'est-elle que » = se réduit-elle à. La doxa critique : oui (Feuerbach, Marx, Freud). Le grain de sable : même si Dieu n'existait pas, la religion répond à des besoins humains réels et structure les sociétés.",
      problematique:
        "La religion se réduit-elle à une illusion à dissiper, ou exprime-t-elle une dimension fondamentale et durable de l'existence humaine ?",
      plan: [
        { partie: "I. Thèse", idee: "La religion apparaît comme une illusion : projection, consolation, désir.", auteurs: "Feuerbach (projection), Marx (opium), Freud (illusion)", exemple: "Promettre un au-delà pour faire accepter les malheurs d'ici-bas." },
        { partie: "II. Antithèse", idee: "Mais elle répond à des besoins réels : sens, morale, lien social.", auteurs: "Durkheim (cohésion sociale), Bergson, Pascal", exemple: "Les rites accompagnent la naissance, le deuil, et soudent les communautés." },
        { partie: "III. Dépassement", idee: "Qu'on y croie ou non, la religion est un fait humain majeur, irréductible à une simple erreur à corriger.", auteurs: "Durkheim, Kant (besoin moral), Bergson", exemple: "Même les sociétés sécularisées gardent des formes du sacré (commémorations, valeurs)." },
      ],
      astuce:
        "Ne pas trancher la question de l'existence de Dieu (hors sujet) : le sujet porte sur la nature de la religion. En III, séparer la vérité d'une croyance et sa fonction anthropologique.",
    },
    {
      intitule: "Croire et savoir s'excluent-ils ?",
      analyse:
        "Pont avec la raison et la vérité. La doxa : savoir (justifié) ≠ croire (sans preuve). Le grain de sable : la science croit aussi (hypothèses), et la foi peut être raisonnable.",
      problematique:
        "La croyance et le savoir sont-ils deux attitudes incompatibles, ou s'articulent-ils dans le rapport humain à la vérité ?",
      plan: [
        { partie: "I. Thèse", idee: "Croire et savoir s'opposent : l'un se passe de preuve, l'autre l'exige.", auteurs: "Platon (doxa / épistémè), Descartes", exemple: "« Je sais » que l'eau bout à 100°C ; « je crois » sans pouvoir prouver." },
        { partie: "II. Antithèse", idee: "Mais le savoir repose aussi sur des croyances, et la foi peut être réfléchie.", auteurs: "Hume (croyance à la causalité), Pascal, Kant", exemple: "Faire confiance aux résultats d'autres scientifiques qu'on ne vérifie pas soi-même." },
        { partie: "III. Dépassement", idee: "Distinguer les types de croyance (opinion, foi, hypothèse) et leurs domaines plutôt que les opposer en bloc.", auteurs: "Kant (savoir / foi), Pascal", exemple: "Croyance scientifique (révisable, fondée) ≠ foi religieuse (existentielle) ≠ opinion (arbitraire)." },
      ],
      astuce:
        "Le mot « croire » est polysémique : opinion, hypothèse, foi, confiance. Lever cette ambiguïté en III est la clé — on dépasse le faux affrontement « croire vs savoir ».",
    },
  ],
  flashcards: [
    { recto: "Que signifie l'étymologie de « religion » ?", verso: "Religare (relier les hommes et au divin) ou relegere (recueillir, observer les rites). Croyances + rites + communauté." },
    { recto: "Le sacré et le profane (Durkheim) ?", verso: "Le sacré est mis à part, objet de respect et d'interdits ; le profane est l'ordinaire. La religion repose sur cette distinction." },
    { recto: "Que dit Kant des preuves de l'existence de Dieu ?", verso: "Elles échouent : la raison ne peut atteindre Dieu. Il « limite le savoir pour faire place à la croyance » (foi morale)." },
    { recto: "Le pari de Pascal ?", verso: "Parier sur Dieu : si l'on croit et qu'il existe, on gagne l'infini ; sinon on perd peu. La foi relève du cœur, non de la preuve." },
    { recto: "Religion = « opium du peuple » : qui, quel sens ?", verso: "Marx : une consolation illusoire qui fait accepter la misère et détourne de la transformation sociale." },
    { recto: "La religion comme « illusion » (Freud) ?", verso: "Le prolongement du désir infantile d'un père protecteur face à la détresse. Une illusion, non forcément une erreur." },
    { recto: "Science et religion selon Russell ?", verso: "Domaines distincts : la science répond au « comment » (les faits), la religion au « pourquoi » (le sens). Le conflit vient de l'empiètement." },
  ],
  quiz: [
    { question: "« La religion est l'opium du peuple » est de…", choix: ["Freud", "Marx", "Nietzsche", "Feuerbach"], bonne: 1, explication: "Marx : consolation illusoire qui endort la révolte sociale." },
    { question: "Pour Feuerbach, Dieu est…", choix: ["une preuve rationnelle", "une projection des qualités humaines", "un fait scientifique", "une illusion d'optique"], bonne: 1, explication: "L'homme projette en Dieu ses propres perfections idéalisées." },
    { question: "Kant pense que l'existence de Dieu…", choix: ["se prouve rationnellement", "ne se démontre pas, mais relève de la foi morale", "est un fait d'expérience", "est absurde"], bonne: 1, explication: "Il réfute les preuves et « fait place à la croyance »." },
    { question: "Pour Russell, science et religion…", choix: ["se contredisent toujours", "occupent des domaines distincts (comment/pourquoi)", "disent la même chose", "sont identiques"], bonne: 1, explication: "Le conflit naît quand l'une empiète sur le domaine de l'autre." },
    { question: "Durkheim étudie la religion comme…", choix: ["une illusion individuelle", "un fait social (sacré/profane) qui unit le groupe", "une science", "une erreur logique"], bonne: 1, explication: "La religion renforce la cohésion sociale par le partage du sacré." },
  ],
  liens: ["raison", "science", "verite"],
};
