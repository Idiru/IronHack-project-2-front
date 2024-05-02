import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PaymentPage() {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_12345', quantity: 1 }],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });

    if (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <button type="submit">Pay with Stripe</button>
    </form>
  );
}

export default PaymentPage;