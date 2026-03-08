import { Container } from '@/components/ui/Container';
import { dummyBranches } from '@/lib/dummy-data';
import { BUSINESS } from '@/lib/constants';
import { MapPin, Phone, Clock, Shield, Wrench, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="fade-in">
      <section className="gradient-hero py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">About Us</p>
          <h1 className="text-4xl font-black text-dark-foreground mb-4">Allah-Hu-Autos</h1>
          <p className="text-lg text-dark-foreground/60 max-w-xl">{BUSINESS.tagline}. Pakistan's trusted destination for premium car accessories and professional installation services.</p>
        </Container>
      </section>
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 stagger">
          {[
            { icon: Shield, title: 'Quality First', desc: 'We source only the highest quality accessories from trusted manufacturers.' },
            { icon: Wrench, title: 'Expert Installation', desc: 'Our trained technicians ensure perfect fitment every time.' },
            { icon: Heart, title: 'Customer Love', desc: 'Thousands of satisfied customers across Lahore and Quetta.' },
          ].map(i => (
            <div key={i.title} className="rounded-2xl border border-border bg-card p-6 card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary mb-4"><i.icon className="h-6 w-6" /></div>
              <h3 className="font-bold text-foreground mb-2">{i.title}</h3>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-black text-foreground mb-6">Our Branches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dummyBranches.map(b => (
            <div key={b.id} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground mb-3">{b.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary shrink-0" />{b.address}</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary shrink-0" />{b.phone}</p>
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary shrink-0" />{BUSINESS.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
