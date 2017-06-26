import React from 'react';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import './Cart.css';

const Cart = () => (
  <div>
    <Navigation />
    <Hero title="Cart" subtitle="Place an Order" />
    <div className="cart-content">
      <h2>Welcome to the Cart page</h2>
    </div>
  </div>
);

export default Cart;
