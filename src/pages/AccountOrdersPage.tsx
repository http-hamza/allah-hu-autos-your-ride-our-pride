import { Container } from '@/components/ui/Container';
import { dummyOrders } from '@/lib/dummy-data';
import { formatPrice, ORDER_STATUSES } from '@/lib/constants';
import { Link } from 'react-router-dom';

export default function AccountOrdersPage() {
  return (
    <div className="fade-in">
      <Container className="py-10 max-w-2xl">
        <Link to="/account" className="text-sm text-primary hover:underline mb-4 inline-block">← Back to Account</Link>
        <h1 className="text-2xl font-black text-foreground mb-6">My Orders</h1>
        <div className="space-y-4">
          {dummyOrders.map(o => (
            <div key={o.id} className="rounded-2xl border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-foreground text-sm">{o.order_number}</span>
                <span className={`text-xs px-2 py-1 rounded-lg font-medium ${ORDER_STATUSES[o.status]?.color || ''}`}>{ORDER_STATUSES[o.status]?.label}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{new Date(o.created_at).toLocaleDateString()}</p>
              <div className="text-sm text-muted-foreground">{o.items.length} item{o.items.length > 1 ? 's' : ''}</div>
              <div className="text-right font-bold text-foreground">{formatPrice(o.grand_total)}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
