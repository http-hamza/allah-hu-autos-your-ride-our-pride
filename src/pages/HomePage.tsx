import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { VehicleSelector } from '@/components/vehicle/VehicleSelector';
import { ProductCard } from '@/components/product/ProductCard';
import { getFeaturedProducts, getFeaturedCategories, dummyCategories } from '@/lib/dummy-data';
import { Shield, Truck, Clock, Wrench, CreditCard, HeadphonesIcon, ChevronRight, Lightbulb, Armchair, Volume2, Car, Square, Tablet, Sparkles, Camera } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="h-6 w-6" />, Armchair: <Armchair className="h-6 w-6" />,
  Volume2: <Volume2 className="h-6 w-6" />, Car: <Car className="h-6 w-6" />,
  Square: <Square className="h-6 w-6" />, Shield: <Shield className="h-6 w-6" />,
  Tablet: <Tablet className="h-6 w-6" />, Sparkles: <Sparkles className="h-6 w-6" />,
  Camera: <Camera className="h-6 w-6" />,
};

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 8);
  const featuredCats = getFeaturedCategories();

  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-primary/5 float-animation" />
        <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-primary/10 float-animation" style={{ animationDelay: '2s' }} />
        <Container className="relative py-20 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Premium Car Accessories</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark-foreground leading-tight mb-6 slide-up">
              We Take Pride in <span className="text-gradient">Your Ride</span>
            </h1>
            <p className="text-lg text-dark-foreground/60 mb-8 max-w-lg">Pakistan's trusted destination for premium car accessories. Free delivery on orders above Rs 5,000.</p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                Browse Products <ChevronRight className="h-4 w-4" />
              </Link>
              <Link to="/booking" className="btn-outline-white inline-flex items-center gap-2">
                Book Service
              </Link>
            </div>
            <div className="bg-dark-foreground/5 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-sm font-medium text-dark-foreground/80 mb-3">Find accessories for your vehicle</p>
              <VehicleSelector />
            </div>
          </div>
        </Container>
        {/* Wave */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" fill="hsl(0 0% 98%)" />
        </svg>
      </section>

      {/* Categories */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Shop By Category</p>
            <h2 className="text-3xl font-black text-foreground">Browse Our Collection</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 stagger">
            {featuredCats.map(cat => (
              <Link key={cat.slug} to={`/categories/${cat.slug}`} className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {iconMap[cat.icon] || <Square className="h-6 w-6" />}
                </div>
                <span className="text-xs font-semibold text-center text-foreground">{cat.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/categories/led-lights" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
              View All 43 Categories <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Featured</p>
              <h2 className="text-3xl font-black text-foreground">Top Products</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-primary hover:underline hidden sm:inline-flex items-center gap-1">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 stagger">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Why Us</p>
            <h2 className="text-3xl font-black text-foreground">Why Choose Allah-Hu-Autos</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {[
              { icon: Shield, title: 'Quality Guaranteed', desc: 'Premium products with manufacturer warranty' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Free delivery on orders above Rs 5,000' },
              { icon: Clock, title: 'Open Late', desc: '10 AM to 11 PM, 7 days a week' },
              { icon: Wrench, title: 'Expert Installation', desc: 'Professional installation at our branches' },
              { icon: CreditCard, title: 'Cash on Delivery', desc: 'Pay when you receive your order' },
              { icon: HeadphonesIcon, title: '24/7 Support', desc: 'WhatsApp support anytime you need' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl border border-border bg-card card-hover">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <Container className="py-20 text-center relative">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Professional Service</p>
          <h2 className="text-3xl sm:text-4xl font-black text-dark-foreground mb-4">Need Professional Installation?</h2>
          <p className="text-dark-foreground/60 mb-8 max-w-lg mx-auto">Book an appointment at our Lahore or Quetta branch. Our experts ensure perfect fitment every time.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/booking" className="btn-primary inline-flex items-center gap-2">
              Book Appointment <ChevronRight className="h-4 w-4" />
            </Link>
            <Link to="/products" className="btn-outline-white inline-flex items-center gap-2">
              Browse Products
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
