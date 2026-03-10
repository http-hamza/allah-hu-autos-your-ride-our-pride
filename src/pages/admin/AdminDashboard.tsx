import { Container } from '@/components/ui/Container';
import { useAllOrders } from '@/hooks/useOrders';
import { useAllBookings } from '@/hooks/useBookings';
import { useProducts } from '@/hooks/useProducts';
import { formatPrice, ORDER_STATUSES } from '@/lib/constants';
import { Package, ShoppingBag, Calendar, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

function useCustomerCount() {
  return useQuery({
    queryKey: ['admin', 'customer_count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('profiles')
        .select('id', { count: 'exact', head: true })
        .eq('role', 'customer');
      return count || 0;
    },
  });
}

export default function AdminDashboard() {
  const { data: products = [] } = useProducts();
  const { data: orders = [] } = useAllOrders();
  const { data: bookings = [] } = useAllBookings();
  const { data: customerCount = 0 } = useCustomerCount();

  const stats = [
    { icon: Package, label: 'Products', value: products.length, color: 'text-blue-600 bg-blue-50' },
    { icon: ShoppingBag, label: 'Orders', value: orders.length, color: 'text-green-600 bg-green-50' },
    { icon: Calendar, label: 'Bookings', value: bookings.length, color: 'text-purple-600 bg-purple-50' },
    { icon: Users, label: 'Customers', value: customerCount, color: 'text-orange-600 bg-orange-50' },
  ];

  return (
    <div className="p-6 lg:p-10 fade-in">
      <h1 className="text-2xl font-black text-foreground mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map(s => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${s.color} mb-3`}><s.icon className="h-5 w-5" /></div>
            <p className="text-2xl font-black text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <h2 className="text-lg font-bold text-foreground mb-4">Recent Orders</h2>
      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border bg-secondary/50"><th className="text-left p-3 font-semibold text-foreground">Order</th><th className="text-left p-3 font-semibold text-foreground hidden sm:table-cell">Customer</th><th className="text-left p-3 font-semibold text-foreground">Status</th><th className="text-right p-3 font-semibold text-foreground">Total</th></tr></thead>
          <tbody>
            {orders.slice(0, 10).map(o => (
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
    </div>
  );
}
