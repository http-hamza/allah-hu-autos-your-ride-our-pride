import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingBag, Calendar, Warehouse, Grid3X3, Car, Users, Star, Settings } from 'lucide-react';

const navItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/admin/products', icon: Package, label: 'Products' },
  { to: '/admin/orders', icon: ShoppingBag, label: 'Orders' },
  { to: '/admin/bookings', icon: Calendar, label: 'Bookings' },
  { to: '/admin/inventory', icon: Warehouse, label: 'Inventory' },
  { to: '/admin/categories', icon: Grid3X3, label: 'Categories' },
  { to: '/admin/vehicles', icon: Car, label: 'Vehicles' },
  { to: '/admin/customers', icon: Users, label: 'Customers' },
  { to: '/admin/reviews', icon: Star, label: 'Reviews' },
  { to: '/admin/settings', icon: Settings, label: 'Settings' },
];

export default function AdminLayout() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen">
      <aside className="hidden lg:flex w-64 flex-col gradient-dark border-r border-dark-foreground/10 shrink-0">
        <div className="p-6 border-b border-dark-foreground/10">
          <Link to="/admin" className="font-black text-dark-foreground text-lg">ADMIN <span className="text-primary">PANEL</span></Link>
        </div>
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {navItems.map(n => {
            const active = location.pathname === n.to || (n.to !== '/admin' && location.pathname.startsWith(n.to));
            return (
              <Link key={n.to} to={n.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${active ? 'bg-primary text-primary-foreground' : 'text-dark-foreground/60 hover:text-dark-foreground hover:bg-dark-foreground/5'}`}>
                <n.icon className="h-4 w-4" />{n.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-dark-foreground/10">
          <Link to="/" className="text-sm text-dark-foreground/40 hover:text-dark-foreground transition-colors">← Back to Store</Link>
        </div>
      </aside>
      <main className="flex-1 bg-background overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
