import type { Product } from './types';

export function isProductCompatible(
  product: Product,
  makeId: string | null,
  modelId: string | null,
): boolean {
  const compat = product.compatibility;
  if (!compat || compat.length === 0) return true;
  if (compat.some(c => c.is_universal)) return true;
  if (modelId && compat.some(c => c.model_id === modelId)) return true;
  if (makeId && compat.some(c => c.make_id === makeId && !c.model_id)) return true;
  return false;
}
