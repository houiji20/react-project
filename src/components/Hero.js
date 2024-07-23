import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Hero;
