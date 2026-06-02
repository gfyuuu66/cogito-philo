# φ Cogito — Révision Philo (Bac / Terminale)

Site de révision **interactif** des **17 notions** de philosophie : cours
clairs, flashcards, quiz notés, citations à replacer, **plans de dissertation**
tout faits, méthode de la **problématique** et carte des **notions qui vont
ensemble**. Suivi de progression et **classement**.

> Conçu pour viser le 14+ : on n'apprend pas seulement le cours, on apprend à
> **problématiser** et à **rédiger**.

## ✨ Fonctionnalités

- **17 notions** : l'art, le bonheur, la conscience, le devoir, l'État,
  l'inconscient, la justice, le langage, la liberté, la nature, la raison, la
  religion, la science, la technique, le temps, le travail, la vérité.
- Pour chaque notion : **amorce**, **définitions**, **cours** structuré,
  **thèses d'auteurs**, **citations + mode d'emploi**, **débats/paradoxes**,
  **3 sujets de dissertation** (problématique + plan I/II/III + « comment
  trouver le plan »), **flashcards** (cartes à retourner) et **quiz** noté.
- **Méthode** complète : problématique (méthode de la tension), plan
  dialectique, intro en entonnoir, méthode A.E.I., l'art de citer, vocabulaire,
  check-list du jour J.
- **Ponts** entre notions + sujets transversaux.
- **Progression** sauvegardée + **classement** (points et maîtrise).
- **Constellation 3D** interactive des 17 notions sur l'accueil + cartes en 3D.
- **Tableau de bord admin** : suivi détaillé de la progression de chaque joueur.
- **Thème clair / sombre**, responsive, rapide.

## 🚀 Démarrer

```bash
npm install
npm run dev
```

Puis ouvre l'URL affichée (par défaut http://localhost:5173).

```bash
npm run build      # build de production (dossier dist/)
npm run preview    # prévisualiser le build
npm run typecheck  # vérifier les types
```

Aucune configuration n'est nécessaire : par défaut, l'app tourne en **mode
local** (progression + classement dans le navigateur).

## ☁️ Mode cloud (optionnel)

Pour un **login (Google / e-mail)**, un **classement partagé** entre plusieurs
personnes et un **tableau de bord admin** (progression détaillée de chaque
joueur), voir **[SUPABASE.md](SUPABASE.md)**. La connexion par e-mail marche
tout de suite ; Google se branche en quelques clics. Admin par défaut :
`samzyboss51@gmail.com`.

## 🧱 Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS v4**
- **react-router**, **lucide-react**
- **Supabase** (optionnel, pour le cloud)

## 🗂️ Structure

```
src/
  content/
    types.ts            # modèle de données
    notions/*.ts        # le contenu des 17 notions (1 fichier par notion)
    index.ts            # agrège les notions
    method.ts           # méthode de la dissertation
    clusters.ts         # notions liées + sujets transversaux
  components/           # Layout, Flashcards, Quiz, NotionCard, Constellation3D, ...
  pages/                # Home, NotionDetail, Methode, Ponts, Classement, Profil, Admin
  lib/                  # store (progression), theme, supabase, markup
```

### Ajouter / modifier du contenu

Tout le contenu pédagogique est dans `src/content/notions/<notion>.ts` (texte
typé, avec un mini-format `**gras**` et `*italique*`). Pour ajouter une notion,
crée le fichier et ajoute-le dans `src/content/index.ts`.

---

Bon courage pour le bac ! 💪
