"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleWishlist: (id: string) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  cartTotal: number;
}

const StoreContext = createContext<StoreContextType>({} as StoreContextType);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem("nexus_cart");
    const savedWishlist = localStorage.getItem("nexus_wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("nexus_cart", JSON.stringify(cart));
    localStorage.setItem("nexus_wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(id);
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        setIsCartOpen,
        cartTotal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
