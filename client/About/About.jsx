import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => (
  <div className="about">
    <h1>You are on the About page!</h1>
    <Link to="/">Home</Link>
  </div>
);

export default About;
