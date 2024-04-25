import React from "react";
import { useCart } from "../components/CartContext";

export default function CartItem() {
  const { cart } = useCart();

  console.log(cart)

  return (
    <div className="container-cart-list">
    {cart.map((product)=> {
      return (
        <div key={product.item_uuid} className="cart-item">
        <img src={product.item_image_url} alt="item-image" />
        <div className="content-cart-item">
          <p className="cart-item-name">{product.item_name}</p>
          <p>{product.item_price}</p>
        </div>
      </div>
      )
    })}
    </div>
  );
}
