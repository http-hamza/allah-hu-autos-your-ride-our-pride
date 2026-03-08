import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, ChevronDown, Car } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useVehicle } from '@/contexts/VehicleContext';
import { MobileNav } from './MobileNav';
import { VehicleSelectorBar } from './VehicleSelectorBar';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getItemCount } = useCart();
  const { user, isAdmin } = useAuth();
  const { displayName } = useVehicle();
  const navigate = useNavigate();
  const itemCount = getItemCount();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Car className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-black tracking-tight text-foreground leading-none">ALLAH-HU</div>
                <div className="text-xs font-bold text-primary leading-none">AUTOS</div>
              </div>
            </Link>

            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search accessories..."
                  className="w-full h-10 rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </form>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link to="/products" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent">
                Products
              </Link>
              <Link to="/categories/led-lights" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent">
                Categories
              </Link>
              <Link to="/booking" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent">
                Book Service
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent">
                About
              </Link>
              {isAdmin && (
                <Link to="/admin" className="px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-lg hover:bg-accent">
                  Admin
                </Link>
              )}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link to="/search" className="md:hidden p-2 text-muted-foreground hover:text-foreground">
                <Search className="h-5 w-5" />
              </Link>

              {user ? (
                <Link to="/account" className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent">
                  <User className="h-5 w-5" />
                </Link>
              ) : (
                <Link to="/login" className="hidden sm:inline-flex px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent">
                  Login
                </Link>
              )}

              <Link to="/cart" className="relative p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground badge-pulse">
                    {itemCount}
                  </span>
                )}
              </Link>

              <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-muted-foreground hover:text-foreground">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {displayName && <VehicleSelectorBar />}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
