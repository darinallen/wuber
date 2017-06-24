import React from 'react';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import './Cart.css';

const Cart = () => (
  <div>
    <Navigation />
    <Hero title="Cart" subtitle="Place an Order" />
    <div className="cart-content">
      <h1>You are on the Cart page!</h1>
    </div>
  </div>
);

export default Cart;
