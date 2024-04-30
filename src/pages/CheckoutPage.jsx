import React from "react";
import { useCart } from "../components/CartContext";
import Button from "@mui/material/Button";

function CheckoutPage() {
  const { cart, total } = useCart();

  return (
    <div className="checkout-container">
    <div className="checkout-container-content"> 
      <div className="checkout-image"></div>
      <div className="checkout-items-container">
        <div className="items">
          <h2>In your verdeCART</h2>
          <div>
            {cart.map((item) => {
              console.log(item);
              return (
                <div className="item-line">
                  <p>{item.item_name}</p>
                  <p className="price">{item.item_price}</p>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="vat-line">
            <p>VAT</p>
            <p className="price">€{total * 0.2}</p>
          </div>
          <hr />
          <div className="total-line">
            <p>TOTAL</p>
            <p className="price">€{total * 1.2}</p>
          </div>
        </div>
        <div className="checkout-form-container">
          <form>
            <div>
              <label for="card-holder">Card Holder:</label>
              <br />
              <input
                type="text"
                id="card-holder"
                name="cardholder"
                placeholder="Name on card"
                required
              />
            </div>
            <div>
              <label  for="card-number">Card Number:</label>
              <br />
              <input
                type="text"
                id="card-number"
                name="cardnumber"
                pattern="\d*"
                minlength="16"
                maxlength="16"
                placeholder="1111 2222 3333 4444"
                required
                className="number-input"
              />
            </div>
            <div className="container-expiration-cvc">
              <div>
                <label for="expiration-date">Expiration Date:</label>
                <br />
                <input
                  type="text"
                  id="expiration-date"
                  name="expirationdate"
                  placeholder="MM/YY"
                  required
                  className="date-input"
                />
              </div>
              <div>
                <label for="cvc">CVC:</label>
                <br />
                <input
                  className="cvc-input"
                  type="text"
                  id="cvc"
                  name="cvc"
                  pattern="\d*"
                  minlength="3"
                  maxlength="4"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            <div className="container-button">
              <Button
                className="button"
                variant="contained"
                sx={{ backgroundColor: "#3D6C00", width: "150px" }}
              >
                Checkout
              </Button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
