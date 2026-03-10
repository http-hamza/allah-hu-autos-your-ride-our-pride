import { Container } from '@/components/ui/Container';
import { useUserAddresses } from '@/hooks/useUserData';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function AccountAddressesPage() {
  const { user } = useAuth();
  const { data: addresses = [], isLoading } = useUserAddresses(user?.id);

  return (
    <div className="fade-in">
      <Container className="py-10 max-w-2xl">
        <Link to="/account" className="text-sm text-primary hover:underline mb-4 inline-block">← Back to Account</Link>
        <h1 className="text-2xl font-black text-foreground mb-6">My Addresses</h1>
        {isLoading ? (
          <div className="space-y-4">{Array.from({ length: 2 }).map((_, i) => <div key={i} className="rounded-2xl border border-border bg-card p-4 animate-pulse h-20" />)}</div>
        ) : addresses.length === 0 ? (
          <p className="text-muted-foreground text-sm">No saved addresses yet.</p>
        ) : (
          <div className="space-y-4">
            {addresses.map(a => (
              <div key={a.id} className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-bold text-foreground text-sm">{a.label}</span>
                  {a.is_default && <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded">Default</span>}
                </div>
                <p className="text-sm text-muted-foreground">{a.full_name} • {a.phone}</p>
                <p className="text-sm text-muted-foreground">{a.address}, {a.city}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
