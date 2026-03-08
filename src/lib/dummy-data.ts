import type {
  Category, Product, ProductVariant, ProductImage, ProductCompatibility,
  VehicleMake, VehicleModel, Vehicle, Branch, Order, Booking, Review, Profile, UserAddress, UserVehicle
} from './types';

// ===== CATEGORIES (43) =====
export const dummyCategories: Category[] = [
  { id: 'cat-1', name: 'LED Lights', slug: 'led-lights', description: 'Premium LED lighting solutions for your vehicle', icon: 'Lightbulb', is_featured: true, product_count: 5, image_url: null },
  { id: 'cat-2', name: 'Seat Covers', slug: 'seat-covers', description: 'Custom-fit seat covers for ultimate comfort', icon: 'Armchair', is_featured: true, product_count: 4, image_url: null },
  { id: 'cat-3', name: 'Car Curtains', slug: 'car-curtains', description: 'Privacy and sun protection curtains', icon: 'Blinds', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-4', name: 'Horns', slug: 'horns', description: 'Powerful horns for road safety', icon: 'Volume2', is_featured: true, product_count: 3, image_url: null },
  { id: 'cat-5', name: 'Body Kits', slug: 'body-kits', description: 'Transform your vehicle with premium body kits', icon: 'Car', is_featured: true, product_count: 4, image_url: null },
  { id: 'cat-6', name: 'Spoilers', slug: 'spoilers', description: 'Aerodynamic spoilers for sporty look', icon: 'Wind', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-7', name: 'Car Mats', slug: 'car-mats', description: 'Durable floor mats for all weather', icon: 'Square', is_featured: true, product_count: 4, image_url: null },
  { id: 'cat-8', name: 'Key Covers', slug: 'key-covers', description: 'Stylish key fob covers and cases', icon: 'Key', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-9', name: 'Security Systems', slug: 'security-systems', description: 'Advanced car security and alarm systems', icon: 'Shield', is_featured: true, product_count: 3, image_url: null },
  { id: 'cat-10', name: 'Car Perfumes', slug: 'car-perfumes', description: 'Long-lasting car fragrances', icon: 'Droplets', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-11', name: 'Android Panels', slug: 'android-panels', description: 'Smart multimedia android panels', icon: 'Tablet', is_featured: true, product_count: 4, image_url: null },
  { id: 'cat-12', name: 'Ambient Lights', slug: 'ambient-lights', description: 'Interior ambient lighting systems', icon: 'Sparkles', is_featured: true, product_count: 3, image_url: null },
  { id: 'cat-13', name: 'Steering Covers', slug: 'steering-covers', description: 'Premium steering wheel covers', icon: 'Circle', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-14', name: 'Batman Covers', slug: 'batman-covers', description: 'Full car batman-style protective covers', icon: 'Shield', is_featured: true, product_count: 3, image_url: null },
  { id: 'cat-15', name: 'Interior Accessories', slug: 'interior-accessories', description: 'Essential interior accessories', icon: 'Layout', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-16', name: 'Fog Lamps', slug: 'fog-lamps', description: 'High-performance fog lamps', icon: 'CloudFog', is_featured: true, product_count: 3, image_url: null },
  { id: 'cat-17', name: 'Bumpers', slug: 'bumpers', description: 'Front and rear bumper upgrades', icon: 'RectangleHorizontal', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-18', name: 'Cameras', slug: 'cameras', description: 'Dashcams and reverse cameras', icon: 'Camera', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-19', name: 'Car Speakers', slug: 'car-speakers', description: 'High-quality car audio speakers', icon: 'Speaker', is_featured: true, product_count: 3, image_url: null },
  { id: 'cat-20', name: 'Window Tints', slug: 'window-tints', description: 'Professional window tinting films', icon: 'Blend', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-21', name: 'Car Covers', slug: 'car-covers', description: 'All-weather car covers', icon: 'Tent', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-22', name: 'Dashboard Accessories', slug: 'dashboard-accessories', description: 'Dashboard organizers and mats', icon: 'LayoutDashboard', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-23', name: 'Gear Shift Covers', slug: 'gear-shift-covers', description: 'Stylish gear shift knob covers', icon: 'Settings', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-24', name: 'Side Mirror Covers', slug: 'side-mirror-covers', description: 'Chrome and carbon side mirror covers', icon: 'FlipHorizontal', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-25', name: 'Door Handle Covers', slug: 'door-handle-covers', description: 'Protective door handle covers', icon: 'DoorOpen', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-26', name: 'Headlight Covers', slug: 'headlight-covers', description: 'Protective headlight films and covers', icon: 'Flashlight', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-27', name: 'Tail Light Covers', slug: 'tail-light-covers', description: 'Tail light tints and covers', icon: 'CircleDot', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-28', name: 'Roof Racks', slug: 'roof-racks', description: 'Cargo roof racks and crossbars', icon: 'Layers', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-29', name: 'Mud Flaps', slug: 'mud-flaps', description: 'Heavy-duty mud flaps and splash guards', icon: 'Droplet', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-30', name: 'Number Plate Frames', slug: 'number-plate-frames', description: 'Premium number plate frames', icon: 'Frame', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-31', name: 'Sun Shades', slug: 'sun-shades', description: 'Foldable windshield sun shades', icon: 'Sun', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-32', name: 'Tissue Box Holders', slug: 'tissue-box-holders', description: 'Elegant tissue box holders', icon: 'Box', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-33', name: 'Phone Holders', slug: 'phone-holders', description: 'Magnetic and suction phone mounts', icon: 'Smartphone', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-34', name: 'Car Chargers', slug: 'car-chargers', description: 'Fast car chargers and adapters', icon: 'BatteryCharging', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-35', name: 'Trunk Organizers', slug: 'trunk-organizers', description: 'Collapsible trunk storage organizers', icon: 'Package', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-36', name: 'Neck Pillows', slug: 'neck-pillows', description: 'Memory foam neck rest pillows', icon: 'Pilcrow', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-37', name: 'Steering Wheel Locks', slug: 'steering-wheel-locks', description: 'Anti-theft steering wheel locks', icon: 'Lock', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-38', name: 'Car Vacuum Cleaners', slug: 'car-vacuum-cleaners', description: 'Portable car vacuum cleaners', icon: 'Wind', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-39', name: 'Jump Starters', slug: 'jump-starters', description: 'Portable jump starter power banks', icon: 'Zap', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-40', name: 'Tyre Inflators', slug: 'tyre-inflators', description: 'Portable tyre inflator pumps', icon: 'Gauge', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-41', name: 'Tool Kits', slug: 'tool-kits', description: 'Complete car tool kits', icon: 'Wrench', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-42', name: 'Paint Protection Film', slug: 'paint-protection-film', description: 'PPF for paint protection', icon: 'Shield', is_featured: false, product_count: 2, image_url: null },
  { id: 'cat-43', name: 'Vinyl Wraps', slug: 'vinyl-wraps', description: 'Color change and decorative vinyl wraps', icon: 'Palette', is_featured: false, product_count: 2, image_url: null },
];

// ===== VEHICLE MAKES =====
export const dummyVehicleMakes: VehicleMake[] = [
  { id: 'make-1', name: 'Toyota', slug: 'toyota', logo_url: null },
  { id: 'make-2', name: 'Honda', slug: 'honda', logo_url: null },
  { id: 'make-3', name: 'Suzuki', slug: 'suzuki', logo_url: null },
  { id: 'make-4', name: 'Hyundai', slug: 'hyundai', logo_url: null },
  { id: 'make-5', name: 'KIA', slug: 'kia', logo_url: null },
  { id: 'make-6', name: 'MG', slug: 'mg', logo_url: null },
  { id: 'make-7', name: 'Changan', slug: 'changan', logo_url: null },
  { id: 'make-8', name: 'Daihatsu', slug: 'daihatsu', logo_url: null },
];

export const dummyVehicleModels: VehicleModel[] = [
  { id: 'mod-1', make_id: 'make-1', name: 'Corolla', slug: 'corolla', body_type: 'Sedan' },
  { id: 'mod-2', make_id: 'make-1', name: 'Yaris', slug: 'yaris', body_type: 'Sedan' },
  { id: 'mod-3', make_id: 'make-1', name: 'Fortuner', slug: 'fortuner', body_type: 'SUV' },
  { id: 'mod-4', make_id: 'make-1', name: 'Hilux', slug: 'hilux', body_type: 'Pickup' },
  { id: 'mod-5', make_id: 'make-1', name: 'Aqua', slug: 'aqua', body_type: 'Hatchback' },
  { id: 'mod-6', make_id: 'make-2', name: 'Civic', slug: 'civic', body_type: 'Sedan' },
  { id: 'mod-7', make_id: 'make-2', name: 'City', slug: 'city', body_type: 'Sedan' },
  { id: 'mod-8', make_id: 'make-2', name: 'BR-V', slug: 'br-v', body_type: 'SUV' },
  { id: 'mod-9', make_id: 'make-2', name: 'HR-V', slug: 'hr-v', body_type: 'Crossover' },
  { id: 'mod-10', make_id: 'make-2', name: 'Vezel', slug: 'vezel', body_type: 'Crossover' },
  { id: 'mod-11', make_id: 'make-3', name: 'Alto', slug: 'alto', body_type: 'Hatchback' },
  { id: 'mod-12', make_id: 'make-3', name: 'Cultus', slug: 'cultus', body_type: 'Hatchback' },
  { id: 'mod-13', make_id: 'make-3', name: 'Swift', slug: 'swift', body_type: 'Hatchback' },
  { id: 'mod-14', make_id: 'make-3', name: 'WagonR', slug: 'wagon-r', body_type: 'Hatchback' },
  { id: 'mod-15', make_id: 'make-3', name: 'Bolan', slug: 'bolan', body_type: 'Van' },
  { id: 'mod-16', make_id: 'make-4', name: 'Tucson', slug: 'tucson', body_type: 'SUV' },
  { id: 'mod-17', make_id: 'make-4', name: 'Elantra', slug: 'elantra', body_type: 'Sedan' },
  { id: 'mod-18', make_id: 'make-4', name: 'Sonata', slug: 'sonata', body_type: 'Sedan' },
  { id: 'mod-19', make_id: 'make-5', name: 'Sportage', slug: 'sportage', body_type: 'SUV' },
  { id: 'mod-20', make_id: 'make-5', name: 'Picanto', slug: 'picanto', body_type: 'Hatchback' },
  { id: 'mod-21', make_id: 'make-5', name: 'Stonic', slug: 'stonic', body_type: 'Crossover' },
  { id: 'mod-22', make_id: 'make-5', name: 'Sorento', slug: 'sorento', body_type: 'SUV' },
  { id: 'mod-23', make_id: 'make-6', name: 'HS', slug: 'hs', body_type: 'SUV' },
  { id: 'mod-24', make_id: 'make-6', name: 'ZS', slug: 'zs', body_type: 'Crossover' },
  { id: 'mod-25', make_id: 'make-6', name: 'GT', slug: 'gt', body_type: 'Sedan' },
  { id: 'mod-26', make_id: 'make-7', name: 'Alsvin', slug: 'alsvin', body_type: 'Sedan' },
  { id: 'mod-27', make_id: 'make-7', name: 'Oshan X7', slug: 'oshan-x7', body_type: 'SUV' },
  { id: 'mod-28', make_id: 'make-7', name: 'Karvaan', slug: 'karvaan', body_type: 'MPV' },
  { id: 'mod-29', make_id: 'make-8', name: 'Mira', slug: 'mira', body_type: 'Hatchback' },
  { id: 'mod-30', make_id: 'make-8', name: 'Move', slug: 'move', body_type: 'Hatchback' },
];

// Generate vehicles for each model with years 2014-2025
export const dummyVehicles: Vehicle[] = dummyVehicleModels.flatMap(model => {
  const make = dummyVehicleMakes.find(m => m.id === model.make_id)!;
  return Array.from({ length: 12 }, (_, i) => {
    const year = 2014 + i;
    return {
      id: `veh-${model.id}-${year}`,
      model_id: model.id,
      make_id: model.make_id,
      year,
      display_name: `${make.name} ${model.name} ${year}`,
    };
  });
});

// ===== BRANCHES =====
export const dummyBranches: Branch[] = [
  { id: 'branch-1', name: 'Lahore Branch', city: 'Lahore', address: 'Shop #12, Main Boulevard, Gulberg III, Lahore', phone: '+92 300 1234567', lat: 31.5204, lng: 74.3587 },
  { id: 'branch-2', name: 'Quetta Branch', city: 'Quetta', address: 'Shop #5, Jinnah Road, Quetta', phone: '+92 300 7654321', lat: 30.1798, lng: 66.975 },
];

// ===== HELPER to create product =====
let productCounter = 0;
function createProduct(
  name: string,
  categorySlug: string,
  basePrice: number,
  compareAt: number | null,
  opts: Partial<{
    is_featured: boolean;
    is_installable: boolean;
    variants: Array<{ name: string; color?: string; color_hex?: string; size?: string; price?: number; compare_at?: number | null }>;
    universal: boolean;
    makeIds: string[];
  }> = {}
): Product {
  productCounter++;
  const id = `prod-${productCounter}`;
  const cat = dummyCategories.find(c => c.slug === categorySlug)!;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const variants: ProductVariant[] = (opts.variants || [{ name: 'Default' }]).map((v, i) => ({
    id: `var-${id}-${i}`,
    product_id: id,
    name: v.name,
    sku: `SKU-${productCounter}-${i}`,
    price: v.price || basePrice,
    compare_at_price: v.compare_at !== undefined ? v.compare_at : compareAt,
    color: v.color || null,
    color_hex: v.color_hex || null,
    size: v.size || null,
    stock: Math.floor(Math.random() * 50) + 5,
    is_default: i === 0,
  }));

  const compatibility: ProductCompatibility[] = opts.universal !== false
    ? [{ id: `comp-${id}-u`, product_id: id, make_id: null, model_id: null, vehicle_id: null, is_universal: true }]
    : (opts.makeIds || ['make-1', 'make-2']).map((mId, i) => ({
        id: `comp-${id}-${i}`, product_id: id, make_id: mId, model_id: null, vehicle_id: null, is_universal: false,
      }));

  return {
    id, name, slug,
    description: `Premium quality ${name.toLowerCase()} for your vehicle. Perfect fit and easy installation. Backed by Allah-Hu-Autos quality guarantee.`,
    category_id: cat.id,
    category_slug: categorySlug,
    images: [{ id: `img-${id}-1`, url: `/placeholder.svg`, alt: name, is_primary: true }],
    variants,
    compatibility,
    is_featured: opts.is_featured || false,
    is_installable: opts.is_installable || false,
    avg_rating: Math.round((3.5 + Math.random() * 1.5) * 10) / 10,
    review_count: Math.floor(Math.random() * 50) + 1,
    created_at: '2025-01-15T00:00:00Z',
  };
}

// ===== PRODUCTS (100+) =====
export const dummyProducts: Product[] = [
  // LED Lights (5)
  createProduct('9005 HB3 LED Headlight Bulbs', 'led-lights', 3500, 4500, { is_featured: true, is_installable: true, variants: [{ name: 'Cool White', color: 'White', color_hex: '#ffffff' }, { name: 'Ice Blue', color: 'Blue', color_hex: '#00bfff' }] }),
  createProduct('H11 LED Fog Light Bulbs', 'led-lights', 2800, 3500, { is_installable: true, variants: [{ name: '6000K White' }, { name: '3000K Yellow' }] }),
  createProduct('LED DRL Strip Light 60cm', 'led-lights', 1200, 1800, { is_featured: true }),
  createProduct('Interior LED Light Kit 12-Piece', 'led-lights', 2500, null, { is_installable: true }),
  createProduct('LED Door Welcome Logo Projector', 'led-lights', 1800, 2200, { universal: false, makeIds: ['make-1', 'make-2', 'make-5'] }),

  // Seat Covers (4)
  createProduct('Premium Leather Seat Cover Set', 'seat-covers', 18000, 24000, { is_featured: true, is_installable: true, variants: [{ name: 'Black', color: 'Black', color_hex: '#000000' }, { name: 'Beige', color: 'Beige', color_hex: '#d4b896' }, { name: 'Red+Black', color: 'Red', color_hex: '#e11d48' }] }),
  createProduct('Universal Mesh Seat Cover Pair', 'seat-covers', 3500, 4500, { variants: [{ name: 'Black' }, { name: 'Grey' }] }),
  createProduct('Cooling Gel Seat Cushion', 'seat-covers', 4500, 5500, {}),
  createProduct('Waterproof Neoprene Seat Cover', 'seat-covers', 8000, 10000, { is_installable: true }),

  // Car Curtains (2)
  createProduct('Magnetic Privacy Curtain Set', 'car-curtains', 2500, 3200, {}),
  createProduct('Retractable Window Sun Shade', 'car-curtains', 1800, null, {}),

  // Horns (3)
  createProduct('Dual Tone Air Horn', 'horns', 2200, 2800, { is_featured: true, is_installable: true }),
  createProduct('Musical Car Horn 18 Tone', 'horns', 3500, null, { is_installable: true }),
  createProduct('Compact Disc Horn 12V', 'horns', 1500, 1900, { is_installable: true }),

  // Body Kits (4)
  createProduct('Civic Type-R Style Body Kit', 'body-kits', 85000, 100000, { is_featured: true, is_installable: true, universal: false, makeIds: ['make-2'] }),
  createProduct('Universal Side Skirts Pair', 'body-kits', 15000, 20000, { is_installable: true }),
  createProduct('Front Lip Splitter Universal', 'body-kits', 8000, 12000, { is_installable: true }),
  createProduct('Rear Diffuser Carbon Look', 'body-kits', 12000, 16000, { is_installable: true }),

  // Spoilers (2)
  createProduct('Universal GT Wing Spoiler', 'spoilers', 12000, 15000, { is_installable: true }),
  createProduct('Lip Spoiler Trunk Mount', 'spoilers', 5500, 7000, { is_installable: true }),

  // Car Mats (4)
  createProduct('5D Floor Mat Set Custom Fit', 'car-mats', 8500, 12000, { is_featured: true, universal: false, makeIds: ['make-1', 'make-2', 'make-3'], variants: [{ name: 'Black', color: 'Black', color_hex: '#000000' }, { name: 'Beige', color: 'Beige', color_hex: '#d4b896' }] }),
  createProduct('Universal Rubber Mat Set', 'car-mats', 2500, 3500, {}),
  createProduct('3D Trunk Mat Custom', 'car-mats', 4500, 6000, { universal: false }),
  createProduct('Premium Coil Mat Set', 'car-mats', 6500, 8000, {}),

  // Key Covers (2)
  createProduct('TPU Key Cover Toyota', 'key-covers', 800, 1200, { universal: false, makeIds: ['make-1'] }),
  createProduct('Leather Key Case Premium', 'key-covers', 1500, 2000, {}),

  // Security Systems (3)
  createProduct('Car Alarm System with Remote', 'security-systems', 5500, 7500, { is_featured: true, is_installable: true }),
  createProduct('GPS Tracker Real-Time', 'security-systems', 8000, 10000, { is_installable: true }),
  createProduct('Dash Cam Dual Channel 1080p', 'security-systems', 12000, 15000, { is_installable: true }),

  // Car Perfumes (2)
  createProduct('Luxury Vent Clip Perfume', 'car-perfumes', 800, 1200, { variants: [{ name: 'Ocean Breeze' }, { name: 'New Car' }, { name: 'Lavender' }] }),
  createProduct('Hanging Crystal Perfume Bottle', 'car-perfumes', 1200, null, {}),

  // Android Panels (4)
  createProduct('9-inch Android Panel Corolla', 'android-panels', 22000, 28000, { is_featured: true, is_installable: true, universal: false, makeIds: ['make-1'] }),
  createProduct('10-inch Android Panel Civic', 'android-panels', 25000, 32000, { is_installable: true, universal: false, makeIds: ['make-2'] }),
  createProduct('7-inch Universal Android Panel', 'android-panels', 15000, 20000, { is_installable: true }),
  createProduct('Android Panel with Carplay', 'android-panels', 30000, 38000, { is_featured: true, is_installable: true }),

  // Ambient Lights (3)
  createProduct('64 Color Ambient Light Kit', 'ambient-lights', 8500, 12000, { is_featured: true, is_installable: true }),
  createProduct('LED Strip Interior 4-Piece', 'ambient-lights', 2500, 3500, {}),
  createProduct('Door Panel Ambient Lights', 'ambient-lights', 6000, 8000, { is_installable: true }),

  // Steering Covers (2)
  createProduct('Leather Steering Cover D-Shape', 'steering-covers', 1800, 2500, { variants: [{ name: 'Black' }, { name: 'Carbon Look' }] }),
  createProduct('Suede Steering Cover Premium', 'steering-covers', 2500, 3200, {}),

  // Batman Covers (3)
  createProduct('Full Car Batman Cover Sedan', 'batman-covers', 5500, 7000, { is_featured: true }),
  createProduct('Batman Cover SUV/Crossover', 'batman-covers', 7000, 9000, {}),
  createProduct('Batman Cover Hatchback', 'batman-covers', 4500, 6000, {}),

  // Interior Accessories (2)
  createProduct('Center Console Organizer Tray', 'interior-accessories', 2200, 3000, { universal: false }),
  createProduct('Interior Chrome Trim Kit', 'interior-accessories', 3500, 4500, { is_installable: true }),

  // Fog Lamps (3)
  createProduct('LED Fog Lamp H8/H11 Pair', 'fog-lamps', 4500, 6000, { is_featured: true, is_installable: true }),
  createProduct('Projector Fog Lamp Universal', 'fog-lamps', 6500, 8000, { is_installable: true }),
  createProduct('Yellow Fog Lamp Film Tint', 'fog-lamps', 800, null, {}),

  // Bumpers (2)
  createProduct('Front Bumper Guard Chrome', 'bumpers', 5500, 7000, { is_installable: true }),
  createProduct('Rear Bumper Protector Strip', 'bumpers', 1800, 2500, {}),

  // Cameras (2)
  createProduct('Reverse Camera HD Night Vision', 'cameras', 3500, 4500, { is_installable: true }),
  createProduct('360 Bird Eye View Camera System', 'cameras', 25000, 32000, { is_installable: true }),

  // Car Speakers (3)
  createProduct('6.5 inch Component Speaker Set', 'car-speakers', 8500, 11000, { is_featured: true, is_installable: true }),
  createProduct('10 inch Active Subwoofer', 'car-speakers', 15000, 20000, { is_installable: true }),
  createProduct('Door Speaker Upgrade Kit', 'car-speakers', 5500, 7000, { is_installable: true }),

  // Window Tints (2)
  createProduct('Nano Ceramic Window Tint Roll', 'window-tints', 8000, 12000, { is_installable: true }),
  createProduct('Privacy Window Film Dark Black', 'window-tints', 3500, 5000, { is_installable: true }),

  // Car Covers (2)
  createProduct('Waterproof Car Cover Sedan', 'car-covers', 3500, 4500, {}),
  createProduct('Parachute Car Cover All Weather', 'car-covers', 5000, 6500, {}),

  // Dashboard Accessories (2)
  createProduct('Anti-Slip Dashboard Mat', 'dashboard-accessories', 800, 1200, {}),
  createProduct('Dashboard Sunshade Cover', 'dashboard-accessories', 2200, 3000, {}),

  // Gear Shift Covers (2)
  createProduct('Crystal Gear Shift Knob', 'gear-shift-covers', 1500, 2000, { variants: [{ name: 'Clear' }, { name: 'Blue' }] }),
  createProduct('Carbon Fiber Gear Knob Cover', 'gear-shift-covers', 1200, null, {}),

  // Side Mirror Covers (2)
  createProduct('Chrome Side Mirror Cover Pair', 'side-mirror-covers', 2500, 3500, { universal: false }),
  createProduct('Carbon Look Mirror Cap Covers', 'side-mirror-covers', 3000, 4000, { universal: false }),

  // Door Handle Covers (2)
  createProduct('Chrome Door Handle Cover Set', 'door-handle-covers', 2000, 2800, { universal: false }),
  createProduct('Carbon Fiber Door Handle Trim', 'door-handle-covers', 2500, 3200, { universal: false }),

  // Headlight Covers (2)
  createProduct('Headlight Tint Film Smoke', 'headlight-covers', 1200, 1800, {}),
  createProduct('Clear PPF Headlight Protection', 'headlight-covers', 3500, 5000, {}),

  // Tail Light Covers (2)
  createProduct('Tail Light Smoke Tint Film', 'tail-light-covers', 1000, 1500, {}),
  createProduct('LED Tail Light Sequential', 'tail-light-covers', 8000, 10000, { is_installable: true, universal: false }),

  // Roof Racks (2)
  createProduct('Universal Roof Rack Crossbars', 'roof-racks', 8000, 10000, { is_installable: true }),
  createProduct('Roof Box Cargo Carrier', 'roof-racks', 25000, 32000, {}),

  // Mud Flaps (2)
  createProduct('Universal Mud Flap Set', 'mud-flaps', 1200, 1800, {}),
  createProduct('Splash Guard Heavy Duty', 'mud-flaps', 2000, 2500, {}),

  // Number Plate Frames (2)
  createProduct('Stainless Steel Plate Frame', 'number-plate-frames', 800, 1200, {}),
  createProduct('Carbon Fiber Number Plate Frame', 'number-plate-frames', 1500, 2000, {}),

  // Sun Shades (2)
  createProduct('Foldable Windshield Sun Shade', 'sun-shades', 1000, 1500, {}),
  createProduct('UV Protection Side Window Shade', 'sun-shades', 1800, 2200, {}),

  // Tissue Box Holders (2)
  createProduct('Leather Tissue Box Car Mount', 'tissue-box-holders', 1200, 1800, { variants: [{ name: 'Black' }, { name: 'Beige' }] }),
  createProduct('Sun Visor Tissue Holder', 'tissue-box-holders', 800, null, {}),

  // Phone Holders (2)
  createProduct('Magnetic Air Vent Phone Mount', 'phone-holders', 1200, 1800, {}),
  createProduct('Wireless Charging Phone Holder', 'phone-holders', 3500, 4500, {}),

  // Car Chargers (2)
  createProduct('Dual USB Fast Car Charger', 'car-chargers', 800, 1200, {}),
  createProduct('USB-C PD 65W Car Charger', 'car-chargers', 2500, 3200, {}),

  // Trunk Organizers (2)
  createProduct('Collapsible Trunk Organizer', 'trunk-organizers', 2500, 3500, {}),
  createProduct('Boot Organizer with Cooler', 'trunk-organizers', 3500, 4500, {}),

  // Neck Pillows (2)
  createProduct('Memory Foam Neck Pillow Pair', 'neck-pillows', 2500, 3500, { variants: [{ name: 'Black' }, { name: 'Beige' }] }),
  createProduct('Leather Headrest Pillow', 'neck-pillows', 3500, 4500, {}),

  // Steering Wheel Locks (2)
  createProduct('Heavy Duty Steering Lock', 'steering-wheel-locks', 2500, 3500, {}),
  createProduct('Baseball Bat Steering Lock', 'steering-wheel-locks', 1800, 2500, {}),

  // Car Vacuum Cleaners (2)
  createProduct('Portable Car Vacuum 120W', 'car-vacuum-cleaners', 3500, 4500, {}),
  createProduct('Wireless Handheld Car Vacuum', 'car-vacuum-cleaners', 6500, 8000, {}),

  // Jump Starters (2)
  createProduct('12V Jump Starter Power Bank', 'jump-starters', 8000, 10000, {}),
  createProduct('Heavy Duty Jump Starter 2000A', 'jump-starters', 15000, 20000, {}),

  // Tyre Inflators (2)
  createProduct('Digital Tyre Inflator 12V', 'tyre-inflators', 3500, 4500, {}),
  createProduct('Portable Air Compressor Pump', 'tyre-inflators', 5500, 7000, {}),

  // Tool Kits (2)
  createProduct('Emergency Car Tool Kit 50pc', 'tool-kits', 5500, 7000, {}),
  createProduct('Tyre Repair Kit Tubeless', 'tool-kits', 1500, 2000, {}),

  // Paint Protection Film (2)
  createProduct('Clear PPF Film Roll 1.52m', 'paint-protection-film', 15000, 20000, { is_installable: true }),
  createProduct('Matte PPF Film Premium', 'paint-protection-film', 22000, 28000, { is_installable: true }),

  // Vinyl Wraps (2)
  createProduct('Gloss Black Vinyl Wrap Roll', 'vinyl-wraps', 8000, 10000, { is_installable: true }),
  createProduct('Carbon Fiber Vinyl Wrap 3D', 'vinyl-wraps', 5500, 7000, { is_installable: true }),
];

// ===== DUMMY USERS =====
export const dummyUsers: Profile[] = [
  { id: 'user-1', email: 'admin@allahhuautos.pk', full_name: 'Admin User', phone: '+92 300 1234567', avatar_url: null, role: 'admin', created_at: '2024-01-01T00:00:00Z' },
  { id: 'user-2', email: 'ali@gmail.com', full_name: 'Ali Hassan', phone: '+92 301 5551234', avatar_url: null, role: 'customer', created_at: '2025-03-01T00:00:00Z' },
  { id: 'user-3', email: 'fatima@gmail.com', full_name: 'Fatima Khan', phone: '+92 302 5559876', avatar_url: null, role: 'customer', created_at: '2025-06-15T00:00:00Z' },
];

export const dummyAddresses: UserAddress[] = [
  { id: 'addr-1', user_id: 'user-2', label: 'Home', full_name: 'Ali Hassan', phone: '+92 301 5551234', city: 'Lahore', address: 'House 45, Street 12, DHA Phase 5, Lahore', is_default: true },
  { id: 'addr-2', user_id: 'user-2', label: 'Office', full_name: 'Ali Hassan', phone: '+92 301 5551234', city: 'Lahore', address: 'Office 302, Arfa Tower, Lahore', is_default: false },
  { id: 'addr-3', user_id: 'user-3', label: 'Home', full_name: 'Fatima Khan', phone: '+92 302 5559876', city: 'Quetta', address: 'House 8, Samungli Road, Quetta', is_default: true },
];

export const dummyUserVehicles: UserVehicle[] = [
  { id: 'uv-1', user_id: 'user-2', vehicle_id: 'veh-mod-1-2022', make_name: 'Toyota', model_name: 'Corolla', year: 2022, display_name: 'Toyota Corolla 2022' },
  { id: 'uv-2', user_id: 'user-3', vehicle_id: 'veh-mod-6-2023', make_name: 'Honda', model_name: 'Civic', year: 2023, display_name: 'Honda Civic 2023' },
];

// ===== ORDERS =====
export const dummyOrders: Order[] = [
  {
    id: 'order-1', order_number: 'AAO-20260301-0001', user_id: 'user-2', status: 'delivered',
    items: [
      { id: 'oi-1', order_id: 'order-1', product_id: 'prod-1', variant_id: 'var-prod-1-0', product_name: '9005 HB3 LED Headlight Bulbs', variant_name: 'Cool White', image_url: '/placeholder.svg', price: 3500, quantity: 1, install_requested: true, install_type: 'branch', install_charge: 1500 },
    ],
    subtotal: 3500, delivery_fee: 200, install_total: 1500, grand_total: 5200,
    shipping_name: 'Ali Hassan', shipping_phone: '+92 301 5551234', shipping_city: 'Lahore', shipping_address: 'House 45, Street 12, DHA Phase 5',
    branch_id: 'branch-1', notes: null, created_at: '2026-03-01T10:30:00Z',
  },
  {
    id: 'order-2', order_number: 'AAO-20260303-0002', user_id: 'user-2', status: 'shipped',
    items: [
      { id: 'oi-2', order_id: 'order-2', product_id: 'prod-6', variant_id: 'var-prod-6-0', product_name: 'Premium Leather Seat Cover Set', variant_name: 'Black', image_url: '/placeholder.svg', price: 18000, quantity: 1, install_requested: true, install_type: 'home', install_charge: 2000 },
    ],
    subtotal: 18000, delivery_fee: 0, install_total: 2000, grand_total: 20000,
    shipping_name: 'Ali Hassan', shipping_phone: '+92 301 5551234', shipping_city: 'Lahore', shipping_address: 'House 45, Street 12, DHA Phase 5',
    branch_id: null, notes: 'Please call before arriving', created_at: '2026-03-03T14:00:00Z',
  },
  {
    id: 'order-3', order_number: 'AAO-20260305-0003', user_id: 'user-3', status: 'confirmed',
    items: [
      { id: 'oi-3', order_id: 'order-3', product_id: 'prod-31', variant_id: 'var-prod-31-0', product_name: '9-inch Android Panel Corolla', variant_name: 'Default', image_url: '/placeholder.svg', price: 22000, quantity: 1, install_requested: true, install_type: 'branch', install_charge: 1500 },
      { id: 'oi-4', order_id: 'order-3', product_id: 'prod-34', variant_id: 'var-prod-34-0', product_name: '64 Color Ambient Light Kit', variant_name: 'Default', image_url: '/placeholder.svg', price: 8500, quantity: 1, install_requested: true, install_type: 'branch', install_charge: 1500 },
    ],
    subtotal: 30500, delivery_fee: 0, install_total: 3000, grand_total: 33500,
    shipping_name: 'Fatima Khan', shipping_phone: '+92 302 5559876', shipping_city: 'Quetta', shipping_address: 'House 8, Samungli Road, Quetta',
    branch_id: 'branch-2', notes: null, created_at: '2026-03-05T09:00:00Z',
  },
  {
    id: 'order-4', order_number: 'AAO-20260306-0004', user_id: 'user-2', status: 'pending',
    items: [
      { id: 'oi-5', order_id: 'order-4', product_id: 'prod-21', variant_id: 'var-prod-21-0', product_name: '5D Floor Mat Set Custom Fit', variant_name: 'Black', image_url: '/placeholder.svg', price: 8500, quantity: 1, install_requested: false, install_type: null, install_charge: 0 },
    ],
    subtotal: 8500, delivery_fee: 0, install_total: 0, grand_total: 8500,
    shipping_name: 'Ali Hassan', shipping_phone: '+92 301 5551234', shipping_city: 'Lahore', shipping_address: 'Office 302, Arfa Tower, Lahore',
    branch_id: null, notes: null, created_at: '2026-03-06T16:30:00Z',
  },
  {
    id: 'order-5', order_number: 'AAO-20260307-0005', user_id: 'user-3', status: 'processing',
    items: [
      { id: 'oi-6', order_id: 'order-5', product_id: 'prod-27', variant_id: 'var-prod-27-0', product_name: 'Car Alarm System with Remote', variant_name: 'Default', image_url: '/placeholder.svg', price: 5500, quantity: 1, install_requested: true, install_type: 'branch', install_charge: 1500 },
    ],
    subtotal: 5500, delivery_fee: 0, install_total: 1500, grand_total: 7000,
    shipping_name: 'Fatima Khan', shipping_phone: '+92 302 5559876', shipping_city: 'Quetta', shipping_address: 'House 8, Samungli Road, Quetta',
    branch_id: 'branch-2', notes: null, created_at: '2026-03-07T11:00:00Z',
  },
];

// ===== BOOKINGS =====
export const dummyBookings: Booking[] = [
  { id: 'bk-1', booking_number: 'BK-20260305-0001', user_id: 'user-2', branch_id: 'branch-1', service_type: 'installation', status: 'completed', date: '2026-03-05', time_slot: '2:00 PM', customer_name: 'Ali Hassan', customer_phone: '+92 301 5551234', customer_address: null, notes: 'Android panel installation', created_at: '2026-03-03T10:00:00Z' },
  { id: 'bk-2', booking_number: 'BK-20260310-0002', user_id: 'user-3', branch_id: 'branch-2', service_type: 'home_install', status: 'confirmed', date: '2026-03-10', time_slot: '11:00 AM', customer_name: 'Fatima Khan', customer_phone: '+92 302 5559876', customer_address: 'House 8, Samungli Road, Quetta', notes: 'Seat cover installation at home', created_at: '2026-03-06T14:00:00Z' },
  { id: 'bk-3', booking_number: 'BK-20260312-0003', user_id: 'user-2', branch_id: 'branch-1', service_type: 'consultation', status: 'pending', date: '2026-03-12', time_slot: '4:00 PM', customer_name: 'Ali Hassan', customer_phone: '+92 301 5551234', customer_address: null, notes: 'Want to discuss body kit options for Corolla', created_at: '2026-03-07T09:00:00Z' },
];

// ===== REVIEWS =====
export const dummyReviews: Review[] = [
  { id: 'rev-1', product_id: 'prod-1', user_id: 'user-2', user_name: 'Ali H.', rating: 5, comment: 'Excellent quality LED bulbs! Very bright and easy to install.', is_approved: true, created_at: '2026-03-02T00:00:00Z' },
  { id: 'rev-2', product_id: 'prod-6', user_id: 'user-2', user_name: 'Ali H.', rating: 4, comment: 'Great leather quality. Fits perfectly on my Corolla.', is_approved: true, created_at: '2026-03-04T00:00:00Z' },
  { id: 'rev-3', product_id: 'prod-31', user_id: 'user-3', user_name: 'Fatima K.', rating: 5, comment: 'Amazing android panel! The display is crystal clear.', is_approved: true, created_at: '2026-03-06T00:00:00Z' },
  { id: 'rev-4', product_id: 'prod-21', user_id: 'user-3', user_name: 'Fatima K.', rating: 4, comment: 'Floor mats fit well. Good quality material.', is_approved: true, created_at: '2026-03-05T00:00:00Z' },
  { id: 'rev-5', product_id: 'prod-34', user_id: 'user-2', user_name: 'Ali H.', rating: 5, comment: 'The ambient lights completely transformed my car interior!', is_approved: true, created_at: '2026-03-07T00:00:00Z' },
  { id: 'rev-6', product_id: 'prod-11', user_id: 'user-3', user_name: 'Fatima K.', rating: 3, comment: 'Horn is loud but installation took longer than expected.', is_approved: true, created_at: '2026-02-28T00:00:00Z' },
  { id: 'rev-7', product_id: 'prod-27', user_id: 'user-2', user_name: 'Ali H.', rating: 4, comment: 'Good alarm system. App notifications work well.', is_approved: true, created_at: '2026-03-01T00:00:00Z' },
  { id: 'rev-8', product_id: 'prod-14', user_id: 'user-3', user_name: 'Fatima K.', rating: 5, comment: 'Body kit looks fantastic! Professional installation too.', is_approved: true, created_at: '2026-02-25T00:00:00Z' },
  { id: 'rev-9', product_id: 'prod-3', user_id: 'user-2', user_name: 'Ali H.', rating: 4, comment: 'Nice DRL strip, easy to cut and install.', is_approved: false, created_at: '2026-03-07T00:00:00Z' },
  { id: 'rev-10', product_id: 'prod-42', user_id: 'user-3', user_name: 'Fatima K.', rating: 5, comment: 'Speaker quality is amazing for the price!', is_approved: true, created_at: '2026-03-06T00:00:00Z' },
];

// ===== HELPER FUNCTIONS =====
export function getCategoryBySlug(slug: string): Category | undefined {
  return dummyCategories.find(c => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return dummyProducts.filter(p => p.category_slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return dummyProducts.find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return dummyProducts.filter(p => p.is_featured);
}

export function getFeaturedCategories(): Category[] {
  return dummyCategories.filter(c => c.is_featured);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return dummyProducts.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category_slug.includes(q)
  );
}

export function getModelsByMake(makeId: string): VehicleModel[] {
  return dummyVehicleModels.filter(m => m.make_id === makeId);
}

export function getVehiclesByModel(modelId: string): Vehicle[] {
  return dummyVehicles.filter(v => v.model_id === modelId);
}

export function getReviewsByProduct(productId: string): Review[] {
  return dummyReviews.filter(r => r.product_id === productId && r.is_approved);
}

export function isProductCompatible(product: Product, makeId: string | null, modelId: string | null): boolean {
  if (!makeId) return true;
  return product.compatibility.some(c => {
    if (c.is_universal) return true;
    if (c.make_id === makeId) {
      if (!c.model_id) return true;
      if (c.model_id === modelId) return true;
    }
    return false;
  });
}
