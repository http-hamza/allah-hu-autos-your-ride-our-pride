import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Booking } from '@/lib/types';

async function fetchUserBookings(userId: string): Promise<Booking[]> {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data || []) as Booking[];
}

async function fetchAllBookings(): Promise<Booking[]> {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data || []) as Booking[];
}

export function useUserBookings(userId: string | null | undefined) {
  return useQuery({
    queryKey: ['bookings', 'user', userId],
    queryFn: () => fetchUserBookings(userId!),
    enabled: !!userId,
  });
}

export function useAllBookings() {
  return useQuery({
    queryKey: ['bookings', 'all'],
    queryFn: fetchAllBookings,
  });
}

// Admin/User CRUD functions
export async function createBooking(booking: Omit<Booking, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([booking])
    .select();
  if (error) throw error;
  return data?.[0];
}

export async function updateBooking(bookingId: string, updates: Partial<Booking>) {
  const { data, error } = await supabase
    .from('bookings')
    .update(updates)
    .eq('id', bookingId)
    .select();
  if (error) throw error;
  return data?.[0];
}

export async function deleteBooking(bookingId: string) {
  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);
  if (error) throw error;
  return true;
}
