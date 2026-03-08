import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { dummyBranches } from '@/lib/dummy-data';
import { TIME_SLOTS, generateBookingNumber } from '@/lib/constants';
import { ChevronRight, ChevronLeft, Check, MapPin, Calendar, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [branch, setBranch] = useState('');
  const [service, setService] = useState<'installation' | 'home_install' | 'consultation'>('installation');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', address: '', notes: '' });
  const navigate = useNavigate();
  const { toast } = useToast();

  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() + i + 1);
    return { value: d.toISOString().split('T')[0], label: d.toLocaleDateString('en-PK', { weekday: 'short', day: 'numeric', month: 'short' }) };
  });

  const handleSubmit = () => {
    const num = generateBookingNumber();
    toast({ title: 'Booking Confirmed!', description: `Booking #${num}` });
    navigate('/account/bookings');
  };

  return (
    <div className="fade-in">
      <Container className="py-10 max-w-2xl">
        <h1 className="text-3xl font-black text-foreground mb-2">Book a Service</h1>
        <p className="text-muted-foreground mb-8">Schedule an appointment at our branch</p>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>{step > s ? <Check className="h-4 w-4" /> : s}</div>
              {s < 3 && <div className={`h-1 flex-1 rounded ${step > s ? 'bg-primary' : 'bg-secondary'}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Select Branch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dummyBranches.map(b => (
                  <button key={b.id} onClick={() => setBranch(b.id)} className={`text-left rounded-2xl border p-4 transition-colors ${branch === b.id ? 'border-primary bg-accent' : 'border-border hover:border-primary/50'}`}>
                    <p className="font-semibold text-foreground text-sm">{b.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{b.address}</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Service Type</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {([['installation', 'Branch Install'], ['home_install', 'Home Install'], ['consultation', 'Consultation']] as const).map(([val, label]) => (
                  <button key={val} onClick={() => setService(val)} className={`rounded-2xl border p-4 text-sm font-medium transition-colors ${service === val ? 'border-primary bg-accent text-primary' : 'border-border text-muted-foreground hover:border-primary/50'}`}>{label}</button>
                ))}
              </div>
            </div>
            <button onClick={() => setStep(2)} disabled={!branch} className="btn-primary flex items-center gap-2 ml-auto disabled:opacity-50">Next <ChevronRight className="h-4 w-4" /></button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Select Date</h3>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                {dates.map(d => (
                  <button key={d.value} onClick={() => setDate(d.value)} className={`shrink-0 rounded-xl border px-4 py-3 text-center text-sm transition-colors ${date === d.value ? 'border-primary bg-accent text-primary font-semibold' : 'border-border text-muted-foreground hover:border-primary/50'}`}>{d.label}</button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Select Time</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {TIME_SLOTS.map(t => (
                  <button key={t} onClick={() => setTime(t)} className={`rounded-xl border px-3 py-2 text-sm transition-colors ${time === t ? 'border-primary bg-accent text-primary font-semibold' : 'border-border text-muted-foreground hover:border-primary/50'}`}>{t}</button>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="btn-dark flex items-center gap-2"><ChevronLeft className="h-4 w-4" /> Back</button>
              <button onClick={() => setStep(3)} disabled={!date || !time} className="btn-primary flex items-center gap-2 disabled:opacity-50">Next <ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2"><User className="h-4 w-4 text-primary" /> Your Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
                  <input required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                {service === 'home_install' && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Address *</label>
                    <textarea value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} rows={2} className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Notes (optional)</label>
                  <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} rows={2} className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none" />
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-accent p-4 text-sm space-y-1">
              <p><span className="text-muted-foreground">Branch:</span> <span className="font-medium text-foreground">{dummyBranches.find(b => b.id === branch)?.name}</span></p>
              <p><span className="text-muted-foreground">Service:</span> <span className="font-medium text-foreground capitalize">{service.replace('_', ' ')}</span></p>
              <p><span className="text-muted-foreground">Date:</span> <span className="font-medium text-foreground">{date}</span></p>
              <p><span className="text-muted-foreground">Time:</span> <span className="font-medium text-foreground">{time}</span></p>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="btn-dark flex items-center gap-2"><ChevronLeft className="h-4 w-4" /> Back</button>
              <button onClick={handleSubmit} disabled={!form.name || !form.phone} className="btn-primary flex items-center gap-2 disabled:opacity-50">Confirm Booking</button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
