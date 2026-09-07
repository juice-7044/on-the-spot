-- Run once in the matching Supabase project's SQL Editor before deploying the app update.
alter table public.agreements
  add column if not exists start_date date,
  add column if not exists hourly_wage numeric(5,2),
  add column if not exists offered_position text,
  add column if not exists terms_version text;

alter table public.agreements
  drop constraint if exists agreements_hourly_wage_range;

alter table public.agreements
  add constraint agreements_hourly_wage_range
  check (hourly_wage is null or hourly_wage between 25.00 and 45.00);

comment on column public.agreements.start_date is 'Start date offered by the employer and displayed in the signed agreement.';
comment on column public.agreements.hourly_wage is 'Hourly wage offered by the employer and displayed in the signed agreement.';
comment on column public.agreements.offered_position is 'Final position offered by the employer and displayed in the signed agreement.';
comment on column public.agreements.terms_version is 'Version identifier for the agreement text accepted by the employee.';
