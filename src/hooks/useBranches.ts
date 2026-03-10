import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Branch } from '@/lib/types';

async function fetchBranches(): Promise<Branch[]> {
  const { data, error } = await supabase
    .from('branches')
    .select('*')
    .order('name');
  if (error) throw error;
  return data || [];
}

export function useBranches() {
  return useQuery({
    queryKey: ['branches'],
    queryFn: fetchBranches,
  });
}
