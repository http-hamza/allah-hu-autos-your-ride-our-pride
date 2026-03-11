import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Category } from '@/lib/types';

async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');
  if (error) throw error;
  return data || [];
}

async function fetchFeaturedCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('is_featured', true)
    .order('name');
  if (error) throw error;
  return data || [];
}

async function fetchCategory(slug: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }
  return data;
}

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
}

export function useFeaturedCategories() {
  return useQuery({
    queryKey: ['categories', 'featured'],
    queryFn: fetchFeaturedCategories,
  });
}

export function useCategory(slug: string) {
  return useQuery({
    queryKey: ['categories', slug],
    queryFn: () => fetchCategory(slug),
    enabled: !!slug,
  });
}

// Admin CRUD functions
export async function createCategory(category: Omit<Category, 'id' | 'product_count'>) {
  const { data, error } = await supabase
    .from('categories')
    .insert([category])
    .select();
  if (error) throw error;
  return data?.[0];
}

export async function updateCategory(categoryId: string, updates: Partial<Category>) {
  const { data, error } = await supabase
    .from('categories')
    .update(updates)
    .eq('id', categoryId)
    .select();
  if (error) throw error;
  return data?.[0];
}

export async function deleteCategory(categoryId: string) {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', categoryId);
  if (error) throw error;
  return true;
}
