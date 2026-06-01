import type { Notion } from "../types";

export const art: Notion = {
  id: "art",
  titre: "L'art",
  sousTitre: "La création, le beau et la vérité sensible",
  couleur: "#c2410c",
  accroche:
    "En 2022, l'image *Théâtre D'opéra Spatial*, générée par l'intelligence artificielle Midjourney, remporte le premier prix d'un concours d'art aux États-Unis, déclenchant une polémique mondiale. Cet épisode rouvre une question très ancienne : suffit-il qu'un objet soit beau ou bien fait pour être une œuvre d'art, ou faut-il un créateur, une intention, un regard ?",
  definitions: [
    { terme: "Art", def: "Activité humaine de production d'œuvres visant le beau ou l'expression, par opposition à la nature (qui produit spontanément) et au hasard." },
    { terme: "Technè (grec)", def: "Savoir-faire, habileté à produire. Dans l'Antiquité, l'art et la technique ne se distinguent pas : le mot désigne aussi bien le travail de l'artisan que celui de l'artiste." },
    { terme: "Mimésis", def: "Imitation. Conception classique selon laquelle l'art représente, reproduit le réel ou la nature." },
    { terme: "Esthétique", def: "Réflexion philosophique sur le beau et sur la perception sensible (du grec *aisthêsis*, la sensation)." },
    { terme: "Ready-made", def: "Objet manufacturé ordinaire promu au rang d'œuvre d'art par le seul choix de l'artiste (Duchamp)." },
    { terme: "Génie", def: "Chez Kant, talent naturel par lequel la nature donne ses règles à l'art : l'artiste de génie crée des règles nouvelles sans les imiter." },
  ],
  cours: [
    {
      titre: "1. Art et technique : une origine commune",
      paragraphes: [
        "À l'origine, **l'art et la technique ne font qu'un**. Le grec *technè* désigne tout savoir-faire efficace : celui du cordonnier comme celui du sculpteur. L'artiste est d'abord un *artisan* habile.",
        "La distinction est *tardive*. Peu à peu, on oppose l'**objet technique**, qui vise une *utilité* (une chaise sert à s'asseoir), à l'**œuvre d'art**, qui vise le *beau* ou l'*expression* et n'a pas de fonction extérieure. Une sculpture ne sert à rien : elle est faite pour être contemplée.",
      ],
    },
    {
      titre: "2. L'art comme imitation (mimésis)",
      paragraphes: [
        "Pendant des siècles, on a pensé que l'art consiste à **imiter la nature**. Pour **Aristote**, l'homme prend naturellement plaisir à imiter et à reconnaître ce qui est imité : de là naissent la peinture et la tragédie.",
        "Mais imiter n'est pas copier platement : l'artiste *choisit*, *transforme*, *embellit*. La tragédie, en imitant des actions terribles, produit même une *catharsis* (purification des passions).",
        "**Platon**, lui, se méfie de l'art. Le monde sensible est déjà une copie imparfaite des Idées ; l'art, qui imite le sensible, n'est qu'une *copie de copie*, qui éloigne de la vérité et flatte les passions. C'est la grande accusation à laquelle toute la philosophie de l'art devra répondre.",
      ],
    },
    {
      titre: "3. De l'imitation à la création",
      paragraphes: [
        "L'art moderne renverse l'idéal d'imitation : l'artiste ne reproduit pas le réel, il **crée** une réalité nouvelle. Pour **Kant**, le *génie* est « le talent qui donne ses règles à l'art » : il invente des formes inédites au lieu de suivre des recettes.",
        "L'art dit alors une **vérité** propre. Pour **Hegel**, l'œuvre est la *manifestation sensible de l'Idée* : elle rend visible le spirituel. Une œuvre peut exprimer la souffrance, une époque ou la condition humaine mieux qu'un discours.",
      ],
    },
    {
      titre: "4. Le jugement de goût (Kant)",
      paragraphes: [
        "Quand je dis « c'est beau », je formule un **jugement de goût**. Kant en dégage le paradoxe : il est *subjectif* (fondé sur un plaisir ressenti) mais prétend à l'*universel* (je parle comme si tous devaient être d'accord).",
        "Ce plaisir est **désintéressé** : j'admire une rose sans vouloir la cueillir ni la vendre. D'où la formule : est beau ce qui plaît *universellement* et *sans concept*. Le beau n'est ni l'agréable (purement privé) ni l'utile.",
      ],
    },
    {
      titre: "5. Qu'est-ce qui fait l'œuvre ? Le ready-made",
      paragraphes: [
        "En 1917, **Marcel Duchamp** expose *Fontaine* : un simple urinoir industriel signé d'un faux nom. L'objet n'est ni beau ni fabriqué par l'artiste. Pourtant il fait scandale et devient une œuvre majeure du XXe siècle.",
        "Conclusion : ce n'est plus la *beauté* ni le *savoir-faire* qui font l'œuvre, mais le **regard** qu'on porte sur elle, l'*intention* de l'artiste et le *contexte* (le musée, le « monde de l'art »). L'art devient affaire d'idée autant que de matière.",
      ],
    },
    {
      titre: "6. L'art à l'ère de l'industrie culturelle",
      paragraphes: [
        "**Walter Benjamin** observe qu'à l'ère de la reproduction technique (photo, cinéma), l'œuvre perd son *aura* : son unicité, son ancrage ici et maintenant. La copie infinie démocratise l'art mais le banalise.",
        "**Adorno** parle d'*industrie culturelle* : des œuvres produites comme des marchandises, standardisées pour plaire au plus grand nombre et vendre. Le risque : un art qui distrait au lieu de faire penser. Question brûlante à l'heure des contenus calibrés pour devenir viraux.",
      ],
    },
  ],
  theses: [
    { auteur: "Platon", oeuvre: "La République", idee: "L'art imite le sensible, lui-même copie des Idées : il est copie de copie, il éloigne du vrai et flatte les passions. Méfiance." },
    { auteur: "Aristote", oeuvre: "Poétique", idee: "L'art est mimésis : imiter procure plaisir et connaissance, et la tragédie opère une catharsis des passions." },
    { auteur: "Kant", oeuvre: "Critique de la faculté de juger", idee: "Le beau plaît universellement, sans concept et de façon désintéressée ; l'art véritable est l'œuvre du génie." },
    { auteur: "Hegel", oeuvre: "Esthétique", idee: "L'œuvre d'art est la manifestation sensible de l'Idée : elle donne à voir le vrai sous une forme concrète." },
    { auteur: "Walter Benjamin", oeuvre: "L'Œuvre d'art à l'époque de sa reproductibilité technique", idee: "La reproduction de masse fait perdre à l'œuvre son aura (son unicité)." },
    { auteur: "Adorno", oeuvre: "La Dialectique de la raison", idee: "L'industrie culturelle transforme l'art en marchandise standardisée qui endort l'esprit critique." },
  ],
  citations: [
    { texte: "Est beau ce qui plaît universellement et sans concept.", auteur: "Kant", oeuvre: "Critique de la faculté de juger", usage: "Au cœur d'un sujet sur le goût : pose en une phrase le paradoxe du jugement esthétique (subjectif mais prétendant à l'universel). À décoder, jamais à lâcher seule." },
    { texte: "Le génie est le talent (don naturel) qui donne ses règles à l'art.", auteur: "Kant", oeuvre: "Critique de la faculté de juger", usage: "Pour la partie « création » : montre que l'artiste invente des règles au lieu d'imiter, contre l'idée d'art comme simple technique." },
    { texte: "L'art est un anti-destin.", auteur: "Malraux", oeuvre: "Les Voix du silence", usage: "En ouverture ou en III : l'art arrache l'homme à la mort et au temps, il donne une forme durable à l'éphémère." },
    { texte: "Avec l'art, l'esprit se manifeste sous une forme sensible.", auteur: "Hegel", oeuvre: "Esthétique", usage: "Contre Platon : l'art n'éloigne pas du vrai, il le rend visible. Idéal pour un sujet art / vérité." },
  ],
  paradoxes: [
    "Le goût est-il purement subjectif (« des goûts et des couleurs… ») ou existe-t-il des critères du beau ?",
    "L'art doit-il imiter le réel ou le transformer, voire le créer de toutes pièces ?",
    "L'art nous éloigne-t-il de la vérité (Platon) ou la dévoile-t-il mieux qu'un discours (Hegel, Proust) ?",
    "N'importe quel objet peut-il devenir une œuvre d'art ? Où s'arrête l'art ? (ready-made)",
    "L'art doit-il être utile (moral, politique) ou gratuit (« l'art pour l'art ») ?",
  ],
  sujets: [
    {
      intitule: "Qu'est-ce qui fait d'un objet une œuvre d'art ?",
      analyse:
        "Le sujet présuppose qu'il y a une différence entre un objet ordinaire et une œuvre. Le piège : chercher UN critère (la beauté ? l'utilité ? le savoir-faire ?). Le ready-made fait sauter chacun de ces critères, ce qui ouvre la tension.",
      problematique:
        "Une œuvre d'art se reconnaît-elle à des propriétés de l'objet lui-même (beauté, savoir-faire), ou bien est-ce le regard et l'intention qui la constituent — au risque que tout puisse alors devenir art ?",
      plan: [
        { partie: "I. Thèse", idee: "L'œuvre se distingue par la beauté et le savoir-faire qu'elle manifeste.", auteurs: "Aristote (mimésis), Kant (le beau), technè", exemple: "Une fresque de la Renaissance : maîtrise technique et beauté reconnues." },
        { partie: "II. Antithèse", idee: "Mais ni la beauté ni l'utilité ne suffisent : c'est le regard, l'intention et le contexte qui font l'œuvre.", auteurs: "Duchamp (ready-made), théorie du « monde de l'art »", exemple: "*Fontaine* (1917) : un urinoir devient œuvre par le seul geste de l'exposer." },
        { partie: "III. Dépassement", idee: "Est œuvre ce qui suscite une expérience esthétique et dévoile une vérité, par la rencontre entre une intention créatrice et un regard.", auteurs: "Kant (jugement de goût désintéressé), Hegel (vérité sensible)", exemple: "Une œuvre nous arrête, nous fait voir le monde autrement — ce que ne fait pas un objet utilitaire." },
      ],
      astuce:
        "Je pars du critère le plus évident (beauté/technique = I), je le fais exploser avec le contre-exemple le plus radical (le ready-made = II), puis je déplace le critère de l'objet vers la relation objet-spectateur (III). La synthèse ne dit pas « un peu des deux » : elle redéfinit l'œuvre comme une expérience.",
    },
    {
      intitule: "L'art nous détourne-t-il de la réalité ?",
      analyse:
        "« Détourner » = éloigner, faire fuir. La doxa : l'art est évasion, divertissement, illusion. Le grain de sable : et si l'art nous faisait au contraire mieux voir le réel ?",
      problematique:
        "L'art est-il une fuite hors du réel dans l'illusion, ou bien un détour qui nous reconduit au réel en nous le faisant voir autrement ?",
      plan: [
        { partie: "I. Thèse", idee: "L'art semble une illusion qui nous éloigne du réel.", auteurs: "Platon (copie de copie), critique du divertissement", exemple: "Se perdre dans une fiction pour fuir sa vie." },
        { partie: "II. Antithèse", idee: "Mais l'art dévoile une vérité du réel que la perception ordinaire manque.", auteurs: "Aristote (catharsis), Hegel, Proust", exemple: "Un roman de Balzac fait comprendre une société mieux qu'un manuel." },
        { partie: "III. Dépassement", idee: "L'art n'est pas fuite mais re-vision : il nous rend plus présents au monde en le recréant.", auteurs: "Merleau-Ponty, Klee (« l'art ne reproduit pas le visible, il rend visible »)", exemple: "Devant un Van Gogh, on ne voit plus jamais un champ de la même façon." },
      ],
      astuce:
        "Le mot « détour » contient déjà la réponse : un détour n'est pas une sortie de route, c'est un autre chemin vers le même but. Je joue sur ce double sens pour construire le III.",
    },
    {
      intitule: "Le jugement esthétique est-il purement subjectif ?",
      analyse:
        "« Purement » est le mot clé. Personne ne nie une part de subjectivité ; la question est de savoir s'il n'y a QUE cela, ou s'il existe une exigence d'universalité.",
      problematique:
        "Quand je dis « c'est beau », est-ce que j'exprime seulement mon plaisir privé, ou est-ce que je prétends à un accord que tous devraient partager ?",
      plan: [
        { partie: "I. Thèse", idee: "Le goût semble une affaire purement personnelle.", auteurs: "Relativisme (« des goûts et des couleurs… »)", exemple: "Deux amis adorent / détestent le même film." },
        { partie: "II. Antithèse", idee: "Mais le jugement de goût prétend à l'universel et se distingue du simple agréable.", auteurs: "Kant (universalité subjective, plaisir désintéressé)", exemple: "On argumente, on cherche à convaincre l'autre qu'une œuvre est belle." },
        { partie: "III. Dépassement", idee: "Le goût se cultive : ni caprice ni science, il s'éduque socialement.", auteurs: "Bourdieu (le goût comme distinction sociale), Hume", exemple: "On apprend à goûter le jazz ou la peinture abstraite." },
      ],
      astuce:
        "Je neutralise le faux débat (« objectif contre subjectif ») en introduisant une troisième voie en III : l'intersubjectivité et la culture. C'est souvent là que se gagne la note.",
    },
  ],
  flashcards: [
    { recto: "Que signifie *technè* et pourquoi est-ce important pour l'art ?", verso: "Savoir-faire. Dans l'Antiquité, art et technique ne se distinguent pas : l'artiste est d'abord un artisan. La distinction art/technique est tardive." },
    { recto: "Qu'est-ce que la mimésis ?", verso: "L'imitation. Conception classique (Aristote) de l'art comme représentation du réel. Mais imiter, c'est aussi choisir et transformer." },
    { recto: "Pourquoi Platon se méfie-t-il de l'art ?", verso: "L'art imite le sensible, qui est déjà copie des Idées : c'est une copie de copie qui éloigne du vrai et flatte les passions." },
    { recto: "Qu'est-ce qu'un ready-made ? Qui ? Quelle leçon ?", verso: "Un objet ordinaire promu œuvre d'art (Duchamp, *Fontaine*, 1917). Leçon : ce n'est ni la beauté ni le savoir-faire qui fait l'œuvre, mais le regard et l'intention." },
    { recto: "Les 3 traits du jugement de goût chez Kant ?", verso: "1) subjectif (un plaisir), 2) universel (prétend à l'accord de tous), 3) désintéressé (sans désir de posséder)." },
    { recto: "Le génie selon Kant ?", verso: "Le talent par lequel la nature « donne ses règles à l'art » : l'artiste crée des règles nouvelles au lieu d'imiter." },
    { recto: "L'aura selon Walter Benjamin ?", verso: "L'unicité de l'œuvre, son « ici et maintenant ». La reproduction technique de masse la fait disparaître." },
    { recto: "L'industrie culturelle (Adorno) ?", verso: "La production d'œuvres comme marchandises standardisées, qui distraient au lieu de faire penser." },
  ],
  quiz: [
    { question: "Quel philosophe compare l'art à une « copie de copie » ?", choix: ["Aristote", "Platon", "Kant", "Hegel"], bonne: 1, explication: "Platon (La République) : le sensible copie les Idées, et l'art copie le sensible." },
    { question: "Le jugement de goût kantien est dit « désintéressé » parce que…", choix: ["il ne plaît à personne", "il ne dépend d'aucun désir de posséder l'objet", "il est purement rationnel", "il rapporte de l'argent"], bonne: 1, explication: "Le plaisir esthétique ne vise pas l'utilité ni la possession : on contemple, on ne convoite pas." },
    { question: "La *Fontaine* de Duchamp (1917) est célèbre car…", choix: ["c'est une sculpture en marbre", "un objet manufacturé ordinaire est exposé comme œuvre", "elle imite parfaitement la nature", "Kant l'a commentée"], bonne: 1, explication: "C'est le ready-made fondateur : l'idée et le geste priment sur la fabrication." },
    { question: "Pour Aristote, la tragédie produit une…", choix: ["aura", "mimésis sans plaisir", "catharsis", "novlangue"], bonne: 2, explication: "La catharsis : purification/évacuation des passions (terreur et pitié) par leur représentation." },
    { question: "Qui parle de la perte de l'« aura » de l'œuvre à l'ère de la reproduction technique ?", choix: ["Adorno", "Walter Benjamin", "Bourdieu", "Malraux"], bonne: 1, explication: "Walter Benjamin, dans son essai sur la reproductibilité technique." },
    { question: "Selon Hegel, l'œuvre d'art est…", choix: ["une illusion trompeuse", "la manifestation sensible de l'Idée", "un pur objet utile", "une donnée de la nature"], bonne: 1, explication: "L'art donne au vrai (l'Idée) une forme sensible : il dévoile, il n'éloigne pas du vrai." },
  ],
  liens: ["technique", "verite", "nature"],
};
