import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Order } from '@/lib/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapOrder(o: any): Order {
  return {
    id: o.id,
    order_number: o.order_number,
    user_id: o.user_id,
    status: o.status,
    items: o.items || [],
    subtotal: o.subtotal,
    delivery_fee: o.delivery_fee,
    install_total: o.install_total,
    grand_total: o.grand_total,
    shipping_name: o.shipping_name,
    shipping_phone: o.shipping_phone,
    shipping_city: o.shipping_city,
    shipping_address: o.shipping_address,
    branch_id: o.branch_id,
    notes: o.notes,
    created_at: o.created_at,
  };
}

const ORDER_SELECT = `*, items:order_items(*)`;

async function fetchUserOrders(userId: string): Promise<Order[]> {
  const { data, error } = await supabase
    .from('orders')
    .select(ORDER_SELECT)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data || []).map(mapOrder);
}

async function fetchAllOrders(): Promise<Order[]> {
  const { data, error } = await supabase
    .from('orders')
    .select(ORDER_SELECT)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data || []).map(mapOrder);
}

export function useUserOrders(userId: string | null | undefined) {
  return useQuery({
    queryKey: ['orders', 'user', userId],
    queryFn: () => fetchUserOrders(userId!),
    enabled: !!userId,
  });
}

export function useAllOrders() {
  return useQuery({
    queryKey: ['orders', 'all'],
    queryFn: fetchAllOrders,
  });
}

// Admin/User CRUD functions
export async function createOrder(order: Omit<Order, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('orders')
    .insert([order])
    .select();
  if (error) throw error;
  return data?.[0];
}

export async function updateOrder(orderId: string, updates: Partial<Order>) {
  const { data, error } = await supabase
    .from('orders')
    .update(updates)
    .eq('id', orderId)
    .select();
  if (error) throw error;
  return data?.[0];
}

export async function deleteOrder(orderId: string) {
  const { error } = await supabase
    .from('orders')
    .delete()
    .eq('id', orderId);
  if (error) throw error;
  return true;
}
