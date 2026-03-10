import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Review } from '@/lib/types';

async function fetchProductReviews(productId: string): Promise<Review[]> {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('product_id', productId)
    .eq('is_approved', true)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data || []) as Review[];
}

export function useProductReviews(productId: string | null | undefined) {
  return useQuery({
    queryKey: ['reviews', productId],
    queryFn: () => fetchProductReviews(productId!),
    enabled: !!productId,
  });
}
