import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { PRODUCT_SELECT, mapProduct } from './productMapper';

async function searchProducts(query: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select(PRODUCT_SELECT)
    .ilike('name', `%${query}%`)
    .order('is_featured', { ascending: false })
    .limit(50);
  if (error) throw error;
  return (data || []).map(mapProduct);
}

export function useSearchProducts(query: string) {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => searchProducts(query),
    enabled: query.trim().length > 0,
  });
}
