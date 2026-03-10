-- =============================================
-- Allah Hu Autos — Seed Data
-- =============================================
-- Run this AFTER the 001_initial_schema.sql migration.
-- =============================================

-- ===== VEHICLE MAKES =====
INSERT INTO vehicle_makes (id, name, slug, logo_url) VALUES
  ('11111111-0000-0000-0000-000000000001', 'Toyota',  'toyota',  NULL),
  ('11111111-0000-0000-0000-000000000002', 'Honda',   'honda',   NULL),
  ('11111111-0000-0000-0000-000000000003', 'Suzuki',  'suzuki',  NULL),
  ('11111111-0000-0000-0000-000000000004', 'Hyundai', 'hyundai', NULL),
  ('11111111-0000-0000-0000-000000000005', 'KIA',     'kia',     NULL),
  ('11111111-0000-0000-0000-000000000006', 'Changan', 'changan', NULL);

-- ===== VEHICLE MODELS =====
INSERT INTO vehicle_models (id, make_id, name, slug, body_type) VALUES
  -- Toyota
  ('22222222-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000001', 'Corolla',   'corolla',   'Sedan'),
  ('22222222-0000-0000-0000-000000000002', '11111111-0000-0000-0000-000000000001', 'Yaris',     'yaris',     'Sedan'),
  ('22222222-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000001', 'Fortuner',  'fortuner',  'SUV'),
  -- Honda
  ('22222222-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000002', 'Civic',     'civic',     'Sedan'),
  ('22222222-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000002', 'City',      'city',      'Sedan'),
  -- Suzuki
  ('22222222-0000-0000-0000-000000000006', '11111111-0000-0000-0000-000000000003', 'Alto',      'alto',      'Hatchback'),
  ('22222222-0000-0000-0000-000000000007', '11111111-0000-0000-0000-000000000003', 'Swift',     'swift',     'Hatchback'),
  ('22222222-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000003', 'Cultus',    'cultus',    'Hatchback'),
  -- Hyundai
  ('22222222-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000004', 'Tucson',    'tucson',    'SUV'),
  ('22222222-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000004', 'Elantra',   'elantra',   'Sedan'),
  -- KIA
  ('22222222-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000005', 'Sportage',  'sportage',  'SUV'),
  ('22222222-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000005', 'Picanto',   'picanto',   'Hatchback');

-- ===== VEHICLES (select years) =====
INSERT INTO vehicles (id, model_id, make_id, year, display_name) VALUES
  ('33333333-0000-0000-0000-000000000001', '22222222-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000001', 2020, 'Toyota Corolla 2020'),
  ('33333333-0000-0000-0000-000000000002', '22222222-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000001', 2021, 'Toyota Corolla 2021'),
  ('33333333-0000-0000-0000-000000000003', '22222222-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000001', 2022, 'Toyota Corolla 2022'),
  ('33333333-0000-0000-0000-000000000004', '22222222-0000-0000-0000-000000000002', '11111111-0000-0000-0000-000000000001', 2022, 'Toyota Yaris 2022'),
  ('33333333-0000-0000-0000-000000000005', '22222222-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000001', 2023, 'Toyota Fortuner 2023'),
  ('33333333-0000-0000-0000-000000000006', '22222222-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000002', 2022, 'Honda Civic 2022'),
  ('33333333-0000-0000-0000-000000000007', '22222222-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000002', 2023, 'Honda Civic 2023'),
  ('33333333-0000-0000-0000-000000000008', '22222222-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000002', 2022, 'Honda City 2022'),
  ('33333333-0000-0000-0000-000000000009', '22222222-0000-0000-0000-000000000006', '11111111-0000-0000-0000-000000000003', 2023, 'Suzuki Alto 2023'),
  ('33333333-0000-0000-0000-000000000010', '22222222-0000-0000-0000-000000000007', '11111111-0000-0000-0000-000000000003', 2022, 'Suzuki Swift 2022'),
  ('33333333-0000-0000-0000-000000000011', '22222222-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000003', 2021, 'Suzuki Cultus 2021'),
  ('33333333-0000-0000-0000-000000000012', '22222222-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000004', 2023, 'Hyundai Tucson 2023'),
  ('33333333-0000-0000-0000-000000000013', '22222222-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000004', 2022, 'Hyundai Elantra 2022'),
  ('33333333-0000-0000-0000-000000000014', '22222222-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000005', 2023, 'KIA Sportage 2023'),
  ('33333333-0000-0000-0000-000000000015', '22222222-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000005', 2022, 'KIA Picanto 2022');

