import { Container } from '@/components/ui/Container';
import { dummyUserVehicles } from '@/lib/dummy-data';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

export default function AccountVehiclesPage() {
  return (
    <div className="fade-in">
      <Container className="py-10 max-w-2xl">
        <Link to="/account" className="text-sm text-primary hover:underline mb-4 inline-block">← Back to Account</Link>
        <h1 className="text-2xl font-black text-foreground mb-6">My Garage</h1>
        <div className="space-y-4">
          {dummyUserVehicles.map(v => (
            <div key={v.id} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary"><Car className="h-6 w-6" /></div>
              <div>
                <p className="font-bold text-foreground text-sm">{v.display_name}</p>
                <p className="text-xs text-muted-foreground">{v.make_name} {v.model_name} {v.year}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
