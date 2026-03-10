import { useAllOrders } from '@/hooks/useOrders';
import { formatPrice, ORDER_STATUSES } from '@/lib/constants';

export default function AdminOrders() {
  const { data: orders = [], isLoading } = useAllOrders();

  return (
    <div className="p-6 lg:p-10 fade-in">
      <h1 className="text-2xl font-black text-foreground mb-6">Orders</h1>
      {isLoading ? (
        <div className="rounded-2xl border border-border bg-card p-6 animate-pulse h-40" />
      ) : (
        <div className="rounded-2xl border border-border bg-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-secondary/50"><th className="text-left p-3 font-semibold text-foreground">Order</th><th className="text-left p-3 font-semibold text-foreground hidden sm:table-cell">Customer</th><th className="text-left p-3 font-semibold text-foreground">Status</th><th className="text-right p-3 font-semibold text-foreground">Total</th></tr></thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id} className="border-b border-border last:border-0">
                  <td className="p-3 font-medium text-foreground">{o.order_number}</td>
                  <td className="p-3 text-muted-foreground hidden sm:table-cell">{o.shipping_name}</td>
                  <td className="p-3"><span className={`text-xs px-2 py-1 rounded-lg font-medium ${ORDER_STATUSES[o.status]?.color}`}>{ORDER_STATUSES[o.status]?.label}</span></td>
                  <td className="p-3 text-right font-medium text-foreground">{formatPrice(o.grand_total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