-- ===== CATEGORIES =====
INSERT INTO categories (id, name, slug, description, icon, is_featured, product_count) VALUES
  ('44444444-0000-0000-0000-000000000001', 'LED Lights',        'led-lights',        'Premium LED lighting solutions for your vehicle',      'Lightbulb', true,  5),
  ('44444444-0000-0000-0000-000000000002', 'Seat Covers',       'seat-covers',       'Custom-fit seat covers for ultimate comfort',          'Armchair',  true,  4),
  ('44444444-0000-0000-0000-000000000003', 'Car Mats',          'car-mats',          'Durable floor mats for all weather',                   'Square',    true,  4),
  ('44444444-0000-0000-0000-000000000004', 'Horns',             'horns',             'Powerful horns for road safety',                       'Volume2',   true,  3),
  ('44444444-0000-0000-0000-000000000005', 'Android Panels',    'android-panels',    'Smart multimedia android panels',                      'Tablet',    true,  4),
  ('44444444-0000-0000-0000-000000000006', 'Body Kits',         'body-kits',         'Transform your vehicle with premium body kits',        'Car',       true,  4),
  ('44444444-0000-0000-0000-000000000007', 'Security Systems',  'security-systems',  'Advanced car security and alarm systems',              'Shield',    true,  3),
  ('44444444-0000-0000-0000-000000000008', 'Car Speakers',      'car-speakers',      'High-quality car audio speakers',                     'Speaker',   true,  3);

-- ===== PRODUCTS =====
INSERT INTO products (id, name, slug, description, category_id, is_featured, is_installable, avg_rating, review_count) VALUES
  -- LED Lights
  ('55555555-0000-0000-0000-000000000001', '9005 HB3 LED Headlight Bulbs',  '9005-hb3-led-headlight-bulbs',  'Premium quality LED headlight bulbs for your vehicle. Perfect fit and easy installation.',  '44444444-0000-0000-0000-000000000001', true,  true,  4.5, 28),
  ('55555555-0000-0000-0000-000000000002', 'H11 LED Fog Light Bulbs',        'h11-led-fog-light-bulbs',        'Premium quality fog light bulbs for your vehicle. Excellent visibility in adverse weather.', '44444444-0000-0000-0000-000000000001', false, true,  4.2, 15),
  ('55555555-0000-0000-0000-000000000003', 'LED DRL Strip Light 60cm',       'led-drl-strip-light-60cm',       'Flexible LED strip for daytime running lights. Easy peel-and-stick installation.',           '44444444-0000-0000-0000-000000000001', true,  false, 4.3, 22),
  -- Seat Covers
  ('55555555-0000-0000-0000-000000000004', 'Premium Leather Seat Cover Set', 'premium-leather-seat-cover-set', 'Full set of premium PU leather seat covers. Custom fit with professional stitching.',       '44444444-0000-0000-0000-000000000002', true,  true,  4.7, 45),
  ('55555555-0000-0000-0000-000000000005', 'Universal Mesh Seat Cover Pair', 'universal-mesh-seat-cover-pair', 'Breathable mesh fabric seat covers. Universal fit for most vehicles.',                       '44444444-0000-0000-0000-000000000002', false, false, 4.1, 18),
  -- Car Mats
  ('55555555-0000-0000-0000-000000000006', 'All Weather Rubber Car Mats',    'all-weather-rubber-car-mats',    'Heavy duty rubber mats with anti-slip backing. Traps dirt and moisture effectively.',       '44444444-0000-0000-0000-000000000003', true,  false, 4.4, 32),
  ('55555555-0000-0000-0000-000000000007', 'Luxury Carpet Car Mats Set',     'luxury-carpet-car-mats-set',     'Premium carpet mats with embroidered logo. Soft feel with heel pad protection.',            '44444444-0000-0000-0000-000000000003', false, false, 4.0, 14),
  -- Horns
  ('55555555-0000-0000-0000-000000000008', 'Dual Tone Air Horn',             'dual-tone-air-horn',             'Powerful dual tone air horn. 110dB output. Waterproof design for all conditions.',          '44444444-0000-0000-0000-000000000004', true,  true,  4.6, 37),
  -- Android Panels
  ('55555555-0000-0000-0000-000000000009', '9-Inch Android 13 Car Panel',   '9-inch-android-13-car-panel',   '9-inch IPS touchscreen with Android 13. Built-in GPS, WiFi, and Bluetooth connectivity.',   '44444444-0000-0000-0000-000000000005', true,  true,  4.8, 52),
  ('55555555-0000-0000-0000-000000000010', '7-Inch Android Car Panel',      '7-inch-android-car-panel',      '7-inch Android panel with CarPlay support. Easy installation with plug-and-play harness.',  '44444444-0000-0000-0000-000000000005', false, true,  4.3, 29),
  -- Security
  ('55555555-0000-0000-0000-000000000011', 'Car Alarm System Pro',          'car-alarm-system-pro',          'Professional grade car alarm with remote start. Shock sensor and siren included.',          '44444444-0000-0000-0000-000000000007', true,  true,  4.5, 41),
  -- Speakers
  ('55555555-0000-0000-0000-000000000012', '6.5 Inch Component Speakers',   '6-5-inch-component-speakers',   '6.5-inch 2-way component speaker set. 240W peak power. Crystal clear highs and deep bass.',  '44444444-0000-0000-0000-000000000008', true,  true,  4.6, 33);

