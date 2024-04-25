import React, { createContext, useContext, useState } from 'react';

//We create a "cart context" to use it everywhere in the app into children components 
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //The function to allow you to add something in your cart
  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
        // Trouver si l'article est déjà dans le panier
        const existingItemIndex = prevCart.findIndex(cartItem => cartItem.item_id === item.item_id);
        if (existingItemIndex >= 0) {
          // Si l'article est déjà dans le panier, incrémenter seulement la quantité
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantityProduct: updatedCart[existingItemIndex].quantityProduct + quantity
          };
          return updatedCart;
        } else {
          // Ajouter un nouvel article avec une quantité initiale de 1
          return [...prevCart, { ...item, quantityProduct: quantity }];
        }
      });
      console.log(cart)
  };

  const cartCount = cart.reduce((count, item) => count + item.quantityProduct, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
