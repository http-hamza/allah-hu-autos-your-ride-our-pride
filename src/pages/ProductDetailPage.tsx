import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { useProduct } from '@/hooks/useProducts';
import { useProductReviews } from '@/hooks/useReviews';
import { isProductCompatible } from '@/lib/product-utils';
import { useCart } from '@/contexts/CartContext';
import { useVehicle } from '@/contexts/VehicleContext';
import { formatPrice, calcDiscount, INSTALLATION } from '@/lib/constants';
import { ChevronRight, Minus, Plus, Check, X as XIcon, ShoppingCart, Wrench, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, isLoading } = useProduct(slug || '');
  const { data: reviews = [] } = useProductReviews(product?.id);
  const { addItem } = useCart();
  const { makeId, modelId, displayName } = useVehicle();
  const { toast } = useToast();

  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [installRequested, setInstallRequested] = useState(false);
  const [installType, setInstallType] = useState<'branch' | 'home'>('branch');

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center fade-in">
        <div className="text-center text-muted-foreground">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-black text-foreground mb-2">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">Browse Products</Link>
        </div>
      </div>
    );
  }

  const variant = product.variants[selectedVariantIdx];
  const hasDiscount = variant.compare_at_price && variant.compare_at_price > variant.price;
  const discount = hasDiscount ? calcDiscount(variant.price, variant.compare_at_price!) : 0;
  const compatible = makeId ? isProductCompatible(product, makeId, modelId) : null;
  const installCharge = installRequested ? (installType === 'home' ? INSTALLATION.home : INSTALLATION.branch) : 0;
  const totalPrice = variant.price * quantity + installCharge;

  const handleAddToCart = () => {
    addItem({
      variantId: variant.id,
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      variantName: variant.name,
      imageUrl: product.images[0]?.url || null,
      price: variant.price,
      quantity,
      installRequested,
      installType: installRequested ? installType : null,
      installCharge,
    });
    toast({ title: 'Added to cart!', description: `${product.name} × ${quantity}` });
  };

  return (
    <div className="fade-in">
      <Container className="py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={`/categories/${product.category_slug}`} className="hover:text-foreground capitalize">{product.category_slug.replace(/-/g, ' ')}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-secondary">
              <img src={product.images[0]?.url || '/placeholder.svg'} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">{product.category_slug.replace(/-/g, ' ')}</p>
            <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-4">{product.name}</h1>

            {/* Compatibility */}
            {compatible !== null && (
              <div className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium mb-4 ${compatible ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {compatible ? <Check className="h-4 w-4" /> : <XIcon className="h-4 w-4" />}
                {compatible ? `Fits your ${displayName}` : `May not fit your ${displayName}`}
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-black text-foreground">{formatPrice(variant.price)}</span>
              {hasDiscount && (
                <>
                  <span className="text-lg text-muted-foreground line-through">{formatPrice(variant.compare_at_price!)}</span>
                  <span className="rounded-lg bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">-{discount}%</span>
                </>
              )}
            </div>

            {/* Rating */}
            {product.avg_rating > 0 && (
              <div className="flex items-center gap-2 text-sm mb-6">
                <div className="flex text-yellow-500">{Array.from({ length: 5 }, (_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.round(product.avg_rating) ? 'fill-current' : ''}`} />)}</div>
                <span className="text-muted-foreground">{product.avg_rating} ({product.review_count} reviews)</span>
              </div>
            )}

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Variant</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, i) => (
                    <button key={v.id} onClick={() => setSelectedVariantIdx(i)}
                      className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${i === selectedVariantIdx ? 'border-primary bg-accent text-primary' : 'border-border text-muted-foreground hover:border-primary/50'}`}>
                      {v.color_hex && <span className="h-4 w-4 rounded-full border" style={{ backgroundColor: v.color_hex }} />}
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stock */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                {variant.stock > 10 ? <span className="text-green-600 font-medium">In Stock</span> : variant.stock > 0 ? <span className="text-yellow-600 font-medium">Only {variant.stock} left</span> : <span className="text-destructive font-medium">Out of Stock</span>}
                {' '}• Available in store
              </p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Quantity</p>
              <div className="inline-flex items-center rounded-xl border border-border">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-foreground"><Minus className="h-4 w-4" /></button>
                <span className="h-10 w-12 flex items-center justify-center text-sm font-semibold border-x border-border">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-foreground"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            {/* Installation */}
            {product.is_installable && (
              <div className="mb-6 rounded-2xl border border-border p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Add Installation</span>
                  </div>
                  <button onClick={() => setInstallRequested(!installRequested)} className={`h-6 w-11 rounded-full transition-colors ${installRequested ? 'bg-primary' : 'bg-border'}`}>
                    <span className={`block h-5 w-5 rounded-full bg-card shadow transition-transform ${installRequested ? 'translate-x-5' : 'translate-x-0.5'}`} />
                  </button>
                </div>
                {installRequested && (
                  <div className="flex gap-3">
                    <button onClick={() => setInstallType('branch')} className={`flex-1 rounded-xl border p-3 text-sm text-center transition-colors ${installType === 'branch' ? 'border-primary bg-accent' : 'border-border'}`}>
                      <div className="font-semibold text-foreground">Branch Install</div>
                      <div className="text-muted-foreground">{formatPrice(INSTALLATION.branch)}</div>
                    </button>
                    <button onClick={() => setInstallType('home')} className={`flex-1 rounded-xl border p-3 text-sm text-center transition-colors ${installType === 'home' ? 'border-primary bg-accent' : 'border-border'}`}>
                      <div className="font-semibold text-foreground">Home Install</div>
                      <div className="text-muted-foreground">{formatPrice(INSTALLATION.home)}</div>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Total + Add to Cart */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Total:</span>
              <span className="text-2xl font-black text-foreground">{formatPrice(totalPrice)}</span>
            </div>
            <button onClick={handleAddToCart} disabled={variant.stock === 0} className="btn-primary w-full flex items-center justify-center gap-2 h-12 text-base disabled:opacity-50">
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </button>

            {/* Description */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-bold text-foreground mb-3">Description</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Reviews */}
            {reviews.length > 0 && (
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-bold text-foreground mb-4">Reviews ({reviews.length})</h3>
                <div className="space-y-4">
                  {reviews.map(r => (
                    <div key={r.id} className="rounded-xl border border-border p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-sm text-foreground">{r.user_name}</span>
                        <div className="flex text-yellow-500">{Array.from({ length: 5 }, (_, i) => <Star key={i} className={`h-3 w-3 ${i < r.rating ? 'fill-current' : ''}`} />)}</div>
                      </div>
                      <p className="text-sm text-muted-foreground">{r.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
