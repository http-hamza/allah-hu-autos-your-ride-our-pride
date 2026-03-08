import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Profile } from '@/lib/types';
import { dummyUsers } from '@/lib/dummy-data';

type AuthContextType = {
  user: Profile | null;
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Profile | null>(() => {
    try {
      const d = localStorage.getItem('allah-hu-autos-auth');
      return d ? JSON.parse(d) : null;
    } catch { return null; }
  });

  const login = useCallback((email: string, _password: string): boolean => {
    const found = dummyUsers.find(u => u.email === email);
    if (found) {
      setUser(found);
      localStorage.setItem('allah-hu-autos-auth', JSON.stringify(found));
      return true;
    }
    return false;
  }, []);

  const register = useCallback((name: string, email: string, _password: string): boolean => {
    const newUser: Profile = {
      id: `user-${Date.now()}`, email, full_name: name, phone: null,
      avatar_url: null, role: 'customer', created_at: new Date().toISOString(),
    };
    setUser(newUser);
    localStorage.setItem('allah-hu-autos-auth', JSON.stringify(newUser));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('allah-hu-autos-auth');
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAdmin: user?.role === 'admin', login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
