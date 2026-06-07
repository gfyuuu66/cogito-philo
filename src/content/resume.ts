import type { NotionId } from "./types";

/**
 * Contenu de la page « Résumé » : tout le programme réexpliqué en mots simples.
 * Objectif : comprendre vite, retenir les thèses clés pour les dissertations,
 * et apprendre à repérer les notions (même quand elles ne sont pas écrites dans
 * le sujet). La mise en forme légère **gras** / *italique* est supportée.
 */

export interface ResumeThese {
  auteur: string;
  /** L'idée de l'auteur, reformulée avec des mots simples. */
  idee: string;
}

export interface ResumeNotion {
  id: NotionId;
  /** L'essentiel en une seule phrase. */
  essence: string;
  /** Explication simple, vocabulaire facile. */
  simple: string;
  /** Le débat / la tension de la notion (ce qui fait problème), en clair. */
  tension: string;
  /** 2-3 thèses incontournables, à ressortir en dissertation. */
  retenir: ResumeThese[];
  /** Mots-déclencheurs : si tu les vois dans un sujet, pense à cette notion. */
  motsCles: string[];
  /** Un exemple concret du quotidien. */
  exemple: string;
}

/** Les 17 notions, dans l'ordre du programme, en version simple. */
export const RESUME: ResumeNotion[] = [
  {
    id: "conscience",
    essence: "Se rendre compte qu'on existe, et pouvoir se regarder soi-même comme dans un miroir intérieur.",
    simple:
      "Avoir conscience, c'est être **présent** à ce qu'on vit, mais surtout pouvoir **réfléchir sur soi** (« je sais que je pense »). C'est ce qui fait de toi un *« je »*, responsable de ses actes. Mais ce miroir n'est pas parfait : on se trompe souvent sur soi-même.",
    tension:
      "La conscience me donne-t-elle un accès **vrai** à moi-même, ou me cache-t-elle une partie de moi (mes vraies motivations) ?",
    retenir: [
      { auteur: "Descartes", idee: "« Je pense, donc je suis » : même en doutant de tout, je suis sûr d'au moins une chose, que je pense." },
      { auteur: "Spinoza", idee: "On se croit libre parce qu'on voit ce qu'on fait, sans voir ce qui nous pousse à le faire." },
      { auteur: "Hegel", idee: "On ne devient vraiment soi-même que sous le regard des autres (être reconnu)." },
    ],
    motsCles: ["je / moi / soi-même", "se connaître", "sujet", "responsable", "regard d'autrui"],
    exemple: "Tu vis ta journée et, en même temps, tu te juges : « j'ai mal réagi ». Ce dédoublement, c'est la conscience.",
  },
  {
    id: "inconscient",
    essence: "Une partie de l'esprit travaille dans notre dos : des désirs et souvenirs cachés qui agissent sans qu'on le sache.",
    simple:
      "Pour **Freud**, on n'est pas maître chez soi : des désirs *refoulés* (repoussés parce qu'ils gênent) continuent d'agir en secret. Ils ressortent déguisés dans les **rêves**, les **lapsus**, les oublis. Rien n'est dû au hasard dans l'esprit.",
    tension:
      "Si l'inconscient me pousse à mon insu, suis-je encore **libre** et **responsable** ? Ou est-ce une excuse facile ?",
    retenir: [
      { auteur: "Freud", idee: "« Le moi n'est pas maître dans sa propre maison » : l'inconscient gouverne une grande part de nous." },
      { auteur: "Freud", idee: "Le rêve est la « voie royale » pour accéder à l'inconscient." },
      { auteur: "Sartre", idee: "L'inconscient peut être une excuse (la « mauvaise foi ») : on fait semblant d'ignorer ce qu'on sait." },
    ],
    motsCles: ["désir caché", "rêve / lapsus", "malgré moi", "maître de soi", "responsable de ce qui m'échappe"],
    exemple: "Tu « oublies » un rendez-vous que tu redoutais : ce n'est peut-être pas un hasard.",
  },
  {
    id: "liberte",
    essence: "Être libre, ce n'est pas seulement faire ce qu'on veut : c'est être le vrai auteur de ses choix.",
    simple:
      "Il y a la **liberté d'action** (faire ce qu'on veut sans obstacle) et la **liberté de vouloir** (choisir vraiment par soi-même). On peut faire ce qu'on veut tout en étant l'esclave de ses envies. La vraie liberté, c'est l'*autonomie* : se donner sa propre règle.",
    tension:
      "Sommes-nous vraiment libres, ou tout est-il déjà **déterminé** d'avance (cerveau, passé, société) ?",
    retenir: [
      { auteur: "Sartre", idee: "« L'homme est condamné à être libre » : rien n'est écrit, on se fait par ses choix, sans excuse." },
      { auteur: "Kant", idee: "Si je sens que je « dois », c'est que je « peux » : le devoir prouve la liberté." },
      { auteur: "Rousseau", idee: "Obéir à une loi qu'on s'est donnée soi-même, c'est encore être libre (autonomie)." },
    ],
    motsCles: ["choix", "déterminisme / destin", "faire ce qu'on veut", "contrainte", "responsable"],
    exemple: "Une personne accro fait « ce qu'elle veut » (fumer) tout en étant prisonnière de son envie : faire ce qu'on veut ≠ être libre.",
  },
  {
    id: "devoir",
    essence: "La petite voix qui dit « tu dois bien agir », même quand mentir ou tricher serait plus avantageux.",
    simple:
      "Le devoir est une **obligation morale** qui vient de l'intérieur (≠ une contrainte qu'on subit du dehors). Pour **Kant**, une action n'a de valeur que si on la fait par *respect du bien*, pas par intérêt. Règle d'or : agir seulement comme on voudrait que **tout le monde** agisse.",
    tension:
      "Faut-il juger une action sur l'**intention** (vouloir le bien) ou sur ses **conséquences** ? Et le devoir s'oppose-t-il au bonheur ?",
    retenir: [
      { auteur: "Kant", idee: "Ne jamais traiter une personne comme un simple objet : elle a une dignité, pas un prix." },
      { auteur: "Kant", idee: "« Agis comme si ta règle devait devenir une loi pour tous » (l'impératif catégorique)." },
      { auteur: "Mill (utilitarisme)", idee: "Une action est bonne si elle produit le plus de bonheur pour le plus de gens (on juge les conséquences)." },
    ],
    motsCles: ["obligation / il faut", "bien et mal", "respect d'autrui", "intérêt vs morale", "responsabilité"],
    exemple: "Rendre un portefeuille plein d'argent alors que personne ne te voit : agir par devoir, pas par intérêt.",
  },
  {
    id: "bonheur",
    essence: "Une satisfaction profonde et durable de toute la vie — pas juste un plaisir qui passe.",
    simple:
      "Tout le monde cherche le bonheur, mais personne ne sait dire exactement ce que c'est. Les sages anciens conseillent : **trie tes désirs** (Épicure), occupe-toi de **ce qui dépend de toi** et accepte le reste (Stoïciens). Le plaisir est court ; le bonheur vise toute l'existence.",
    tension:
      "Le bonheur dépend-il de **nous** (sagesse) ou de la **chance** ? Et peut-on être heureux sans être juste, ni libre ?",
    retenir: [
      { auteur: "Épictète (stoïciens)", idee: "Distingue ce qui dépend de toi (tes jugements) de ce qui n'en dépend pas ; ne veux que le premier." },
      { auteur: "Épicure", idee: "Le bonheur, c'est le plaisir bien compris : trier ses désirs, viser la tranquillité, fuir l'excès." },
      { auteur: "Kant", idee: "La morale ne te rend pas heureux, mais « digne » de l'être : le devoir passe avant." },
    ],
    motsCles: ["plaisir / désir", "satisfaction", "sens de la vie", "sagesse", "chance"],
    exemple: "Faire défiler des vidéos sans fin pour se sentir mieux et finir vidé : c'est du plaisir, pas du bonheur.",
  },
  {
    id: "raison",
    essence: "Notre capacité à comprendre, à raisonner et à distinguer le vrai du faux.",
    simple:
      "La raison cherche des **explications** : « rien n'arrive sans cause ». C'est le moteur de la science. Mais elle a des **limites** : elle ne peut pas tout prouver (la foi, l'amour, l'absolu lui échappent). Et être *logique* n'est pas toujours être *sage*.",
    tension:
      "La raison peut-elle **tout** expliquer, ou y a-t-il des choses qui la dépassent ? Le rationnel est-il toujours raisonnable ?",
    retenir: [
      { auteur: "Leibniz", idee: "« Rien n'est sans raison » : tout a une cause qui l'explique." },
      { auteur: "Pascal", idee: "« Le cœur a ses raisons que la raison ne connaît point » : certaines vérités se sentent plus qu'elles ne se prouvent." },
      { auteur: "Kant", idee: "La raison se trompe quand elle veut connaître l'absolu (Dieu, l'univers entier)." },
    ],
    motsCles: ["expliquer / comprendre", "logique", "preuve", "cause", "sagesse vs calcul"],
    exemple: "On peut « expliquer » la chimie de l'amour sans « comprendre » ce qu'il signifie pour celui qui aime.",
  },
  {
    id: "verite",
    essence: "Une chose est vraie quand ce qu'on en dit correspond à la réalité — pas quand on en est juste convaincu.",
    simple:
      "La vérité concerne ce qu'on **dit**, pas les choses elles-mêmes (une pierre n'est ni vraie ni fausse). Être *certain* ne suffit pas : on peut être sûr et se tromper. Et le « tout est relatif » se détruit lui-même : si c'était vrai, cette phrase aussi serait relative.",
    tension:
      "La vérité est-elle la **même pour tous**, ou « à chacun la sienne » ? Faut-il toujours la dire ?",
    retenir: [
      { auteur: "Aristote", idee: "Est vrai le jugement qui dit « ce qui est, qu'il est » : la vérité, c'est l'accord avec le réel." },
      { auteur: "Descartes", idee: "N'accepter pour vrai que ce qui est évident, clair et distinct." },
      { auteur: "Nietzsche", idee: "Méfiance : certaines « vérités » sont des illusions utiles qu'on a oubliées (perspectivisme)." },
    ],
    motsCles: ["vrai / faux", "certitude", "réalité", "relatif / universel", "preuve / croire"],
    exemple: "Tout le monde était « certain » que le Soleil tournait autour de la Terre : certitude n'est pas vérité.",
  },
  {
    id: "science",
    essence: "Une méthode pour établir des connaissances sûres… mais toujours révisables.",
    simple:
      "La science ne se contente pas d'observer : elle construit des **hypothèses** et les **teste**. Sa force n'est pas d'avoir une vérité définitive, mais de se **corriger** sans cesse. Pour Popper, une idée est scientifique si elle peut être *réfutée* (testée et éventuellement contredite).",
    tension:
      "La science nous donne-t-elle la vérité **définitive**, ou seulement des vérités provisoires ? L'observation suffit-elle ?",
    retenir: [
      { auteur: "Popper", idee: "Une théorie est scientifique si elle est « falsifiable » : on peut imaginer un test qui la contredirait." },
      { auteur: "Hume", idee: "Aucune observation ne prouve une loi pour toujours : un seul « cygne noir » suffit à la contredire." },
      { auteur: "Bachelard", idee: "« Rien n'est donné, tout est construit » : un fait scientifique se construit, il ne se cueille pas." },
    ],
    motsCles: ["preuve / expérience", "théorie / hypothèse", "objectivité", "progrès du savoir", "vérité"],
    exemple: "La physique de Newton, « vraie » pendant des siècles, est dépassée par Einstein : la science se corrige.",
  },
  {
    id: "technique",
    essence: "Tout ce que l'homme fabrique et invente pour agir sur le monde (outils, machines, savoir-faire).",
    simple:
      "Né sans griffes ni fourrure, l'homme survit grâce à la technique (mythe de **Prométhée**). Elle nous **libère** de la faim, de la fatigue, de la maladie. Mais elle crée aussi des **dépendances** et des dangers : tout dépend de l'*usage* qu'on en fait.",
    tension:
      "La technique nous **libère**-t-elle ou nous **asservit**-elle ? Le progrès technique est-il un progrès moral ?",
    retenir: [
      { auteur: "Descartes", idee: "La science et la technique doivent nous rendre « comme maîtres et possesseurs de la nature »." },
      { auteur: "Heidegger", idee: "La technique moderne n'est pas neutre : elle nous fait voir le monde comme un simple stock à exploiter." },
      { auteur: "Jonas", idee: "Plus on est puissant, plus on est responsable : devoir envers la nature et les générations futures." },
    ],
    motsCles: ["outil / machine", "progrès", "maîtriser la nature", "dépendance", "IA / robots"],
    exemple: "La même énergie nucléaire peut soigner (radiothérapie) ou détruire (la bombe) : c'est l'usage qui compte.",
  },
  {
    id: "travail",
    essence: "L'effort par lequel on transforme la nature pour vivre — corvée subie, ou façon de se réaliser ?",
    simple:
      "Le mot vient d'un instrument de **torture** : le travail est d'abord une peine. Mais **Marx** montre qu'il est aussi le propre de l'homme : on conçoit l'œuvre *dans sa tête* avant de la faire. Le problème, ce n'est pas le travail, c'est le travail *aliéné* (vidé de sens).",
    tension:
      "Le travail est-il une **malédiction** subie, ou ce qui nous rend **humains** ? Travailler, est-ce perdre sa liberté ?",
    retenir: [
      { auteur: "Marx", idee: "L'architecte (qui pense son œuvre) se distingue de l'abeille (qui agit par instinct) : le travail humain est conscient." },
      { auteur: "Marx", idee: "L'aliénation vient des conditions du travail, pas du travail lui-même : il faut le libérer, pas le supprimer." },
      { auteur: "Hegel", idee: "En transformant le monde par le travail, on se transforme et on se forme soi-même." },
    ],
    motsCles: ["effort / peine", "emploi / métier", "se réaliser", "exploitation / aliénation", "liberté"],
    exemple: "Un artisan fier de son meuble vs un ouvrier réduit à un geste répété : même travail, sens opposés.",
  },
  {
    id: "art",
    essence: "Créer des œuvres faites pour être regardées et ressenties, pas pour être utiles.",
    simple:
      "Au départ, art et technique, c'est pareil (un *savoir-faire*). Peu à peu, on sépare l'**objet utile** (une chaise) de l'**œuvre** (qui ne « sert à rien » mais nous touche). Avec **Duchamp**, ce n'est plus la beauté ni l'habileté qui font l'œuvre, mais le *regard* et l'*intention*.",
    tension:
      "Qu'est-ce qui fait qu'un objet est une **œuvre d'art** ? L'art nous éloigne-t-il du réel, ou nous le fait-il mieux voir ?",
    retenir: [
      { auteur: "Kant", idee: "« Est beau ce qui plaît universellement et sans concept » : un plaisir désintéressé, qui prétend valoir pour tous." },
      { auteur: "Platon", idee: "Méfiance : l'art n'est qu'une copie de copie, qui nous éloigne du vrai." },
      { auteur: "Hegel", idee: "Au contraire, l'art rend visible une vérité : il montre l'esprit sous une forme sensible." },
    ],
    motsCles: ["beau / beauté", "œuvre / créer", "imitation", "goût", "génie"],
    exemple: "L'urinoir de Duchamp exposé en 1917 : un objet banal devient une œuvre par le seul geste de l'artiste.",
  },
  {
    id: "langage",
    essence: "Utiliser des signes (des mots) pour penser, communiquer… et parfois manipuler.",
    simple:
      "Le langage ne sert pas qu'à **communiquer** : on **pense** avec les mots, on **agit** avec eux (« je promets » fait la promesse), et on peut **tromper** avec eux. Réduire le vocabulaire (la « novlangue » d'Orwell), c'est réduire ce qu'on peut penser.",
    tension:
      "Le langage exprime-t-il **fidèlement** la pensée, ou la **trahit**-il ? Peut-on penser sans mots ?",
    retenir: [
      { auteur: "Hegel", idee: "« C'est dans les mots que nous pensons » : sans langage, pas de pensée claire." },
      { auteur: "Bergson", idee: "Le mot, toujours général, écrase ce que ton expérience a d'unique." },
      { auteur: "Austin", idee: "Certains mots font ce qu'ils disent : « je promets », « je vous déclare mariés » (les performatifs)." },
    ],
    motsCles: ["mots / parole", "communiquer", "penser", "convaincre / manipuler", "vérité"],
    exemple: "Un mot-dièse peut détruire une réputation en une nuit : les mots agissent, ils ne décrivent pas seulement.",
  },
  {
    id: "nature",
    essence: "Un mot à trois sens : l'univers, ce que l'homme n'a pas transformé, ou l'essence d'une chose.",
    simple:
      "Attention au piège : « **naturel** » ne veut pas dire « **bien** ». La nature est aussi cruelle (maladies, loi du plus fort). La **culture**, c'est tout ce que l'homme ajoute (langues, lois, techniques). Grande question : l'homme a-t-il une « nature » fixe, ou se fait-il librement ?",
    tension:
      "Y a-t-il une **nature humaine**, ou l'homme se construit-il par la culture et la liberté ? Le « naturel » est-il un modèle ?",
    retenir: [
      { auteur: "Sartre", idee: "« Il n'y a pas de nature humaine » : l'homme se fait par ses choix (l'existence précède l'essence)." },
      { auteur: "Rousseau", idee: "L'homme se distingue par la « perfectibilité » : il peut se transformer sans fin." },
      { auteur: "Mill", idee: "« Suivre la nature » est absurde : la morale corrige la nature, elle ne l'imite pas (sophisme naturaliste)." },
    ],
    motsCles: ["naturel / inné", "culture / acquis", "essence", "normal", "humain vs animal"],
    exemple: "Soigner les plus faibles va « contre » la sélection naturelle — et c'est justement ce qui est moral.",
  },
  {
    id: "temps",
    essence: "Le temps des horloges est le même pour tous, mais chacun le vit différemment.",
    simple:
      "Le temps est une énigme : le **passé n'est plus**, le **futur pas encore**, et le **présent** file aussitôt (Augustin). **Bergson** distingue le temps *mesuré* (les horloges) et le temps *vécu* (la « durée »). Le temps détruit, mais c'est aussi lui qui donne sens et urgence à la vie.",
    tension:
      "Le temps existe-t-il **en dehors de nous**, ou seulement dans la conscience ? Est-il notre ennemi ?",
    retenir: [
      { auteur: "Augustin", idee: "Le temps est une énigme : il n'existe vraiment que dans l'âme (mémoire, attention, attente)." },
      { auteur: "Bergson", idee: "Distingue le temps des horloges (mesuré) et la « durée » réellement vécue." },
      { auteur: "Heidegger", idee: "C'est parce que la vie est finie (« être-pour-la-mort ») qu'elle a un sens et une intensité." },
    ],
    motsCles: ["passé / présent / futur", "durée", "mémoire", "mort / finitude", "vivre l'instant"],
    exemple: "Une heure d'attente paraît interminable, une soirée entre amis file : même temps mesuré, durée vécue opposée.",
  },
  {
    id: "etat",
    essence: "L'autorité qui fait les lois et a le droit d'user de la force pour faire régner l'ordre.",
    simple:
      "Sans État, ce serait la « **guerre de tous contre tous** » (Hobbes) : on accepte des lois en échange de la **sécurité**. Pour **Rousseau**, une loi est juste si elle vient du peuple (volonté générale) — alors obéir, c'est rester libre. Mais une loi peut être *légale* sans être *légitime* (juste).",
    tension:
      "L'État **protège**-t-il la liberté ou la **menace**-t-il ? Doit-on toujours obéir, ou parfois désobéir ?",
    retenir: [
      { auteur: "Hobbes", idee: "Sans autorité commune, « l'homme est un loup pour l'homme » : il faut un État fort." },
      { auteur: "Rousseau", idee: "La loi légitime exprime la « volonté générale » : on n'obéit alors qu'à soi-même." },
      { auteur: "Arendt", idee: "La « banalité du mal » : obéir sans réfléchir peut rendre complice du pire." },
    ],
    motsCles: ["loi / pouvoir", "obéir / désobéir", "ordre / sécurité", "légal vs légitime", "liberté"],
    exemple: "Rosa Parks enfreint une loi injuste pour appeler à une loi plus juste : c'est la désobéissance civile.",
  },
  {
    id: "justice",
    essence: "Rendre à chacun son dû — mais est-ce l'égalité stricte, le mérite, ou le besoin ?",
    simple:
      "La justice, c'est à la fois une **vertu**, des **lois/tribunaux**, et un **idéal** (l'équitable). Traiter tout le monde pareil n'est pas toujours juste : l'**équité**, c'est traiter différemment des situations différentes. Et il faut se méfier que « le plus fort » se fasse passer pour « le juste ».",
    tension:
      "Le juste se réduit-il à ce qui est **légal** ? La justice, est-ce l'**égalité** ou l'**équité** ?",
    retenir: [
      { auteur: "Aristote", idee: "La justice distributive est proportionnelle (selon le mérite), pas une égalité stricte ; l'équité corrige la loi." },
      { auteur: "Rawls", idee: "Choisis les règles sans savoir ta place future (« voile d'ignorance ») : tu obtiens des règles équitables." },
      { auteur: "Pascal", idee: "« La justice sans la force est impuissante ; la force sans la justice est tyrannique » : il faut unir les deux." },
    ],
    motsCles: ["égalité / équité", "loi / droit", "mérite", "légal vs juste", "le plus fort"],
    exemple: "Aménager un examen pour un élève en situation de handicap n'est pas un privilège : c'est de l'équité.",
  },
  {
    id: "religion",
    essence: "Ce qui relie une communauté autour du sacré, par des croyances et des rites.",
    simple:
      "La **foi**, c'est croire sans preuve (≠ *savoir*). Beaucoup de penseurs y voient une **illusion** (Marx : « l'opium du peuple » ; Freud : un besoin de père protecteur). Mais elle répond à des besoins réels (sens, morale, lien social). Idée clé : science et religion ne parlent peut-être pas de la même chose.",
    tension:
      "La religion s'oppose-t-elle à la **raison/science**, ou occupe-t-elle un **autre domaine** ? Est-elle une simple illusion ?",
    retenir: [
      { auteur: "Russell", idee: "Science et religion ont des domaines distincts : le « comment » (les faits) vs le « pourquoi » (le sens)." },
      { auteur: "Marx", idee: "La religion est « l'opium du peuple » : une consolation qui fait accepter la misère." },
      { auteur: "Kant", idee: "On ne peut pas prouver Dieu ; il faut « limiter le savoir pour faire place à la croyance »." },
    ],
    motsCles: ["croire / foi", "Dieu / sacré", "science vs religion", "illusion", "sens de la vie"],
    exemple: "Le procès de Galilée : le conflit naît quand la religion veut faire de la physique (ou l'inverse).",
  },
];

