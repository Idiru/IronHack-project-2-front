// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const useCart = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
