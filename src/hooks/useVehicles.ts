import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { VehicleMake, VehicleModel, Vehicle } from '@/lib/types';

async function fetchVehicleMakes(): Promise<VehicleMake[]> {
  const { data, error } = await supabase
    .from('vehicle_makes')
    .select('*')
    .order('name');
  if (error) throw error;
  return data || [];
}

async function fetchVehicleModels(makeId: string): Promise<VehicleModel[]> {
  const { data, error } = await supabase
    .from('vehicle_models')
    .select('*')
    .eq('make_id', makeId)
    .order('name');
  if (error) throw error;
  // Map body_type to the union type expected by the app
  return (data || []).map(m => ({
    ...m,
    body_type: m.body_type as VehicleModel['body_type'],
  }));
}

async function fetchVehiclesByModel(modelId: string): Promise<Vehicle[]> {
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')
    .eq('model_id', modelId)
    .order('year', { ascending: false });
  if (error) throw error;
  return data || [];
}

export function useVehicleMakes() {
  return useQuery({
    queryKey: ['vehicle_makes'],
    queryFn: fetchVehicleMakes,
  });
}

export function useVehicleModels(makeId: string | null) {
  return useQuery({
    queryKey: ['vehicle_models', makeId],
    queryFn: () => fetchVehicleModels(makeId!),
    enabled: !!makeId,
  });
}

export function useVehiclesByModel(modelId: string | null) {
  return useQuery({
    queryKey: ['vehicles', modelId],
    queryFn: () => fetchVehiclesByModel(modelId!),
    enabled: !!modelId,
  });
}
