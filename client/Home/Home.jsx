import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Home = () => (
  <div>
    <Navigation />
    <h1>You are on the Home page!</h1>
    <Link to="/cart">Cart</Link>
  </div>
);

export default Home;
