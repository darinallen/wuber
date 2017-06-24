import React from 'react';
import { string } from 'prop-types';
import './Hero.css';

const Hero = props => (
  <div className="hero">
    <div className="hero-text">
      <h1 className="hero-title">{props.title}</h1>
      <h2 className="hero-subtitle">{props.subtitle}</h2>
    </div>
  </div>
);

Hero.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired
};

export default Hero;
