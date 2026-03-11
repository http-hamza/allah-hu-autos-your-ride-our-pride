import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Review } from '@/lib/types';

// Create a new review
export async function createReview(review: Omit<Review, 'id' | 'is_approved' | 'created_at'>) {
  const { data, error } = await supabase
    .from('reviews')
    .insert([{ ...review, is_approved: false }])
    .select();
  if (error) throw error;
  return data?.[0];
}

// Approve a review (admin)
export async function approveReview(reviewId: string) {
  const { error } = await supabase
    .from('reviews')
    .update({ is_approved: true })
    .eq('id', reviewId);
  if (error) throw error;
  return true;
}

// Reject/Delete a review (admin)
export async function deleteReview(reviewId: string) {
  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', reviewId);
  if (error) throw error;
  return true;
}

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
