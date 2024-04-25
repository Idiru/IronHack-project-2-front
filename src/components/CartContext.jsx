import React, { createContext, useContext, useState, useEffect } from 'react';

//We create a "cart context" to use it everywhere in the app into children components 
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(()=> {
    const savedCart = localStorage.getItem('cart'); //We store the cart inside the local strorage to avoid to lose it
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // We store the cart everytime it changes 
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  

  //The function to allow you to add something in your cart
  const addToCart = (item, quantity) => { //take the item and the quantity added 
    setCart((prevCart) => {
        const existingItemIndex = prevCart.findIndex(cartItem => cartItem.item_id === item.item_id); //Check if the item already exists
        if (existingItemIndex >= 0) {
          //If it exists we only add the quantity
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantityProduct: updatedCart[existingItemIndex].quantityProduct + quantity
          };
          return updatedCart;
        } else {
          //If not we add it completely to the cart 
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
