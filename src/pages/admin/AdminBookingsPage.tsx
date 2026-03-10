import { useAllBookings } from '@/hooks/useBookings';
import { useBranches } from '@/hooks/useBranches';
import { BOOKING_STATUSES } from '@/lib/constants';

export default function AdminBookings() {
  const { data: bookings = [], isLoading } = useAllBookings();
  const { data: branches = [] } = useBranches();

  return (
    <div className="p-6 lg:p-10 fade-in">
      <h1 className="text-2xl font-black text-foreground mb-6">Bookings</h1>
      {isLoading ? (
        <div className="rounded-2xl border border-border bg-card p-6 animate-pulse h-40" />
      ) : (
        <div className="rounded-2xl border border-border bg-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-secondary/50"><th className="text-left p-3 font-semibold text-foreground">Booking</th><th className="text-left p-3 font-semibold text-foreground hidden sm:table-cell">Customer</th><th className="text-left p-3 font-semibold text-foreground hidden md:table-cell">Branch</th><th className="text-left p-3 font-semibold text-foreground">Status</th><th className="text-left p-3 font-semibold text-foreground hidden sm:table-cell">Date</th></tr></thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id} className="border-b border-border last:border-0">
                  <td className="p-3 font-medium text-foreground">{b.booking_number}</td>
                  <td className="p-3 text-muted-foreground hidden sm:table-cell">{b.customer_name}</td>
                  <td className="p-3 text-muted-foreground hidden md:table-cell">{branches.find(br => br.id === b.branch_id)?.city}</td>
                  <td className="p-3"><span className={`text-xs px-2 py-1 rounded-lg font-medium ${BOOKING_STATUSES[b.status]?.color}`}>{BOOKING_STATUSES[b.status]?.label}</span></td>
                  <td className="p-3 text-muted-foreground hidden sm:table-cell">{b.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
