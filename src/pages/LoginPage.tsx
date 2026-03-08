import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { useAuth } from '@/contexts/AuthContext';
import { Car } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (login(email, password)) {
      toast({ title: 'Welcome back!' });
      navigate('/');
    } else {
      setError('Invalid credentials. Try admin@allahhuautos.pk or ali@gmail.com');
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center fade-in">
      <Container className="max-w-md">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary"><Car className="h-6 w-6 text-primary-foreground" /></div>
          </div>
          <h1 className="text-2xl font-black text-foreground text-center mb-1">Welcome Back</h1>
          <p className="text-sm text-muted-foreground text-center mb-6">Sign in to your account</p>
          {error && <p className="text-sm text-destructive bg-destructive/10 rounded-lg p-3 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <button type="submit" className="btn-primary w-full h-11">Sign In</button>
          </form>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Don't have an account? <Link to="/register" className="text-primary hover:underline font-medium">Register</Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
