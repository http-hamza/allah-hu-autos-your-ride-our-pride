import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { useAuth } from '@/contexts/AuthContext';
import { ShoppingBag, Calendar, Car, MapPin, LogOut, ChevronRight } from 'lucide-react';

export default function AccountPage() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-black text-foreground mb-2">Please Login</h1>
          <Link to="/login" className="text-primary hover:underline">Go to Login</Link>
        </div>
      </div>
    );
  }

  const links = [
    { to: '/account/orders', icon: ShoppingBag, label: 'My Orders', desc: 'View order history' },
    { to: '/account/bookings', icon: Calendar, label: 'My Bookings', desc: 'View service bookings' },
    { to: '/account/vehicles', icon: Car, label: 'My Garage', desc: 'Saved vehicles' },
    { to: '/account/addresses', icon: MapPin, label: 'My Addresses', desc: 'Manage addresses' },
  ];

  return (
    <div className="fade-in">
      <Container className="py-10 max-w-2xl">
        <div className="rounded-2xl border border-border bg-card p-6 mb-6">
          <h1 className="text-2xl font-black text-foreground">{user.full_name}</h1>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
        <div className="space-y-3">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 hover:border-primary/30 transition-colors card-hover">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary"><l.icon className="h-5 w-5" /></div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{l.label}</p>
                  <p className="text-xs text-muted-foreground">{l.desc}</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
        <button onClick={logout} className="w-full mt-6 flex items-center justify-center gap-2 rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </Container>
    </div>
  );
}