-- ===== PRODUCT IMAGES =====
INSERT INTO product_images (id, product_id, url, alt, is_primary) VALUES
  ('66666666-0000-0000-0000-000000000001', '55555555-0000-0000-0000-000000000001', '/placeholder.svg', '9005 HB3 LED Headlight Bulbs',  true),
  ('66666666-0000-0000-0000-000000000002', '55555555-0000-0000-0000-000000000002', '/placeholder.svg', 'H11 LED Fog Light Bulbs',        true),
  ('66666666-0000-0000-0000-000000000003', '55555555-0000-0000-0000-000000000003', '/placeholder.svg', 'LED DRL Strip Light 60cm',       true),
  ('66666666-0000-0000-0000-000000000004', '55555555-0000-0000-0000-000000000004', '/placeholder.svg', 'Premium Leather Seat Cover Set', true),
  ('66666666-0000-0000-0000-000000000005', '55555555-0000-0000-0000-000000000005', '/placeholder.svg', 'Universal Mesh Seat Cover Pair', true),
  ('66666666-0000-0000-0000-000000000006', '55555555-0000-0000-0000-000000000006', '/placeholder.svg', 'All Weather Rubber Car Mats',    true),
  ('66666666-0000-0000-0000-000000000007', '55555555-0000-0000-0000-000000000007', '/placeholder.svg', 'Luxury Carpet Car Mats Set',     true),
  ('66666666-0000-0000-0000-000000000008', '55555555-0000-0000-0000-000000000008', '/placeholder.svg', 'Dual Tone Air Horn',             true),
  ('66666666-0000-0000-0000-000000000009', '55555555-0000-0000-0000-000000000009', '/placeholder.svg', '9-Inch Android 13 Car Panel',   true),
  ('66666666-0000-0000-0000-000000000010', '55555555-0000-0000-0000-000000000010', '/placeholder.svg', '7-Inch Android Car Panel',      true),
  ('66666666-0000-0000-0000-000000000011', '55555555-0000-0000-0000-000000000011', '/placeholder.svg', 'Car Alarm System Pro',          true),
  ('66666666-0000-0000-0000-000000000012', '55555555-0000-0000-0000-000000000012', '/placeholder.svg', '6.5 Inch Component Speakers',   true);

