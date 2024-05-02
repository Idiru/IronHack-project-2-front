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
                <label for="first-name">First Name:</label>
                <br />
                <input
                  type="text"
                  id="first-name"
                  name="firstname"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label for="last-name">Last Name:</label>
                <br />
                <input
                  type="text"
                  id="last-name"
                  name="lastname"
                  placeholder="Smith"
                  required
                />
              </div>
              <div>
                <label for="phone-numbere">Phone Number:</label>
                <br />
                <input
                  type="text"
                  id="phone-number"
                  name="phonenumber"
                  pattern="\d*"
                  minlength="16"
                  maxlength="16"
                  placeholder="111 222 333"
                  required
                  className="number-input"
                />
              </div>
              <div>
                <label for="email-address">Email Address:</label>
                <br />
                <input
                  type="text"
                  id="lemail-address"
                  name="email-address"
                  placeholder="xxxxx@domain.com"
                  required
                />
              </div>
              <div>
                <label for="full-address">Full Address:</label>
                <br />
                <input
                  type="text"
                  id="full-address"
                  name="fulladdress"
                  placeholder="Road name 00, level & apartment door"
                  required
                />
              </div>
              <div>
                <label for="city">City:</label>
                <br />
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  required
                />
              </div>
              <div>
                <label for="state">State:</label>
                <br />
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="state"
                  required
                />
              </div>
              <div>
                <label for="zipcode">Zipcode:</label>
                <br />
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  placeholder="1111-222"
                  required
                />
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
