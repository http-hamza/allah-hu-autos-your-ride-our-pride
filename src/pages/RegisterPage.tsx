import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { useAuth } from '@/contexts/AuthContext';
import { Car } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(name, email, password);
    toast({ title: 'Account created!' });
    navigate('/');
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center fade-in">
      <Container className="max-w-md">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary"><Car className="h-6 w-6 text-primary-foreground" /></div>
          </div>
          <h1 className="text-2xl font-black text-foreground text-center mb-1">Create Account</h1>
          <p className="text-sm text-muted-foreground text-center mb-6">Join Allah-Hu-Autos today</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <button type="submit" className="btn-primary w-full h-11">Create Account</button>
          </form>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Already have an account? <Link to="/login" className="text-primary hover:underline font-medium">Sign In</Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