-- ===== PRODUCT VARIANTS =====
INSERT INTO product_variants (id, product_id, name, sku, price, compare_at_price, color, color_hex, stock, is_default) VALUES
  -- 9005 HB3 LED (2 variants)
  ('77777777-0000-0000-0000-000000000001', '55555555-0000-0000-0000-000000000001', 'Cool White', 'SKU-LED-001-W', 3500, 4500, 'White', '#ffffff', 30, true),
  ('77777777-0000-0000-0000-000000000002', '55555555-0000-0000-0000-000000000001', 'Ice Blue',   'SKU-LED-001-B', 3500, 4500, 'Blue',  '#00bfff', 20, false),
  -- H11 LED Fog (2 variants)
  ('77777777-0000-0000-0000-000000000003', '55555555-0000-0000-0000-000000000002', '6000K White', 'SKU-LED-002-W', 2800, 3500, NULL, NULL, 25, true),
  ('77777777-0000-0000-0000-000000000004', '55555555-0000-0000-0000-000000000002', '3000K Yellow','SKU-LED-002-Y', 2800, 3500, NULL, NULL, 20, false),
  -- LED DRL Strip
  ('77777777-0000-0000-0000-000000000005', '55555555-0000-0000-0000-000000000003', 'Default', 'SKU-LED-003', 1200, 1800, NULL, NULL, 50, true),
  -- Leather Seat Covers (3 colors)
  ('77777777-0000-0000-0000-000000000006', '55555555-0000-0000-0000-000000000004', 'Black',     'SKU-SC-001-BK', 18000, 24000, 'Black', '#000000', 15, true),
  ('77777777-0000-0000-0000-000000000007', '55555555-0000-0000-0000-000000000004', 'Beige',     'SKU-SC-001-BE', 18000, 24000, 'Beige', '#d4b896', 10, false),
  ('77777777-0000-0000-0000-000000000008', '55555555-0000-0000-0000-000000000004', 'Red+Black', 'SKU-SC-001-RB', 18000, 24000, 'Red',   '#e11d48', 8,  false),
  -- Mesh Seat Cover (2 colors)
  ('77777777-0000-0000-0000-000000000009', '55555555-0000-0000-0000-000000000005', 'Black', 'SKU-SC-002-BK', 3500, 4500, 'Black', '#000000', 30, true),
  ('77777777-0000-0000-0000-000000000010', '55555555-0000-0000-0000-000000000005', 'Grey',  'SKU-SC-002-GR', 3500, 4500, 'Grey',  '#9ca3af', 25, false),
  -- Rubber Mats
  ('77777777-0000-0000-0000-000000000011', '55555555-0000-0000-0000-000000000006', 'Black', 'SKU-MAT-001',   2200, 2800, 'Black', '#000000', 40, true),
  -- Carpet Mats
  ('77777777-0000-0000-0000-000000000012', '55555555-0000-0000-0000-000000000007', 'Black', 'SKU-MAT-002-BK', 4500, NULL, 'Black', '#000000', 20, true),
  ('77777777-0000-0000-0000-000000000013', '55555555-0000-0000-0000-000000000007', 'Beige', 'SKU-MAT-002-BE', 4500, NULL, 'Beige', '#d4b896', 15, false),
  -- Dual Tone Horn
  ('77777777-0000-0000-0000-000000000014', '55555555-0000-0000-0000-000000000008', 'Default', 'SKU-HRN-001', 2200, 2800, NULL, NULL, 35, true),
  -- 9-Inch Android Panel
  ('77777777-0000-0000-0000-000000000015', '55555555-0000-0000-0000-000000000009', 'Standard', 'SKU-AND-001-S', 35000, 42000, NULL, NULL, 12, true),
  ('77777777-0000-0000-0000-000000000016', '55555555-0000-0000-0000-000000000009', 'With DSP',  'SKU-AND-001-D', 42000, 50000, NULL, NULL, 8,  false),
  -- 7-Inch Android Panel
  ('77777777-0000-0000-0000-000000000017', '55555555-0000-0000-0000-000000000010', 'Default', 'SKU-AND-002', 22000, 28000, NULL, NULL, 18, true),
  -- Car Alarm
  ('77777777-0000-0000-0000-000000000018', '55555555-0000-0000-0000-000000000011', 'Standard', 'SKU-SEC-001-S', 8500, 11000, NULL, NULL, 20, true),
  ('77777777-0000-0000-0000-000000000019', '55555555-0000-0000-0000-000000000011', 'With GPS',  'SKU-SEC-001-G', 14000, 18000, NULL, NULL, 10, false),
  -- Speakers
  ('77777777-0000-0000-0000-000000000020', '55555555-0000-0000-0000-000000000012', 'Default', 'SKU-SPK-001', 12500, 15000, NULL, NULL, 22, true);

-- ===== PRODUCT COMPATIBILITY =====
-- Universal products
INSERT INTO product_compatibility (product_id, make_id, model_id, vehicle_id, is_universal) VALUES
  ('55555555-0000-0000-0000-000000000001', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000002', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000003', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000004', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000005', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000006', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000007', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000008', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000009', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000010', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000011', NULL, NULL, NULL, true),
  ('55555555-0000-0000-0000-000000000012', NULL, NULL, NULL, true);

-- ===== BRANCHES =====
INSERT INTO branches (id, name, city, address, phone, lat, lng) VALUES
  ('88888888-0000-0000-0000-000000000001', 'Lahore Branch',  'Lahore',  'Shop #12, Main Boulevard, Gulberg III, Lahore', '+92 300 1234567', 31.5204, 74.3587),
  ('88888888-0000-0000-0000-000000000002', 'Quetta Branch',  'Quetta',  'Shop #5, Jinnah Road, Quetta',                  '+92 300 7654321', 30.1798, 66.9750),
  ('88888888-0000-0000-0000-000000000003', 'Karachi Branch', 'Karachi', 'Shop #8, Tariq Road, PECHS, Karachi',           '+92 300 9876543', 24.8607, 67.0011);

-- ===== SAMPLE REVIEWS =====
-- Note: user_id must reference a real auth user in production.
-- These are placeholder reviews; replace the user_id values with real UUIDs after creating test users.
-- INSERT INTO reviews (product_id, user_id, user_name, rating, comment, is_approved) VALUES
--   ('55555555-0000-0000-0000-000000000001', '<user-uuid>', 'Ahmed K.', 5, 'Excellent LED bulbs! Very bright and easy to install.', true),
--   ('55555555-0000-0000-0000-000000000004', '<user-uuid>', 'Sara M.', 5, 'Love the leather seat covers. Fit perfectly and look premium.', true),
--   ('55555555-0000-0000-0000-000000000009', '<user-uuid>', 'Usman T.', 5, 'Best android panel I have bought. Works flawlessly with GPS.', true);
