import type { Notion } from "../types";

export const temps: Notion = {
  id: "temps",
  titre: "Le temps",
  sousTitre: "Le mesuré, le vécu, et l'irréversible",
  couleur: "#7c3aed",
  accroche:
    "Une heure d'attente paraît interminable ; une soirée entre amis file en un instant. Le temps des horloges est le même pour tous, et pourtant chacun le vit différemment. Cette faille entre le temps qu'on mesure et le temps qu'on éprouve est l'une des plus vieilles énigmes de la philosophie.",
  definitions: [
    { terme: "Temps", def: "Milieu indéfini où se succèdent les événements (passé, présent, futur), irréversiblement." },
    { terme: "Durée", def: "Chez Bergson, le temps vécu, qualitatif et continu de la conscience, irréductible au temps mesuré et « spatialisé » des horloges." },
    { terme: "Instant", def: "Limite ponctuelle entre passé et futur ; le présent « pur », insaisissable car toujours déjà passé." },
    { terme: "Éternité", def: "Soit une durée sans fin, soit (Spinoza) un mode d'être hors du temps. S'oppose au temps comme succession." },
    { terme: "Irréversibilité", def: "Caractère du temps qui ne va que dans un sens : « on ne se baigne jamais deux fois dans le même fleuve » (Héraclite)." },
  ],
  cours: [
    {
      titre: "1. L'énigme du temps (Augustin)",
      paragraphes: [
        "**Saint Augustin** formule le paradoxe : « *Qu'est-ce donc que le temps ? Si personne ne me le demande, je le sais ; mais si on me le demande, je ne le sais plus.* »",
        "Car le **passé** n'est plus, le **futur** n'est pas encore, et le **présent**, s'il durait, ne serait pas du temps. Le temps semble fait de ce qui n'existe pas. Augustin propose : le temps est dans l'âme — une *distension* (mémoire du passé, attention au présent, attente du futur).",
      ],
    },
    {
      titre: "2. Le temps objectif (Aristote)",
      paragraphes: [
        "**Aristote** définit le temps comme « le *nombre du mouvement* selon l'avant et l'après ». Le temps est lié au *changement* : sans mouvement, pas de temps perçu ; et il se *mesure* (jours, heures).",
        "C'est le temps de la *science* et des horloges : objectif, homogène, identique pour tous, divisible en unités égales.",
      ],
    },
    {
      titre: "3. Le temps vécu : la durée (Bergson)",
      paragraphes: [
        "**Bergson** distingue ce temps mesuré du temps réellement *vécu* : la **durée**. Le temps des horloges est *spatialisé* (on l'aligne comme des points sur une ligne), homogène et quantitatif.",
        "La durée, elle, est *qualitative* et *continue* : nos états se fondent et se prolongent les uns dans les autres. Une même heure n'a pas la même « épaisseur » selon qu'on s'ennuie ou qu'on s'émerveille. La science manque ce temps vivant.",
      ],
    },
    {
      titre: "4. Conscience et temps (Husserl)",
      paragraphes: [
        "**Husserl** montre que la conscience est intrinsèquement *temporelle* : le présent vécu n'est jamais un point isolé. Il comporte une **rétention** (le passé immédiat encore présent) et une **protention** (l'anticipation du moment suivant).",
        "Quand j'écoute une mélodie, je retiens la note qui vient de passer et j'anticipe la suivante : sans cela, je n'entendrais que des sons isolés, pas une mélodie. Le temps est tissé par la conscience.",
      ],
    },
    {
      titre: "5. Temps, existence et mort",
      paragraphes: [
        "Le temps est *irréversible* : « on ne se baigne jamais deux fois dans le même fleuve » (Héraclite). De là l'angoisse : tout passe, on vieillit, on meurt. **Sénèque** : « une partie de la vie nous est ôtée pendant que nous vivons ».",
        "Mais **Heidegger** renverse : c'est précisément parce qu'il est *fini*, parce qu'il est « être-pour-la-mort », que l'existence humaine a un *sens* et une urgence. La sagesse (le *carpe diem* d'Horace, le présent stoïcien) consiste à bien habiter le temps qui nous est donné.",
      ],
    },
  ],
  theses: [
    { auteur: "Saint Augustin", oeuvre: "Confessions (livre XI)", idee: "Le temps est une énigme : passé et futur n'existent pas, le présent est insaisissable. Le temps est une « distension de l'âme »." },
    { auteur: "Aristote", oeuvre: "Physique", idee: "Le temps est « le nombre du mouvement selon l'avant et l'après » : objectif, lié au changement, mesurable." },
    { auteur: "Bergson", oeuvre: "Essai sur les données immédiates de la conscience", idee: "Distinguer le temps spatialisé des horloges (quantitatif) et la durée vécue (qualitative, continue)." },
    { auteur: "Husserl", oeuvre: "Leçons pour une phénoménologie de la conscience intime du temps", idee: "La conscience est temporelle : le présent inclut rétention (passé proche) et protention (futur proche)." },
    { auteur: "Heidegger", oeuvre: "Être et Temps", idee: "L'existence humaine est « être-pour-la-mort » : la finitude du temps donne sens et urgence à la vie." },
    { auteur: "Sénèque", oeuvre: "De la brièveté de la vie", idee: "Nous gaspillons le temps comme s'il était infini ; il faut vivre vraiment le présent." },
  ],
  citations: [
    { texte: "Qu'est-ce donc que le temps ? Si personne ne me le demande, je le sais ; mais si on me le demande et que je veuille l'expliquer, je ne le sais plus.", auteur: "Saint Augustin", oeuvre: "Confessions", usage: "Ouverture parfaite : pose l'énigme du temps (familier mais indéfinissable). Décoder : le temps échappe à la prise rationnelle directe." },
    { texte: "On ne se baigne jamais deux fois dans le même fleuve.", auteur: "Héraclite", oeuvre: "(fragments)", usage: "Pour l'irréversibilité et le devenir universel : tout coule, rien ne demeure identique. Bon en accroche ou en I." },
    { texte: "Ce n'est pas que nous ayons peu de temps, c'est que nous en perdons beaucoup.", auteur: "Sénèque", oeuvre: "De la brièveté de la vie", usage: "Pour la III d'un sujet « le temps est-il notre ennemi ? » : le problème n'est pas le temps mais notre usage du temps." },
  ],
  paradoxes: [
    "Le temps existe-t-il objectivement, ou n'est-il que dans la conscience qui le vit ?",
    "Le présent existe-t-il vraiment, alors qu'il est toujours déjà passé ?",
    "Le temps mesuré par les horloges capture-t-il le temps réellement vécu (la durée) ?",
    "Le temps est-il un ennemi destructeur, ou la condition même de l'existence et du sens ?",
  ],
  sujets: [
    {
      intitule: "Le temps n'existe-t-il que dans notre conscience ?",
      analyse:
        "« Ne… que » = exclusivement. La doxa scientifique : le temps est objectif (les astres, les horloges). Le grain de sable : passé et futur n'existent que par la mémoire et l'attente, donc dans l'esprit.",
      problematique:
        "Le temps est-il une réalité objective indépendante de nous, ou n'existe-t-il que pour et par la conscience qui se souvient et anticipe ?",
      plan: [
        { partie: "I. Thèse", idee: "Le temps existe objectivement, indépendamment de nous.", auteurs: "Aristote (nombre du mouvement), science (temps physique)", exemple: "Les astres tournent, les choses vieillissent, qu'on les observe ou non." },
        { partie: "II. Antithèse", idee: "Mais passé et futur n'existent que dans l'âme ; le temps est vécu.", auteurs: "Augustin (distension de l'âme), Bergson (durée), Husserl", exemple: "Le passé n'existe que comme souvenir, le futur comme attente : dans la conscience." },
        { partie: "III. Dépassement", idee: "Il y a deux faces du temps : le temps mesuré (objectif) et le temps vécu (la durée). Le second ne se réduit pas au premier.", auteurs: "Bergson (durée vs temps spatialisé)", exemple: "Une même heure « objective » est vécue très différemment selon l'état d'esprit." },
      ],
      astuce:
        "Ne pas choisir « tout objectif » ou « tout subjectif » : la III distingue deux temps (mesuré / vécu). C'est la distinction bergsonienne durée / temps spatialisé qui fait la profondeur du devoir.",
    },
    {
      intitule: "Faut-il vivre dans le présent ?",
      analyse:
        "Pont temps/bonheur. La doxa du carpe diem : oui, seul le présent existe. Le grain de sable : l'homme est mémoire et projet ; vivre sans passé ni futur, est-ce vivre pleinement — ou comme un animal ?",
      problematique:
        "La sagesse consiste-t-elle à se concentrer sur le seul présent, ou l'existence humaine exige-t-elle d'assumer son passé et de se projeter dans l'avenir ?",
      plan: [
        { partie: "I. Thèse", idee: "Il faut vivre le présent : c'est tout ce dont nous disposons réellement.", auteurs: "Horace (carpe diem), Sénèque, Stoïciens", exemple: "Cesser de ruminer le passé et de s'angoisser de l'avenir." },
        { partie: "II. Antithèse", idee: "Mais l'homme est mémoire et projet : vivre dans le seul présent appauvrit et déresponsabilise.", auteurs: "Augustin, Husserl (rétention/protention), Heidegger (projet)", exemple: "Sans mémoire ni anticipation, pas d'engagement, pas d'identité, pas de promesse tenue." },
        { partie: "III. Dépassement", idee: "Bien vivre le présent, c'est l'habiter pleinement tout en l'inscrivant dans une vie qui a un sens (passé assumé, avenir voulu).", auteurs: "Heidegger, sagesse", exemple: "Savourer l'instant d'un projet qu'on a choisi et qui s'inscrit dans une histoire." },
      ],
      astuce:
        "Distinguer « vivre le présent » (l'habiter intensément) de « vivre dans le seul présent » (sans passé ni futur). La première est sage, la seconde appauvrit. Pont avec le bonheur.",
    },
    {
      intitule: "Le temps est-il notre ennemi ?",
      analyse:
        "La doxa : le temps détruit, vieillit, tue — c'est l'ennemi. Le grain de sable : sans temps, pas de vie, pas de conscience, pas de liberté ni de sens.",
      problematique:
        "Le temps est-il une puissance de destruction qui s'oppose à nous, ou la condition même de notre existence et de notre liberté ?",
      plan: [
        { partie: "I. Thèse", idee: "Le temps détruit tout : il vieillit, efface, conduit à la mort.", auteurs: "Héraclite (tout passe), Sénèque", exemple: "Le vieillissement, l'oubli, la perte des êtres aimés." },
        { partie: "II. Antithèse", idee: "Mais le temps est la condition de la vie, de la conscience, du sens et de la liberté.", auteurs: "Bergson (durée créatrice), Heidegger (la finitude fait le sens)", exemple: "C'est dans le temps qu'on agit, qu'on crée, qu'on aime ; une vie infinie aurait-elle un sens ?" },
        { partie: "III. Dépassement", idee: "Ce n'est pas le temps qui est l'ennemi, mais notre rapport à lui ; la sagesse consiste à en faire bon usage.", auteurs: "Sénèque (« nous perdons beaucoup de temps »), Stoïciens", exemple: "Le même temps est « perdu » par l'un et « accompli » par l'autre." },
      ],
      astuce:
        "Renverser l'objection (II) : ce qui semble une menace (la finitude) est ce qui donne prix et sens à la vie (Heidegger). La III déplace la question du temps vers notre usage du temps.",
    },
  ],
  flashcards: [
    { recto: "L'énigme du temps selon Augustin ?", verso: "« Si on ne me le demande, je le sais ; si on me le demande, je ne sais plus. » Passé/futur n'existent pas, présent insaisissable. Le temps est dans l'âme (distension)." },
    { recto: "Le temps selon Aristote ?", verso: "« Le nombre du mouvement selon l'avant et l'après » : objectif, lié au changement, mesurable (temps des horloges)." },
    { recto: "Qu'est-ce que la durée (Bergson) ?", verso: "Le temps vécu, qualitatif et continu de la conscience, irréductible au temps mesuré et « spatialisé » des horloges." },
    { recto: "Rétention et protention (Husserl) ?", verso: "Le présent vécu inclut le passé immédiat (rétention) et l'anticipation du moment suivant (protention). Ex. : entendre une mélodie." },
    { recto: "« Être-pour-la-mort » (Heidegger) ?", verso: "L'existence humaine est finie ; c'est cette finitude qui donne sens et urgence à la vie." },
    { recto: "L'irréversibilité du temps (Héraclite) ?", verso: "« On ne se baigne jamais deux fois dans le même fleuve » : le temps ne va que dans un sens, tout devient." },
    { recto: "La sagesse face au temps (Sénèque) ?", verso: "« Ce n'est pas que nous ayons peu de temps, c'est que nous en perdons beaucoup. » Le problème est notre usage du temps." },
  ],
  quiz: [
    { question: "« Si on ne me le demande, je le sais ; si on me le demande, je ne sais plus » porte sur…", choix: ["la liberté", "le temps (Augustin)", "la vérité", "Dieu"], bonne: 1, explication: "Augustin, Confessions XI : l'énigme du temps." },
    { question: "Aristote définit le temps comme…", choix: ["la durée de la conscience", "le nombre du mouvement selon l'avant et l'après", "une illusion", "l'éternité"], bonne: 1, explication: "Temps objectif, lié au changement et mesurable." },
    { question: "La « durée » (Bergson) s'oppose…", choix: ["au mouvement", "au temps spatialisé des horloges", "à la mémoire", "à l'éternité"], bonne: 1, explication: "La durée est le temps vécu, qualitatif ; le temps mesuré est spatialisé et quantitatif." },
    { question: "Rétention et protention sont des concepts de…", choix: ["Bergson", "Husserl", "Aristote", "Sénèque"], bonne: 1, explication: "Husserl : la structure temporelle de la conscience (passé proche / futur proche)." },
    { question: "Pour Heidegger, la finitude du temps (« être-pour-la-mort »)…", choix: ["rend la vie absurde", "donne sens et urgence à l'existence", "n'a aucun effet", "supprime la liberté"], bonne: 1, explication: "C'est parce qu'elle est finie que l'existence a un sens et une intensité." },
  ],
  liens: ["conscience", "bonheur", "liberte"],
};
