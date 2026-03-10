import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BUSINESS } from '@/lib/constants';
import { useBranches } from '@/hooks/useBranches';
import { useFeaturedCategories } from '@/hooks/useCategories';

export function Footer() {
  const { data: branches = [] } = useBranches();
  const { data: featuredCats = [] } = useFeaturedCategories();

  return (
    <footer className="gradient-dark text-dark-foreground">
      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-black text-lg text-dark-foreground leading-none">ALLAH-HU</div>
                <div className="text-sm font-bold text-primary leading-none">AUTOS</div>
              </div>
            </div>
            <p className="text-sm text-dark-foreground/60 mb-4">{BUSINESS.tagline}</p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-dark-foreground/10 text-dark-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-dark-foreground/10 text-dark-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-dark-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              {featuredCats.map(c => (
                <li key={c.slug}>
                  <Link to={`/categories/${c.slug}`} className="text-sm text-dark-foreground/60 hover:text-primary transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-dark-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm text-dark-foreground/60 hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/booking" className="text-sm text-dark-foreground/60 hover:text-primary transition-colors">Book Service</Link></li>
              <li><Link to="/about" className="text-sm text-dark-foreground/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/cart" className="text-sm text-dark-foreground/60 hover:text-primary transition-colors">Shopping Cart</Link></li>
              <li><Link to="/account" className="text-sm text-dark-foreground/60 hover:text-primary transition-colors">My Account</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-dark-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {branches.map(b => (
                <li key={b.id} className="flex gap-2 text-sm text-dark-foreground/60">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  <span>{b.address}</span>
                </li>
              ))}
              <li className="flex gap-2 text-sm text-dark-foreground/60">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>{BUSINESS.phone}</span>
              </li>
              <li className="flex gap-2 text-sm text-dark-foreground/60">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>{BUSINESS.hours}</span>
              </li>
              <li className="flex gap-2 text-sm text-dark-foreground/60">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>{BUSINESS.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-dark-foreground/10">
        <Container className="py-4">
          <p className="text-center text-xs text-dark-foreground/40">© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
