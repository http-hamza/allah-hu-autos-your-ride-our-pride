import { Link, useParams } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmationPage() {
  const { orderNumber } = useParams<{ orderNumber: string }>();

  return (
    <div className="fade-in">
      <Container className="py-20">
        <div className="max-w-lg mx-auto text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-black text-foreground mb-2">Order Placed!</h1>
          <p className="text-muted-foreground mb-4">Thank you for shopping with Allah-Hu-Autos.</p>
          <div className="rounded-2xl border border-border bg-card p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-1">Order Number</p>
            <p className="text-xl font-black text-foreground">{orderNumber}</p>
            <p className="text-sm text-muted-foreground mt-4">We'll send you an update when your order is on its way. Payment via Cash on Delivery.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">Continue Shopping</Link>
            <Link to="/account/orders" className="btn-dark inline-flex items-center gap-2">View My Orders</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
