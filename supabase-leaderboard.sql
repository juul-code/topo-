-- Run this once in the Supabase SQL Editor for your project.
create table if not exists public.leaderboard_scores (
  id bigint generated always as identity primary key,
  area text not null check (area in ('Nederland', 'Europa', 'De wereld')),
  name text not null check (char_length(name) between 1 and 24),
  score integer not null check (score between 0 and 999999),
  created_at timestamptz not null default now()
);

alter table public.leaderboard_scores enable row level security;

grant select, insert on public.leaderboard_scores to anon, authenticated;

drop policy if exists "Anyone can read leaderboard scores" on public.leaderboard_scores;
create policy "Anyone can read leaderboard scores"
  on public.leaderboard_scores for select
  to anon, authenticated
  using (true);

drop policy if exists "Anyone can submit a leaderboard score" on public.leaderboard_scores;
create policy "Anyone can submit a leaderboard score"
  on public.leaderboard_scores for insert
  to anon, authenticated
  with check (
    area in ('Nederland', 'Europa', 'De wereld')
    and char_length(name) between 1 and 24
    and score between 0 and 999999
  );
