# Activer le mode cloud (login + classement partagé)

Par défaut, **Cogito fonctionne sans rien configurer** : la progression et le
classement sont enregistrés dans le navigateur (mode local). Suis ce guide
seulement si tu veux un **vrai login (Slack / Google) et un classement partagé**
entre plusieurs personnes.

## 1. Créer un projet Supabase (gratuit)

1. Va sur [supabase.com](https://supabase.com) → **New project**.
2. Note l'**URL du projet** et la clé **anon public** (Settings → API).

## 2. Créer la table des scores

Dans Supabase → **SQL Editor**, colle le contenu de [`supabase/schema.sql`](supabase/schema.sql) puis clique **Run**.

## 3. Activer les connexions Slack / Google

Dans Supabase → **Authentication → Providers** :

- **Google** : active-le, colle un `Client ID` / `Client Secret` (Google Cloud Console).
- **Slack** : active **Slack (OIDC)**, colle les identifiants depuis [api.slack.com/apps](https://api.slack.com/apps).
- Dans **URL Configuration**, ajoute ton URL (ex. `http://localhost:5173`) aux *Redirect URLs*.

> Le code utilise le provider `slack_oidc` (le nouveau Slack OpenID). Si tu n'as
> que Google, le bouton Slack peut être ignoré.

## 4. Renseigner les clés

Copie `.env.example` en `.env` et remplis :

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
VITE_ADMIN_EMAIL=samzyboss51@gmail.com
```

## 5. Relancer

```
npm run dev
```

La page Profil affichera les boutons **Slack / Google**, et le classement
deviendra **partagé** (lecture par tous, chacun écrit sa ligne, l'admin peut
réinitialiser). Si les clés sont absentes ou invalides, l'app retombe
automatiquement en mode local.
