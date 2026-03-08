export const BUSINESS = {
  name: 'Allah-Hu-Autos',
  tagline: 'We Take Pride in Your Ride',
  phone: '+92 300 1234567',
  email: 'info@allahhuautos.pk',
  hours: '10:00 AM – 11:00 PM Daily',
  website: 'www.allahhuautos.pk',
  instagram: '@allahhuautos',
  facebook: 'AllahHuAutos',
};

export const DELIVERY = {
  freeThreshold: 5000,
  flatFee: 200,
};

export const INSTALLATION = {
  branch: 1500,
  home: 2000,
};

export const ORDER_STATUSES: Record<string, { label: string; color: string }> = {
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  confirmed: { label: 'Confirmed', color: 'bg-blue-100 text-blue-800' },
  processing: { label: 'Processing', color: 'bg-purple-100 text-purple-800' },
  shipped: { label: 'Shipped', color: 'bg-indigo-100 text-indigo-800' },
  delivered: { label: 'Delivered', color: 'bg-green-100 text-green-800' },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800' },
};

export const BOOKING_STATUSES: Record<string, { label: string; color: string }> = {
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  confirmed: { label: 'Confirmed', color: 'bg-blue-100 text-blue-800' },
  completed: { label: 'Completed', color: 'bg-green-100 text-green-800' },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800' },
};

export const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
  '8:00 PM', '9:00 PM', '10:00 PM',
];

export const CITIES = ['Lahore', 'Quetta', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar'];

export function formatPrice(price: number): string {
  return `Rs ${price.toLocaleString('en-PK')}`;
}

export function calcDiscount(price: number, compareAt: number): number {
  return Math.round(((compareAt - price) / compareAt) * 100);
}

export function generateOrderNumber(): string {
  const d = new Date();
  const date = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const seq = String(Math.floor(Math.random() * 9999) + 1).padStart(4, '0');
  return `AAO-${date}-${seq}`;
}

export function generateBookingNumber(): string {
  const d = new Date();
  const date = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const seq = String(Math.floor(Math.random() * 9999) + 1).padStart(4, '0');
  return `BK-${date}-${seq}`;
}

export function getDeliveryFee(subtotal: number): number {
  return subtotal >= DELIVERY.freeThreshold ? 0 : DELIVERY.flatFee;
}
