create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  subject text not null,
  purpose text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.contact_inquiries enable row level security;

create policy "Allow insert via service role contact"
  on public.contact_inquiries
  for insert
  with check (auth.role() = 'service_role');

create policy "Allow read contact via service role"
  on public.contact_inquiries
  for select
  using (auth.role() = 'service_role');