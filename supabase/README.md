# Supabase Setup — Allah Hu Autos

This directory contains the database migration and seed data for the Allah Hu Autos project.

---

## Prerequisites

- A [Supabase](https://supabase.com) account (free tier is sufficient)
- Your project URL and Anon Key

---

## Step 1 — Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign in.
2. Click **New Project**.
3. Fill in the project name (e.g. `allah-hu-autos`) and choose a strong database password.
4. Select the region closest to your users (e.g. **Mumbai** or **Singapore** for Pakistan).
5. Click **Create new project** and wait ~2 minutes for provisioning.

---

## Step 2 — Get Your Project URL and Anon Key

1. In the Supabase dashboard, go to **Project Settings → API**.
2. Copy the **Project URL** (looks like `https://xxxxxxxxxxxx.supabase.co`).
3. Copy the **anon / public** key (a long JWT starting with `eyJ...`).

---

## Step 3 — Create Your `.env` File

In the **root of the project**, create a `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

Then fill in your values:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

> **Important:** Never commit the `.env` file to Git. It is already listed in `.gitignore`.

---

## Step 4 — Run the Migration

1. In the Supabase dashboard, go to **SQL Editor**.
2. Click **New query**.
3. Copy the entire contents of `supabase/migrations/001_initial_schema.sql` and paste it into the editor.
4. Click **Run**.

This will create all 17 tables, indexes, Row Level Security policies, and the auto-profile trigger.

---

## Step 5 — Run the Seed Data

1. In the **SQL Editor**, click **New query**.
2. Copy the contents of `supabase/seed.sql` and paste it into the editor.
3. Click **Run**.

This inserts sample vehicle makes/models/vehicles, categories, products, branches, and product variants so the app has real data to display.

---

## Table Overview

| Table | Description |
|---|---|
| `vehicle_makes` | Car manufacturers (Toyota, Honda, etc.) |
| `vehicle_models` | Car models per make |
| `vehicles` | Specific year/model combinations |
| `categories` | Product categories |
| `products` | Product catalog |
| `product_images` | Images per product |
| `product_variants` | SKU, price, color, stock per product |
| `product_compatibility` | Which vehicles a product fits |
| `branches` | Physical store locations |
| `inventory` | Stock per variant per branch |
| `profiles` | User profiles (linked to Supabase Auth) |
| `user_addresses` | Saved delivery addresses |
| `user_vehicles` | User's registered vehicles |
| `orders` | Customer orders |
| `order_items` | Line items per order |
| `bookings` | Installation/service bookings |
| `reviews` | Product reviews |

---

## Notes

- Row Level Security (RLS) is enabled on all tables.
- Public tables (products, categories, vehicles, etc.) are readable by everyone.
- User-specific tables (orders, bookings, addresses) are only accessible by the owner.
- Admin users (role = `'admin'`) have full access to all tables.
- A database trigger automatically creates a `profiles` row when a new user signs up.
