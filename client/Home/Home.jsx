import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>You are on the Home page!</h1>
    <Link to="/about">About</Link>
  </div>
);

export default Home;
