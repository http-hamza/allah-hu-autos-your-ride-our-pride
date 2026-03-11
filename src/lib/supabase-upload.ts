import { supabase } from '@/integrations/supabase/client';

export async function uploadImage(file: File, path: string) {
  const { data, error } = await supabase.storage
    .from('product-images')
    .upload(path, file);
  if (error) throw error;
  return data?.path;
}