export const RESUME_BY_ID: Record<NotionId, ResumeNotion> = Object.fromEntries(
  RESUME.map((r) => [r.id, r])
) as Record<NotionId, ResumeNotion>;

/* ------------------------------------------------------------------ */
/*  Lire un sujet de dissertation — la méthode en très simple          */
/* ------------------------------------------------------------------ */

export const LIRE_SUJET = {
  principe:
    "Un sujet de philo n'est pas une question d'opinion : c'est un **piège**. Deux réponses semblent vraies en même temps. Ton travail : montrer ce piège, puis le résoudre. Le plan le plus sûr tient en 3 mouvements.",
  plan: [
    {
      moment: "1. « Oui, on dirait que… »",
      simple: "Tu donnes la réponse évidente, celle de tout le monde, et tu la défends avec de bons arguments.",
      exemple: "« Être libre, c'est faire ce qu'on veut. »",
    },
    {
      moment: "2. « Mais attention… »",
      simple: "Tu montres ce qui cloche : un exemple, un cas, une idée qui fait douter de la réponse évidente.",
      exemple: "« Mais celui qui suit toutes ses envies est l'esclave de ses envies. »",
    },
    {
      moment: "3. « En fait, tout dépend de… »",
      simple: "Tu tranches en **distinguant deux sens** d'un mot, ou en **posant une condition**. Surtout pas « un peu des deux ».",
      exemple: "« Être libre, ce n'est pas faire ce qu'on veut, mais vouloir ce qu'on fait (l'autonomie). »",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Repérer les notions cachées dans un sujet                          */
/* ------------------------------------------------------------------ */

export interface Radar {
  /** Les mots que tu peux voir dans un sujet. */
  si: string;
  /** Les notions auxquelles ils renvoient. */
  pense: NotionId[];
}

export const REPERER = {
  intro:
    "Souvent, la notion n'est pas écrite dans le sujet. « Peut-on tout dire ? » ne contient pas le mot « langage » ni « liberté » — pourtant, ce sont eux le cœur du sujet. Voici comment les débusquer.",
  etapes: [
    "**Souligne les mots importants** du sujet : les noms, mais aussi les verbes (« faire », « croire », « devoir »…).",
    "Pour chaque mot, demande-toi : *« de quelle notion ça parle ? »* — même si le mot exact n'est pas dans le programme.",
    "Repère la notion **visible**, puis ajoute au moins une notion **voisine** pour enrichir (voir la carte des liens).",
    "Méfie-toi des petits mots qui changent tout : « **seulement** », « **tout** », « **toujours** », « **ne… que** ».",
  ],
  radars: [
    { si: "« responsable », « coupable », « choisir », « pouvoir »", pense: ["liberte", "devoir"] },
    { si: "« je », « moi », « se connaître », « identité »", pense: ["conscience", "inconscient"] },
    { si: "« vrai », « preuve », « savoir », « croire »", pense: ["verite", "science", "religion"] },
    { si: "« loi », « pouvoir », « obéir », « vivre ensemble »", pense: ["etat", "justice"] },
    { si: "« beau », « créer », « œuvre », « imiter »", pense: ["art"] },
    { si: "« outil », « machine », « progrès », « fabriquer »", pense: ["technique", "travail"] },
    { si: "« naturel », « inné », « normal », « instinct »", pense: ["nature"] },
    { si: "« heureux », « désir », « plaisir », « sens de la vie »", pense: ["bonheur"] },
    { si: "« dire », « parler », « mots », « convaincre »", pense: ["langage"] },
    { si: "« passé », « présent », « mémoire », « mort »", pense: ["temps"] },
  ] as Radar[],
};

/* ------------------------------------------------------------------ */
/*  Décoder un sujet : exemples de notions cachées                     */
/* ------------------------------------------------------------------ */

export interface DecodeExemple {
  sujet: string;
  /** La notion qu'on voit au premier coup d'œil. */
  surface: NotionId;
  /** Les notions cachées qu'il faut aussi mobiliser. */
  cachees: NotionId[];
  pourquoi: string;
}

export const DECODE_EXEMPLES: DecodeExemple[] = [
  {
    sujet: "Peut-on tout dire ?",
    surface: "langage",
    cachees: ["liberte", "devoir", "verite"],
    pourquoi: "« dire » = langage ; mais « peut-on » cache la liberté (en a-t-on le droit ?) et le devoir (faut-il tout dire ?), avec la vérité en fond.",
  },
  {
    sujet: "Le bonheur est-il le but de la vie ?",
    surface: "bonheur",
    cachees: ["devoir", "liberte"],
    pourquoi: "On oppose vite le bonheur au devoir (Kant : être digne d'être heureux) et à la liberté de mener sa vie.",
  },
  {
    sujet: "Suis-je ce que mon passé a fait de moi ?",
    surface: "temps",
    cachees: ["conscience", "inconscient", "liberte"],
    pourquoi: "« mon passé » = temps + inconscient ; « suis-je » = conscience/identité ; « a fait de moi » interroge la liberté.",
  },
  {
    sujet: "Faut-il respecter toutes les opinions ?",
    surface: "verite",
    cachees: ["raison", "devoir", "etat"],
    pourquoi: "« opinion » s'oppose à la vérité/raison ; « faut-il respecter » = devoir + tolérance (vivre ensemble, donc l'État).",
  },
  {
    sujet: "La nature est-elle bien faite ?",
    surface: "nature",
    cachees: ["science", "technique", "religion"],
    pourquoi: "« bien faite » = finalité (Aristote contre Descartes), idée d'un « créateur » (religion) et de notre pouvoir sur elle (technique).",
  },
  {
    sujet: "Travailler, est-ce seulement gagner sa vie ?",
    surface: "travail",
    cachees: ["bonheur", "liberte"],
    pourquoi: "Le « seulement » ouvre vers la réalisation de soi (bonheur) et la liberté : le travail comme valeur, pas que gagne-pain.",
  },
  {
    sujet: "L'art sert-il à quelque chose ?",
    surface: "art",
    cachees: ["technique", "verite", "bonheur"],
    pourquoi: "« servir » oppose l'art à l'utile (technique) ; or l'art peut servir le vrai (Hegel) ou le plaisir et le sens (bonheur).",
  },
  {
    sujet: "Sommes-nous responsables de nos croyances ?",
    surface: "religion",
    cachees: ["liberte", "raison", "devoir"],
    pourquoi: "« responsables » = liberté + devoir ; « croyances » = religion et raison (croire vs savoir).",
  },
];
