import type { Notion } from "../types";

export const technique: Notion = {
  id: "technique",
  titre: "La technique",
  sousTitre: "Libération de l'homme ou nouvelle servitude ?",
  couleur: "#0e7490",
  accroche:
    "Des intelligences artificielles écrivent, dessinent, conduisent. La technique a toujours augmenté la puissance humaine — mais à mesure qu'elle peut tout faire, une inquiétude grandit : qui maîtrise qui ? La technique nous libère-t-elle, ou finit-elle par nous gouverner ?",
  definitions: [
    { terme: "Technique", def: "Ensemble des procédés et savoir-faire permettant de produire un résultat et de transformer la nature. Au sens large : un savoir-faire efficace." },
    { terme: "Technè (grec)", def: "Art, savoir-faire. La technique n'est pas que la machine : c'est la maîtrise d'un procédé (cuisiner, soigner, bâtir)." },
    { terme: "Homo faber", def: "L'« homme qui fabrique » : pour Bergson, l'intelligence est d'abord la faculté de fabriquer des outils (et des outils à faire des outils)." },
    { terme: "Arraisonnement (Gestell)", def: "Chez Heidegger, le mode propre à la technique moderne : tout traiter comme un « fonds » disponible, une ressource à exploiter." },
    { terme: "Principe responsabilité", def: "Chez Jonas : la puissance technique crée un devoir nouveau envers la nature et les générations futures." },
  ],
  cours: [
    {
      titre: "1. La technique, propre de l'homme",
      paragraphes: [
        "Le mythe de **Prométhée** le dit : l'homme naît nu, sans griffes ni fourrure, le plus démuni des animaux. Pour le sauver, Prométhée vole le *feu* (la technique) aux dieux. La technique *compense* une nature déficiente.",
        "**Bergson** nomme l'homme *homo faber* : avant d'être « sage » (*sapiens*), il est *fabricant*. L'intelligence est d'abord la faculté de fabriquer des outils. La technique n'est pas un luxe : c'est notre manière de survivre.",
      ],
    },
    {
      titre: "2. Technique et science",
      paragraphes: [
        "La technique est un *savoir-faire* (la *technè*), longtemps antérieur à la science (on savait faire du pain bien avant la chimie). Mais la technique *moderne* devient une **application de la science** : la *technologie*.",
        "Science et technique se nourrissent l'une l'autre : la science explique, la technique transforme — et fournit à la science ses instruments (microscope, télescope).",
      ],
    },
    {
      titre: "3. Maîtriser la nature (Descartes)",
      paragraphes: [
        "**Descartes** assigne à la science et à la technique un but pratique : nous rendre « comme *maîtres et possesseurs de la nature* », notamment pour la médecine et le bien-être.",
        "C'est l'idéal du **progrès** : la technique libère l'homme de la faim, de la maladie, de la fatigue. Vision optimiste qui a porté la modernité.",
      ],
    },
    {
      titre: "4. Les critiques : Rousseau, Heidegger",
      paragraphes: [
        "**Rousseau** doute que le progrès technique soit un progrès moral : les arts et les sciences ont aussi corrompu les mœurs et créé de nouvelles dépendances.",
        "**Heidegger** va plus loin : la technique moderne n'est pas un simple outil neutre, c'est une *manière de voir le monde* (l'*arraisonnement*) qui réduit tout — la nature, et même l'homme — à un *fonds* disponible, une ressource à exploiter. Le danger n'est pas telle machine, mais cette façon de tout rendre calculable.",
      ],
    },
    {
      titre: "5. Le devoir de responsabilité (Jonas)",
      paragraphes: [
        "La puissance technique change l'éthique. **Hans Jonas** formule un *principe responsabilité* : « agis de façon que les effets de ton action soient compatibles avec la permanence d'une vie authentiquement humaine sur terre ».",
        "Désormais nos actes engagent la planète et les générations futures. « Science sans conscience n'est que ruine de l'âme » (Rabelais) : la technique réclame une sagesse à la hauteur de sa puissance.",
      ],
    },
  ],
  theses: [
    { auteur: "Bergson", oeuvre: "L'Évolution créatrice", idee: "L'homme est homo faber : l'intelligence est d'abord la faculté de fabriquer des outils ; la technique le définit." },
    { auteur: "Descartes", oeuvre: "Discours de la méthode", idee: "La science et la technique doivent nous rendre « comme maîtres et possesseurs de la nature » (idéal de progrès)." },
    { auteur: "Rousseau", oeuvre: "Discours sur les sciences et les arts", idee: "Le progrès technique n'est pas un progrès moral : il peut corrompre les mœurs et créer des dépendances." },
    { auteur: "Heidegger", oeuvre: "La Question de la technique", idee: "La technique moderne « arraisonne » le réel : elle le réduit à un fonds exploitable ; elle n'est pas neutre." },
    { auteur: "Hans Jonas", oeuvre: "Le Principe responsabilité", idee: "La puissance technique crée un devoir envers la nature et les générations futures." },
  ],
  citations: [
    { texte: "[Nous rendre] comme maîtres et possesseurs de la nature.", auteur: "Descartes", oeuvre: "Discours de la méthode", usage: "Pour la thèse optimiste du progrès. Décoder le « comme » : Descartes ne dit pas que nous sommes des dieux, mais que la technique nous donne un pouvoir d'agir sur la nature." },
    { texte: "L'intelligence… est la faculté de fabriquer des objets artificiels, en particulier des outils à faire des outils.", auteur: "Bergson", oeuvre: "L'Évolution créatrice", usage: "Pour montrer que la technique est constitutive de l'homme (homo faber), pas un simple ajout." },
    { texte: "Science sans conscience n'est que ruine de l'âme.", auteur: "Rabelais", oeuvre: "Pantagruel", usage: "Pour la III sur la responsabilité : le savoir et la puissance technique doivent être guidés par une exigence morale." },
  ],
  paradoxes: [
    "La technique libère-t-elle l'homme, ou crée-t-elle de nouvelles servitudes ?",
    "Faut-il maîtriser la nature (Descartes) ou la respecter et s'en sentir responsable (Jonas) ?",
    "Le progrès technique est-il aussi un progrès moral ?",
    "La technique est-elle un outil neutre, ou porte-t-elle une certaine vision du monde (Heidegger) ?",
  ],
  sujets: [
    {
      intitule: "La technique nous libère-t-elle ?",
      analyse:
        "La doxa du progrès : oui, la technique nous affranchit des contraintes naturelles. Le grain de sable : la dépendance technologique, l'aliénation, les risques écologiques.",
      problematique:
        "La technique, en augmentant notre puissance d'agir, nous rend-elle plus libres, ou crée-t-elle des dépendances et des menaces qui nous asservissent autrement ?",
      plan: [
        { partie: "I. Thèse", idee: "La technique libère l'homme des contraintes de la nature.", auteurs: "Prométhée, Descartes (maîtres et possesseurs), Bergson", exemple: "La médecine, les transports, les machines nous affranchissent de la faim et de la fatigue." },
        { partie: "II. Antithèse", idee: "Mais elle crée de nouvelles servitudes : dépendance, aliénation, risques.", auteurs: "Heidegger (arraisonnement), Rousseau, Marx (machinisme)", exemple: "La dépendance au smartphone ; des emplois supprimés ; la crise écologique." },
        { partie: "III. Dépassement", idee: "La technique n'est ni libératrice ni asservissante en soi : tout dépend de l'usage et de la responsabilité.", auteurs: "Jonas (principe responsabilité), Rabelais", exemple: "La même énergie nucléaire soigne (radiothérapie) ou détruit (bombe)." },
      ],
      astuce:
        "Éviter le piège « la technique est neutre, seul l'usage compte » comme conclusion plate : nuancer avec Heidegger (la technique oriente déjà notre rapport au monde). La III ajoute la responsabilité.",
    },
    {
      intitule: "Sommes-nous responsables de la nature ?",
      analyse:
        "Pont technique/nature. La doxa moderne : la nature est à exploiter (Descartes). Le grain de sable : notre puissance technique menace la nature, donc nous oblige.",
      problematique:
        "La nature n'est-elle qu'un réservoir de ressources à notre disposition, ou notre puissance technique fait-elle naître à son égard une responsabilité morale ?",
      plan: [
        { partie: "I. Thèse", idee: "La nature semble un moyen au service de l'homme, qui doit la maîtriser.", auteurs: "Descartes (maîtres et possesseurs), Bacon", exemple: "Agriculture, barrages, exploitation des ressources." },
        { partie: "II. Antithèse", idee: "Mais cette maîtrise menace la nature — et l'homme avec elle.", auteurs: "Heidegger (arraisonnement), écologie", exemple: "Réchauffement climatique, extinction d'espèces, épuisement des ressources." },
        { partie: "III. Dépassement", idee: "La puissance technique fonde un devoir nouveau : la responsabilité envers la nature et l'avenir.", auteurs: "Jonas (principe responsabilité)", exemple: "Préserver une planète habitable pour les générations futures." },
      ],
      astuce:
        "Jonas est l'auteur décisif en III : il fait de la puissance même la source du devoir (« pouvoir, donc devoir »). Renverse l'idéal cartésien sans le rejeter en bloc.",
    },
    {
      intitule: "Le progrès technique est-il un progrès ?",
      analyse:
        "Joue sur deux sens de « progrès » : avancée technique (puissance) et progrès humain/moral (mieux vivre, être meilleur). Le sujet demande si l'un entraîne l'autre.",
      problematique:
        "L'augmentation de notre puissance technique constitue-t-elle un véritable progrès pour l'humanité, ou peut-elle s'accompagner d'une régression morale et humaine ?",
      plan: [
        { partie: "I. Thèse", idee: "Le progrès technique améliore réellement la condition humaine.", auteurs: "Descartes, Condorcet (idée de progrès)", exemple: "Espérance de vie, confort, accès au savoir." },
        { partie: "II. Antithèse", idee: "Mais il n'entraîne pas le progrès moral, et peut servir le pire.", auteurs: "Rousseau, Rabelais (« science sans conscience »)", exemple: "Armes de destruction massive, surveillance de masse, manipulation par les algorithmes." },
        { partie: "III. Dépassement", idee: "Distinguer progrès technique (des moyens) et progrès moral (des fins) : la technique appelle une sagesse.", auteurs: "Jonas, Bergson (« supplément d'âme »)", exemple: "La puissance grandit ; reste à grandir en sagesse pour la guider." },
      ],
      astuce:
        "La distinction moyens / fins (déjà vue pour le bonheur et la raison) structure la III : la technique perfectionne les moyens, pas forcément les fins. Bergson appelle ce manque un « supplément d'âme ».",
    },
  ],
  flashcards: [
    { recto: "Que symbolise le mythe de Prométhée pour la technique ?", verso: "L'homme naît démuni ; la technique (le feu volé) compense une nature déficiente. La technique est notre moyen de survie." },
    { recto: "Qu'est-ce que l'homo faber (Bergson) ?", verso: "L'« homme qui fabrique » : l'intelligence est d'abord la faculté de faire des outils. La technique définit l'homme." },
    { recto: "Que vise Descartes avec « maîtres et possesseurs de la nature » ?", verso: "L'idéal de progrès : la science et la technique doivent améliorer la vie humaine (médecine, bien-être)." },
    { recto: "L'« arraisonnement » de la technique (Heidegger) ?", verso: "La technique moderne réduit tout (nature, homme) à un « fonds » exploitable. Elle n'est pas un outil neutre mais une vision du monde." },
    { recto: "Le principe responsabilité (Jonas) ?", verso: "Notre puissance technique crée un devoir envers la nature et les générations futures : agir pour préserver une vie humaine durable." },
    { recto: "« Science sans conscience… » : qui et pour dire quoi ?", verso: "Rabelais : « …n'est que ruine de l'âme ». Le savoir et la puissance doivent être guidés par la morale." },
    { recto: "Progrès technique = progrès moral ?", verso: "Non nécessairement : la technique perfectionne les MOYENS, pas les FINS. Elle peut servir le meilleur comme le pire (Rousseau)." },
  ],
  quiz: [
    { question: "« Maîtres et possesseurs de la nature » est de…", choix: ["Bergson", "Descartes", "Heidegger", "Jonas"], bonne: 1, explication: "Descartes, Discours de la méthode : l'idéal du progrès par la science et la technique." },
    { question: "L'homo faber désigne, chez Bergson…", choix: ["l'homme sage", "l'homme qui fabrique des outils", "l'homme religieux", "l'homme politique"], bonne: 1, explication: "L'intelligence est d'abord fabricatrice (faire des outils à faire des outils)." },
    { question: "Pour Heidegger, la technique moderne…", choix: ["est un outil parfaitement neutre", "réduit le réel à un fonds exploitable", "n'existe pas", "imite la nature"], bonne: 1, explication: "L'« arraisonnement » : tout devient ressource calculable et disponible." },
    { question: "Le principe responsabilité est formulé par…", choix: ["Rousseau", "Hans Jonas", "Bacon", "Marx"], bonne: 1, explication: "Jonas : la puissance technique impose un devoir envers la nature et l'avenir." },
    { question: "« Science sans conscience n'est que ruine de l'âme » est de…", choix: ["Descartes", "Rabelais", "Jonas", "Heidegger"], bonne: 1, explication: "Rabelais, Pantagruel : le savoir doit s'accompagner de morale." },
  ],
  liens: ["nature", "science", "travail"],
};
