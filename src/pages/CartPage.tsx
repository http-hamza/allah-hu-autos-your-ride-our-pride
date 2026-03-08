import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { useCart } from '@/contexts/CartContext';
import { formatPrice, DELIVERY } from '@/lib/constants';
import { Minus, Plus, Trash2, ShoppingBag, Wrench } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal, getInstallTotal, getDeliveryFee, getGrandTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center fade-in">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h1 className="text-2xl font-black text-foreground mb-2">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Add some awesome accessories!</p>
          <Link to="/products" className="btn-primary inline-flex items-center gap-2">Browse Products</Link>
        </div>
      </div>
    );
  }

  const subtotal = getSubtotal();
  const deliveryFee = getDeliveryFee();
  const installTotal = getInstallTotal();
  const grandTotal = getGrandTotal();

  return (
    <div className="fade-in">
      <Container className="py-10">
        <h1 className="text-3xl font-black text-foreground mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.variantId} className="flex gap-4 rounded-2xl border border-border bg-card p-4">
                <Link to={`/products/${item.productSlug}`} className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-secondary">
                  <img src={item.imageUrl || '/placeholder.svg'} alt={item.productName} className="h-full w-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/products/${item.productSlug}`} className="font-bold text-foreground text-sm hover:text-primary transition-colors line-clamp-1">{item.productName}</Link>
                  <p className="text-xs text-muted-foreground">{item.variantName}</p>
                  {item.installRequested && (
                    <div className="flex items-center gap-1 mt-1 text-xs text-primary">
                      <Wrench className="h-3 w-3" />
                      {item.installType === 'home' ? 'Home' : 'Branch'} Install (+{formatPrice(item.installCharge)})
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-3">
                    <div className="inline-flex items-center rounded-lg border border-border">
                      <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} className="h-8 w-8 flex items-center justify-center text-muted-foreground hover:text-foreground"><Minus className="h-3 w-3" /></button>
                      <span className="h-8 w-8 flex items-center justify-center text-xs font-semibold border-x border-border">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="h-8 w-8 flex items-center justify-center text-muted-foreground hover:text-foreground"><Plus className="h-3 w-3" /></button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-foreground">{formatPrice(item.price * item.quantity)}</span>
                      <button onClick={() => removeItem(item.variantId)} className="p-1 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <div className="sticky top-20 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-medium text-foreground">{formatPrice(subtotal)}</span></div>
                {installTotal > 0 && <div className="flex justify-between"><span className="text-muted-foreground">Installation</span><span className="font-medium text-foreground">{formatPrice(installTotal)}</span></div>}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-medium text-foreground">{deliveryFee === 0 ? <span className="text-green-600">FREE</span> : formatPrice(deliveryFee)}</span>
                </div>
                {subtotal < DELIVERY.freeThreshold && (
                  <p className="text-xs text-primary">Add {formatPrice(DELIVERY.freeThreshold - subtotal)} more for free delivery!</p>
                )}
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-bold text-foreground">Grand Total</span>
                  <span className="font-black text-lg text-foreground">{formatPrice(grandTotal)}</span>
                </div>
              </div>
              <Link to="/checkout" className="btn-primary w-full flex items-center justify-center mt-6 h-12">
                Proceed to Checkout
              </Link>
              <Link to="/products" className="block text-center text-sm text-primary hover:underline mt-3">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
