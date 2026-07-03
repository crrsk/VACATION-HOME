-- Esquema de base de datos para el sistema de reservas

-- 1. Tabla de Perfiles Extendidos
create table public.profiles (
  id uuid references auth.users not null primary key,
  full_name text,
  email text,
  phone text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar RLS
alter table public.profiles enable row level security;
create policy "Usuarios pueden ver su propio perfil." on profiles for select using (auth.uid() = id);
create policy "Usuarios pueden actualizar su propio perfil." on profiles for update using (auth.uid() = id);

-- Trigger para crear perfil automatico al registrarse
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 2. Tabla de Reservas
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  check_in date not null,
  check_out date not null,
  guests integer default 1,
  total_price numeric not null,
  status text default 'pending', -- pending, confirmed, cancelled
  stripe_payment_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar RLS
alter table public.bookings enable row level security;
create policy "Usuarios pueden ver sus propias reservas." on bookings for select using (auth.uid() = user_id);
create policy "Usuarios pueden crear sus reservas." on bookings for insert with check (auth.uid() = user_id);
