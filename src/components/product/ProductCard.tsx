import { Link } from 'react-router-dom';
import { ShoppingCart, Check, X as XIcon } from 'lucide-react';
import type { Product } from '@/lib/types';
import { formatPrice, calcDiscount } from '@/lib/constants';
import { useVehicle } from '@/contexts/VehicleContext';
import { isProductCompatible } from '@/lib/product-utils';

export function ProductCard({ product }: { product: Product }) {
  const { makeId, modelId, displayName } = useVehicle();
  const defaultVariant = product.variants.find(v => v.is_default) || product.variants[0];
  const hasDiscount = defaultVariant.compare_at_price && defaultVariant.compare_at_price > defaultVariant.price;
  const discount = hasDiscount ? calcDiscount(defaultVariant.price, defaultVariant.compare_at_price!) : 0;
  const compatible = makeId ? isProductCompatible(product, makeId, modelId) : null;

  return (
    <Link to={`/products/${product.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-border bg-card card-hover card-glow">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.images[0]?.url || '/placeholder.svg'}
            alt={product.name}
            className="h-full w-full object-cover image-zoom"
            loading="lazy"
          />
          {hasDiscount && (
            <span className="absolute top-3 left-3 rounded-lg bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
              -{discount}%
            </span>
          )}
          {compatible !== null && (
            <span className={`absolute top-3 right-3 flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium ${compatible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {compatible ? <Check className="h-3 w-3" /> : <XIcon className="h-3 w-3" />}
              {compatible ? 'Fits' : 'May not fit'}
            </span>
          )}
        </div>
        {/* Info */}
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1">
            {product.category_slug.replace(/-/g, ' ')}
          </p>
          <h3 className="font-bold text-foreground text-sm leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-black text-foreground">{formatPrice(defaultVariant.price)}</span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">{formatPrice(defaultVariant.compare_at_price!)}</span>
            )}
          </div>
          {product.avg_rating > 0 && (
            <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <span className="text-yellow-500">★</span>
              <span>{product.avg_rating}</span>
              <span>({product.review_count})</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
