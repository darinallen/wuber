import React from 'react';
import Navigation from '../Navigation/Navigation';
import Widgets from '../Widgets/Widgets';
import './Home.css';

const Home = () => (
  <div>
    <Navigation />
    <h1 className="greeting">Welcome to Wuber, the Uber of widgets!</h1>
    <Widgets />
  </div>
);

export default Home;
