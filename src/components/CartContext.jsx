import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; // Importe la fonction v4 et la renomme en uuidv4


//We create a "cart context" to use it everywhere in the app into children components
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart"); //We store the cart inside the local strorage to avoid to lose it
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // We store the cart everytime it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //The function to allow you to add something in your cart
  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const newCart = [...prevCart]; 
      for (let i = 0; i < quantity; i++) { //Add an object for each quantity
        newCart.push({ ...item, item_uuid: uuidv4()}); 
      }
      return newCart;
    });
  };

  const cartCount = cart.reduce(
    (count, item) => count + item.quantityProduct,
    0
  );

  const removeItem = (itemId) => {
    const filteredItems = cart.filter(item => item.item_uuid !== itemId)
    setCart(filteredItems)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
