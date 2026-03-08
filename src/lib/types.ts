export type VehicleMake = {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
};

export type VehicleModel = {
  id: string;
  make_id: string;
  name: string;
  slug: string;
  body_type: 'Sedan' | 'Hatchback' | 'SUV' | 'Crossover' | 'MPV' | 'Pickup' | 'Van';
};

export type Vehicle = {
  id: string;
  model_id: string;
  make_id: string;
  year: number;
  display_name: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  is_featured: boolean;
  product_count: number;
  image_url: string | null;
};

export type ProductImage = {
  id: string;
  url: string;
  alt: string;
  is_primary: boolean;
};

export type ProductVariant = {
  id: string;
  product_id: string;
  name: string;
  sku: string;
  price: number;
  compare_at_price: number | null;
  color: string | null;
  color_hex: string | null;
  size: string | null;
  stock: number;
  is_default: boolean;
};

export type ProductCompatibility = {
  id: string;
  product_id: string;
  make_id: string | null;
  model_id: string | null;
  vehicle_id: string | null;
  is_universal: boolean;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category_id: string;
  category_slug: string;
  images: ProductImage[];
  variants: ProductVariant[];
  compatibility: ProductCompatibility[];
  is_featured: boolean;
  is_installable: boolean;
  avg_rating: number;
  review_count: number;
  created_at: string;
};

export type Branch = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
};

export type Inventory = {
  id: string;
  variant_id: string;
  branch_id: string;
  stock: number;
};

export type Profile = {
  id: string;
  email: string;
  full_name: string;
  phone: string | null;
  avatar_url: string | null;
  role: 'customer' | 'admin' | 'staff' | 'installer';
  created_at: string;
};

export type UserAddress = {
  id: string;
  user_id: string;
  label: string;
  full_name: string;
  phone: string;
  city: string;
  address: string;
  is_default: boolean;
};

export type UserVehicle = {
  id: string;
  user_id: string;
  vehicle_id: string;
  make_name: string;
  model_name: string;
  year: number;
  display_name: string;
};

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  variant_id: string;
  product_name: string;
  variant_name: string;
  image_url: string | null;
  price: number;
  quantity: number;
  install_requested: boolean;
  install_type: 'branch' | 'home' | null;
  install_charge: number;
};

export type Order = {
  id: string;
  order_number: string;
  user_id: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  delivery_fee: number;
  install_total: number;
  grand_total: number;
  shipping_name: string;
  shipping_phone: string;
  shipping_city: string;
  shipping_address: string;
  branch_id: string | null;
  notes: string | null;
  created_at: string;
};

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
export type ServiceType = 'installation' | 'home_install' | 'consultation';

export type Booking = {
  id: string;
  booking_number: string;
  user_id: string;
  branch_id: string;
  service_type: ServiceType;
  status: BookingStatus;
  date: string;
  time_slot: string;
  customer_name: string;
  customer_phone: string;
  customer_address: string | null;
  notes: string | null;
  created_at: string;
};

export type Review = {
  id: string;
  product_id: string;
  user_id: string;
  user_name: string;
  rating: number;
  comment: string;
  is_approved: boolean;
  created_at: string;
};

export type CartItem = {
  variantId: string;
  productId: string;
  productName: string;
  productSlug: string;
  variantName: string;
  imageUrl: string | null;
  price: number;
  quantity: number;
  installRequested: boolean;
  installType: 'branch' | 'home' | null;
  installCharge: number;
};
