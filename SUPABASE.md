# Activer le mode cloud (login + classement partagé + tableau de bord admin)

Par défaut, **Cogito fonctionne sans rien configurer** : la progression et le
classement sont enregistrés dans le navigateur (mode local). Suis ce guide
seulement si tu veux un **vrai login (Google / e-mail), un classement partagé**
entre plusieurs personnes, et le **tableau de bord admin** qui montre la
progression détaillée de chaque joueur.

## 1. Créer un projet Supabase (gratuit)

1. Va sur [supabase.com](https://supabase.com) → **New project**.
2. Note l'**URL du projet** et la clé **anon public** (Settings → API).

## 2. Créer / mettre à jour la table des scores

Dans Supabase → **SQL Editor**, colle le contenu de
[`supabase/schema.sql`](supabase/schema.sql) puis clique **Run**.

> 💡 Ce script est **ré-exécutable** : si tu avais déjà créé la table avant,
> relance-le quand même — il ajoute la colonne **`progress`** (le détail
> notion par notion) nécessaire au tableau de bord admin, sans rien effacer.

## 3. Connexion par e-mail (marche tout de suite ✅)

La connexion **par e-mail + mot de passe** fonctionne sans aucune configuration
supplémentaire. Pour une expérience sans friction :

- Supabase → **Authentication → Providers → Email** : laisse-le activé.
- (Recommandé pour des amis/une classe) **désactive « Confirm email »** pour
  que le compte soit utilisable immédiatement, sans cliquer un lien reçu par
  mail. Si tu le laisses activé, l'app affichera « vérifie ta boîte mail ».

## 4. Connexion Google (optionnelle)

Le bouton **« Continuer avec Google »** est prêt côté app, mais Google doit être
activé côté serveur :

1. Supabase → **Authentication → Providers → Google** : active-le.
2. Crée des identifiants OAuth dans la
   [Google Cloud Console](https://console.cloud.google.com/) (OAuth client ID,
   type « Web »), puis colle le **Client ID** / **Client Secret** dans Supabase.
3. Supabase → **Authentication → URL Configuration → Redirect URLs** : ajoute
   l'URL de l'app (ex. `http://localhost:5173` en local, et l'URL de prod).

> Tant que Google n'est pas activé, cliquer le bouton affiche un message clair
> et tu peux te connecter par e-mail en attendant. **Slack a été retiré.**

## 5. Renseigner les clés

Copie `.env.example` en `.env` et remplis :

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
VITE_ADMIN_EMAIL=samzyboss51@gmail.com
```

## 6. Relancer

```
npm run dev
```

## 7. Accéder au tableau de bord admin

1. Crée-toi un compte (onglet **« Créer un compte »**) avec l'e-mail admin
   défini dans `VITE_ADMIN_EMAIL` (par défaut `samzyboss51@gmail.com`).
2. Une fois connecté, un onglet **« Admin »** apparaît dans la barre du haut
   (et un raccourci sur la page **Profil**).
3. Tu y vois chaque joueur : points, maîtrise, dernière activité, et le **détail
   notion par notion** (cours lu, flashcards faites, score au quiz) en dépliant
   chaque ligne. Tu peux aussi **tout réinitialiser**.

> Le détail par notion apparaît pour les joueurs ayant enregistré leur
> progression **après** l'ajout de la colonne `progress` (étape 2).

Si les clés Supabase sont absentes ou invalides, l'app retombe automatiquement
en **mode local** (tout continue de marcher, mais sans partage entre appareils).
