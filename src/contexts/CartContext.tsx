import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { CartItem } from '@/lib/types';
import { DELIVERY, INSTALLATION } from '@/lib/constants';

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  getInstallTotal: () => number;
  getDeliveryFee: () => number;
  getGrandTotal: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = 'allah-hu-autos-cart';

function loadCart(): CartItem[] {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setItems(prev => {
      const existing = prev.find(i => i.variantId === item.variantId);
      if (existing) {
        return prev.map(i =>
          i.variantId === item.variantId
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  }, []);

  const removeItem = useCallback((variantId: string) => {
    setItems(prev => prev.filter(i => i.variantId !== variantId));
  }, []);

  const updateQuantity = useCallback((variantId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.variantId !== variantId));
      return;
    }
    setItems(prev => prev.map(i => i.variantId === variantId ? { ...i, quantity } : i));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const getItemCount = useCallback(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const getSubtotal = useCallback(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items]);
  const getInstallTotal = useCallback(() => items.reduce((sum, i) => sum + (i.installRequested ? i.installCharge : 0), 0), [items]);
  const getDeliveryFee = useCallback(() => {
    const sub = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return sub >= DELIVERY.freeThreshold ? 0 : DELIVERY.flatFee;
  }, [items]);
  const getGrandTotal = useCallback(() => {
    const sub = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const inst = items.reduce((sum, i) => sum + (i.installRequested ? i.installCharge : 0), 0);
    const del = sub >= DELIVERY.freeThreshold ? 0 : DELIVERY.flatFee;
    return sub + inst + del;
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, getItemCount, getSubtotal, getInstallTotal, getDeliveryFee, getGrandTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
