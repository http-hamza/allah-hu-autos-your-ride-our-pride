import { Container } from '@/components/ui/Container';
import { useUserBookings } from '@/hooks/useBookings';
import { useBranches } from '@/hooks/useBranches';
import { useAuth } from '@/contexts/AuthContext';
import { BOOKING_STATUSES } from '@/lib/constants';
import { Link } from 'react-router-dom';

export default function AccountBookingsPage() {
  const { user } = useAuth();
  const { data: bookings = [], isLoading } = useUserBookings(user?.id);
  const { data: branches = [] } = useBranches();

  return (
    <div className="fade-in">
      <Container className="py-10 max-w-2xl">
        <Link to="/account" className="text-sm text-primary hover:underline mb-4 inline-block">← Back to Account</Link>
        <h1 className="text-2xl font-black text-foreground mb-6">My Bookings</h1>
        {isLoading ? (
          <div className="space-y-4">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="rounded-2xl border border-border bg-card p-4 animate-pulse h-20" />)}</div>
        ) : bookings.length === 0 ? (
          <p className="text-muted-foreground text-sm">No bookings yet.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map(b => (
              <div key={b.id} className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground text-sm">{b.booking_number}</span>
                  <span className={`text-xs px-2 py-1 rounded-lg font-medium ${BOOKING_STATUSES[b.status]?.color || ''}`}>{BOOKING_STATUSES[b.status]?.label}</span>
                </div>
                <p className="text-xs text-muted-foreground">{b.date} at {b.time_slot}</p>
                <p className="text-xs text-muted-foreground">{branches.find(br => br.id === b.branch_id)?.name} • {b.service_type.replace('_', ' ')}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
