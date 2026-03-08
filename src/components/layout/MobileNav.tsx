import { Link } from 'react-router-dom';
import { X, Home, ShoppingBag, Grid3X3, Calendar, Info, LogIn, User, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

type Props = { open: boolean; onClose: () => void };

export function MobileNav({ open, onClose }: Props) {
  const { user, isAdmin, logout } = useAuth();

  if (!open) return null;

  const links = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/products', label: 'All Products', icon: ShoppingBag },
    { to: '/categories/led-lights', label: 'Categories', icon: Grid3X3 },
    { to: '/booking', label: 'Book Service', icon: Calendar },
    { to: '/about', label: 'About Us', icon: Info },
  ];

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-foreground/50" onClick={onClose} />
      <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-card shadow-2xl slide-up">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-black text-foreground">ALLAH-HU AUTOS</span>
          <button onClick={onClose} className="p-2 text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={onClose} className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-colors">
              <l.icon className="h-5 w-5" />
              {l.label}
            </Link>
          ))}
          {isAdmin && (
            <Link to="/admin" onClick={onClose} className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-primary hover:bg-accent rounded-xl transition-colors">
              <Shield className="h-5 w-5" />
              Admin Panel
            </Link>
          )}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          {user ? (
            <div className="space-y-2">
              <Link to="/account" onClick={onClose} className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-colors">
                <User className="h-5 w-5" />
                My Account
              </Link>
              <button onClick={() => { logout(); onClose(); }} className="w-full text-left px-3 py-3 text-sm font-medium text-destructive hover:bg-accent rounded-xl transition-colors">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={onClose} className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-colors">
              <LogIn className="h-5 w-5" />
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
