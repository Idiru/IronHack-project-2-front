import React from "react";
import { useCart } from "../components/CartContext";

function CheckoutPage() {

  const { cart, addToCart, cartCount, removeItem } = useCart()

  return (
    <div>
      <div>
        <h1>
            { cart.map(item => {
            console.log(item)
            return <div>{item.item_name}</div>
          })} 
          </h1>

<div className="row">

<div className="col-md-7">
    <div className="card">
        <div className="card-header">
            <h4>Basic Information</h4>
        </div>
        <div className="card-body">

            <div className="row">
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label> First Name</label>
                        <input type="text" name="firstname" className="form-control" />
                        
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label> Last Name</label>
                        <input type="text" name="lastname" className="form-control" />
                        
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label> Phone Number</label>
                        <input type="phonenumber" name="phonenumber"  className="form-control" />
                        
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label> Email Address</label>
                        <input type="email" name="email"  className="form-control" />
                        
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group mb-3">
                        <label> Full Address</label>
                        <textarea rows="3" name="address" className="form-control"></textarea>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mb-3">
                        <label>City</label>
                        <input type="text" name="city" className="form-control" />
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mb-3">
                        <label>State</label>
                        <input type="text" name="state" className="form-control" />
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mb-3">
                        <label>Zip Code</label>
                        <input type="text" name="zipcode" className="form-control" />
                        
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group text-end">
                        <button type="button" className="btn btn-primary mx-1" onClick={ (e) => submitOrder(e, 'cod') }>Place Order</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={ (e) => submitOrder(e, 'razorpay') }>Pay by Razorpay</button>
                        <button type="button" className="btn btn-warning mx-1" onClick={ (e) => submitOrder(e, 'payonline') }>Pay Online</button>

                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
    </div>         
    </div>
    </div>
  );
}

export default CheckoutPage;
