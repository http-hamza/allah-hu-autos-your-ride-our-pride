import type { Product } from '@/lib/types';

export const PRODUCT_SELECT = `
  *,
  category:categories(slug),
  images:product_images(*),
  variants:product_variants(*),
  compatibility:product_compatibility(*)
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapProduct(p: any): Product {
  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    description: p.description,
    category_id: p.category_id,
    category_slug: p.category?.slug || '',
    images: p.images || [],
    variants: p.variants || [],
    compatibility: p.compatibility || [],
    is_featured: p.is_featured,
    is_installable: p.is_installable,
    avg_rating: p.avg_rating,
    review_count: p.review_count,
    created_at: p.created_at,
  };
}
