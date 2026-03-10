import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { UserAddress, UserVehicle } from '@/lib/types';

async function fetchUserAddresses(userId: string): Promise<UserAddress[]> {
  const { data, error } = await supabase
    .from('user_addresses')
    .select('*')
    .eq('user_id', userId)
    .order('is_default', { ascending: false });
  if (error) throw error;
  return (data || []) as UserAddress[];
}

async function fetchUserVehicles(userId: string): Promise<UserVehicle[]> {
  const { data, error } = await supabase
    .from('user_vehicles')
    .select('*')
    .eq('user_id', userId);
  if (error) throw error;
  return (data || []) as UserVehicle[];
}

export function useUserAddresses(userId: string | null | undefined) {
  return useQuery({
    queryKey: ['user_addresses', userId],
    queryFn: () => fetchUserAddresses(userId!),
    enabled: !!userId,
  });
}

export function useUserVehicles(userId: string | null | undefined) {
  return useQuery({
    queryKey: ['user_vehicles', userId],
    queryFn: () => fetchUserVehicles(userId!),
    enabled: !!userId,
  });
}
