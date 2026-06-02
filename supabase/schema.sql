-- ───────────────────────────────────────────────────────────────
-- Cogito — schéma de la base pour le MODE CLOUD (classement partagé)
-- À coller dans Supabase → SQL Editor → Run.
-- Ce script est ré-exécutable : tu peux le relancer sans rien casser
-- (utile pour ajouter la colonne `progress` à une table déjà créée).
-- ───────────────────────────────────────────────────────────────

create table if not exists public.scores (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  pseudo     text not null,
  email      text,
  avatar     text,
  points     integer not null default 0,
  mastery    integer not null default 0,
  progress   jsonb   not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Colonnes ajoutées après coup : `add column if not exists` => sans danger si la table existe déjà.
-- progress = détail par notion (cours/flashcards/quiz) pour le tableau de bord admin.
-- avatar   = emoji ou petite image (data URL) du joueur.
alter table public.scores add column if not exists progress jsonb not null default '{}'::jsonb;
alter table public.scores add column if not exists avatar   text;

alter table public.scores enable row level security;

-- Tout le monde peut lire le classement
drop policy if exists "scores_select_all" on public.scores;
create policy "scores_select_all"
  on public.scores for select
  using (true);

-- Chacun peut créer / mettre à jour SA propre ligne
drop policy if exists "scores_insert_own" on public.scores;
create policy "scores_insert_own"
  on public.scores for insert
  with check (auth.uid() = user_id);

drop policy if exists "scores_update_own" on public.scores;
create policy "scores_update_own"
  on public.scores for update
  using (auth.uid() = user_id);

-- L'admin (par e-mail) peut tout supprimer (réinitialiser le classement).
-- ⚠️ Remplace l'e-mail ci-dessous si tu changes d'administrateur.
drop policy if exists "scores_admin_delete" on public.scores;
create policy "scores_admin_delete"
  on public.scores for delete
  using ((auth.jwt() ->> 'email') = 'samzyboss51@gmail.com');
