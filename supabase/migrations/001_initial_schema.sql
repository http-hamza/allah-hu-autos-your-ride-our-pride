-- =============================================
-- Allah Hu Autos — Initial Schema Migration
-- =============================================

-- ===== VEHICLE MAKES =====
CREATE TABLE vehicle_makes (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  slug        text NOT NULL UNIQUE,
  logo_url    text,
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- ===== VEHICLE MODELS =====
CREATE TABLE vehicle_models (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  make_id     uuid NOT NULL REFERENCES vehicle_makes(id) ON DELETE CASCADE,
  name        text NOT NULL,
  slug        text NOT NULL UNIQUE,
  body_type   text NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- ===== VEHICLES =====
CREATE TABLE vehicles (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  model_id     uuid NOT NULL REFERENCES vehicle_models(id) ON DELETE CASCADE,
  make_id      uuid NOT NULL REFERENCES vehicle_makes(id) ON DELETE CASCADE,
  year         int NOT NULL,
  display_name text NOT NULL,
  created_at   timestamptz NOT NULL DEFAULT now()
);

-- ===== CATEGORIES =====
CREATE TABLE categories (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name          text NOT NULL,
  slug          text NOT NULL UNIQUE,
  description   text NOT NULL DEFAULT '',
  icon          text NOT NULL DEFAULT '',
  is_featured   boolean NOT NULL DEFAULT false,
  product_count int NOT NULL DEFAULT 0,
  image_url     text,
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- ===== PRODUCTS =====
CREATE TABLE products (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name           text NOT NULL,
  slug           text NOT NULL UNIQUE,
  description    text NOT NULL DEFAULT '',
  category_id    uuid NOT NULL REFERENCES categories(id),
  is_featured    boolean NOT NULL DEFAULT false,
  is_installable boolean NOT NULL DEFAULT false,
  avg_rating     numeric NOT NULL DEFAULT 0,
  review_count   int NOT NULL DEFAULT 0,
  created_at     timestamptz NOT NULL DEFAULT now()
);

-- ===== PRODUCT IMAGES =====
CREATE TABLE product_images (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  url        text NOT NULL,
  alt        text NOT NULL DEFAULT '',
  is_primary boolean NOT NULL DEFAULT false
);

-- ===== PRODUCT VARIANTS =====
CREATE TABLE product_variants (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id       uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  name             text NOT NULL,
  sku              text NOT NULL UNIQUE,
  price            numeric NOT NULL,
  compare_at_price numeric,
  color            text,
  color_hex        text,
  size             text,
  stock            int NOT NULL DEFAULT 0,
  is_default       boolean NOT NULL DEFAULT false
);

-- ===== PRODUCT COMPATIBILITY =====
CREATE TABLE product_compatibility (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id   uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  make_id      uuid REFERENCES vehicle_makes(id),
  model_id     uuid REFERENCES vehicle_models(id),
  vehicle_id   uuid REFERENCES vehicles(id),
  is_universal boolean NOT NULL DEFAULT false
);

-- ===== BRANCHES =====
CREATE TABLE branches (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text NOT NULL,
  city       text NOT NULL,
  address    text NOT NULL,
  phone      text NOT NULL,
  lat        numeric NOT NULL,
  lng        numeric NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- ===== INVENTORY =====
CREATE TABLE inventory (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id uuid NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  branch_id  uuid NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
  stock      int NOT NULL DEFAULT 0,
  UNIQUE (variant_id, branch_id)
);

-- ===== PROFILES =====
CREATE TABLE profiles (
  id         uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email      text NOT NULL,
  full_name  text NOT NULL DEFAULT '',
  phone      text,
  avatar_url text,
  role       text NOT NULL DEFAULT 'customer'
               CHECK (role IN ('customer', 'admin', 'staff', 'installer')),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- ===== USER ADDRESSES =====
CREATE TABLE user_addresses (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  label      text NOT NULL,
  full_name  text NOT NULL,
  phone      text NOT NULL,
  city       text NOT NULL,
  address    text NOT NULL,
  is_default boolean NOT NULL DEFAULT false
);

-- ===== USER VEHICLES =====
CREATE TABLE user_vehicles (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  vehicle_id   uuid NOT NULL REFERENCES vehicles(id),
  make_name    text NOT NULL,
  model_name   text NOT NULL,
  year         int NOT NULL,
  display_name text NOT NULL
);

-- ===== ORDERS =====
CREATE TABLE orders (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number     text NOT NULL UNIQUE,
  user_id          uuid NOT NULL REFERENCES profiles(id),
  status           text NOT NULL DEFAULT 'pending'
                     CHECK (status IN ('pending','confirmed','processing','shipped','delivered','cancelled')),
  subtotal         numeric NOT NULL,
  delivery_fee     numeric NOT NULL,
  install_total    numeric NOT NULL,
  grand_total      numeric NOT NULL,
  shipping_name    text NOT NULL,
  shipping_phone   text NOT NULL,
  shipping_city    text NOT NULL,
  shipping_address text NOT NULL,
  branch_id        uuid REFERENCES branches(id),
  notes            text,
  created_at       timestamptz NOT NULL DEFAULT now()
);

-- ===== ORDER ITEMS =====
CREATE TABLE order_items (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id         uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id       uuid NOT NULL REFERENCES products(id),
  variant_id       uuid NOT NULL REFERENCES product_variants(id),
  product_name     text NOT NULL,
  variant_name     text NOT NULL,
  image_url        text,
  price            numeric NOT NULL,
  quantity         int NOT NULL,
  install_requested boolean NOT NULL DEFAULT false,
  install_type     text CHECK (install_type IN ('branch', 'home')),
  install_charge   numeric NOT NULL DEFAULT 0
);

-- ===== BOOKINGS =====
CREATE TABLE bookings (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_number   text NOT NULL UNIQUE,
  user_id          uuid NOT NULL REFERENCES profiles(id),
  branch_id        uuid NOT NULL REFERENCES branches(id),
  service_type     text NOT NULL
                     CHECK (service_type IN ('installation','home_install','consultation')),
  status           text NOT NULL DEFAULT 'pending'
                     CHECK (status IN ('pending','confirmed','completed','cancelled')),
  date             date NOT NULL,
  time_slot        text NOT NULL,
  customer_name    text NOT NULL,
  customer_phone   text NOT NULL,
  customer_address text,
  notes            text,
  created_at       timestamptz NOT NULL DEFAULT now()
);

-- ===== REVIEWS =====
CREATE TABLE reviews (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id  uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  user_id     uuid NOT NULL REFERENCES profiles(id),
  user_name   text NOT NULL,
  rating      int NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment     text NOT NULL DEFAULT '',
  is_approved boolean NOT NULL DEFAULT false,
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- =============================================
-- INDEXES
-- =============================================

CREATE INDEX ON vehicle_models (make_id);
CREATE INDEX ON vehicles (model_id);
CREATE INDEX ON vehicles (make_id);
CREATE INDEX ON products (category_id);
CREATE INDEX ON products (slug);
CREATE INDEX ON products (is_featured);
CREATE INDEX ON product_images (product_id);
CREATE INDEX ON product_variants (product_id);
CREATE INDEX ON product_variants (sku);
CREATE INDEX ON product_compatibility (product_id);
CREATE INDEX ON product_compatibility (make_id);
CREATE INDEX ON product_compatibility (model_id);
CREATE INDEX ON inventory (variant_id);
CREATE INDEX ON inventory (branch_id);
CREATE INDEX ON user_addresses (user_id);
CREATE INDEX ON user_vehicles (user_id);
CREATE INDEX ON orders (user_id);
CREATE INDEX ON orders (status);
CREATE INDEX ON orders (order_number);
CREATE INDEX ON order_items (order_id);
CREATE INDEX ON bookings (user_id);
CREATE INDEX ON bookings (branch_id);
CREATE INDEX ON bookings (status);
CREATE INDEX ON reviews (product_id);
CREATE INDEX ON reviews (user_id);
CREATE INDEX ON reviews (is_approved);

-- =============================================
-- ROW LEVEL SECURITY
-- =============================================

ALTER TABLE vehicle_makes        ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicle_models       ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles             ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories           ENABLE ROW LEVEL SECURITY;
ALTER TABLE products             ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images       ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants     ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_compatibility ENABLE ROW LEVEL SECURITY;
ALTER TABLE branches             ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory            ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles             ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_addresses       ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_vehicles        ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders               ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items          ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings             ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews              ENABLE ROW LEVEL SECURITY;

-- =============================================
-- RLS POLICIES — Public read access
-- =============================================

CREATE POLICY "Public read vehicle_makes"
  ON vehicle_makes FOR SELECT USING (true);

CREATE POLICY "Public read vehicle_models"
  ON vehicle_models FOR SELECT USING (true);

CREATE POLICY "Public read vehicles"
  ON vehicles FOR SELECT USING (true);

CREATE POLICY "Public read categories"
  ON categories FOR SELECT USING (true);

CREATE POLICY "Public read products"
  ON products FOR SELECT USING (true);

CREATE POLICY "Public read product_images"
  ON product_images FOR SELECT USING (true);

CREATE POLICY "Public read product_variants"
  ON product_variants FOR SELECT USING (true);

CREATE POLICY "Public read product_compatibility"
  ON product_compatibility FOR SELECT USING (true);

CREATE POLICY "Public read branches"
  ON branches FOR SELECT USING (true);

CREATE POLICY "Public read approved reviews"
  ON reviews FOR SELECT USING (is_approved = true);

-- =============================================
-- RLS POLICIES — Authenticated users (own data)
-- =============================================

CREATE POLICY "Users read own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- User addresses
CREATE POLICY "Users manage own addresses"
  ON user_addresses FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- User vehicles
CREATE POLICY "Users manage own vehicles"
  ON user_vehicles FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Orders
CREATE POLICY "Users read own orders"
  ON orders FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users create own orders"
  ON orders FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Order items (readable if user owns the order)
CREATE POLICY "Users read own order items"
  ON order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
        AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users insert own order items"
  ON order_items FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
        AND orders.user_id = auth.uid()
    )
  );

-- Bookings
CREATE POLICY "Users manage own bookings"
  ON bookings FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Reviews
CREATE POLICY "Users create own reviews"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own reviews"
  ON reviews FOR UPDATE
  USING (auth.uid() = user_id);

-- =============================================
-- RLS POLICIES — Admin full access
-- =============================================

CREATE POLICY "Admin full access vehicle_makes"
  ON vehicle_makes FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access vehicle_models"
  ON vehicle_models FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access vehicles"
  ON vehicles FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access categories"
  ON categories FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access products"
  ON products FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access product_images"
  ON product_images FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access product_variants"
  ON product_variants FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access product_compatibility"
  ON product_compatibility FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access branches"
  ON branches FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access inventory"
  ON inventory FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access profiles"
  ON profiles FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access user_addresses"
  ON user_addresses FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access user_vehicles"
  ON user_vehicles FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access orders"
  ON orders FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access order_items"
  ON order_items FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access bookings"
  ON bookings FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admin full access reviews"
  ON reviews FOR ALL
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- =============================================
-- AUTO-CREATE PROFILE ON SIGN-UP
-- =============================================

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
