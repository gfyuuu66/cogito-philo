-- ───────────────────────────────────────────────────────────────
-- Cogito — schéma de la base pour le MODE CLOUD (classement partagé)
-- À coller dans Supabase → SQL Editor → Run.
-- ───────────────────────────────────────────────────────────────

create table if not exists public.scores (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  pseudo     text not null,
  email      text,
  points     integer not null default 0,
  mastery    integer not null default 0,
  updated_at timestamptz not null default now()
);

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

-- L'admin (par e-mail) peut tout supprimer (réinitialiser le classement)
drop policy if exists "scores_admin_delete" on public.scores;
create policy "scores_admin_delete"
  on public.scores for delete
  using ((auth.jwt() ->> 'email') = 'samzyboss51@gmail.com');
