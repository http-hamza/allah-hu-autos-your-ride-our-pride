import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { useCart } from '@/contexts/CartContext';
import { formatPrice, generateOrderNumber, DELIVERY, CITIES } from '@/lib/constants';
import { dummyBranches } from '@/lib/dummy-data';
import { CreditCard } from 'lucide-react';

export default function CheckoutPage() {
  const { items, getSubtotal, getInstallTotal, getDeliveryFee, getGrandTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', city: 'Lahore', address: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNum = generateOrderNumber();
    clearCart();
    navigate(`/order-confirmation/${orderNum}`);
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="fade-in">
      <Container className="py-10">
        <h1 className="text-3xl font-black text-foreground mb-8">Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Address */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-foreground mb-4">Shipping Address</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                    <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
                    <input required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+92 3XX XXXXXXX" className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">City *</label>
                    <select required value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                      {CITIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-1">Full Address *</label>
                    <textarea required value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} rows={3} className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none" />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-foreground mb-4">Payment Method</h3>
                <div className="flex items-center gap-3 rounded-xl border border-primary bg-accent p-4">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Cash on Delivery</p>
                    <p className="text-xs text-muted-foreground">Pay when you receive your order</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <div className="sticky top-20 rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-foreground mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  {items.map(i => (
                    <div key={i.variantId} className="flex justify-between text-sm">
                      <span className="text-muted-foreground truncate mr-2">{i.productName} ×{i.quantity}</span>
                      <span className="font-medium text-foreground shrink-0">{formatPrice(i.price * i.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-3 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="text-foreground">{formatPrice(getSubtotal())}</span></div>
                  {getInstallTotal() > 0 && <div className="flex justify-between"><span className="text-muted-foreground">Installation</span><span className="text-foreground">{formatPrice(getInstallTotal())}</span></div>}
                  <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span className="text-foreground">{getDeliveryFee() === 0 ? 'FREE' : formatPrice(getDeliveryFee())}</span></div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-bold text-foreground">Grand Total</span>
                    <span className="font-black text-lg text-foreground">{formatPrice(getGrandTotal())}</span>
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center mt-6 h-12 text-base">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}
