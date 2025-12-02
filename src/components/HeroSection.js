import React from 'react';

function HeroSection({ onOrderClick }) { // <-- ADDED 'onOrderClick' prop here
  return (
    <header className="hero-section">
      <div className="hero-content">
        
        <img 
          src="caf.jpg" 
          alt="Senthuron Cafe exterior" 
          className="hero-cafe-image" 
        /> 
        
        <h1>Senthuron Café</h1> 
        <p>Your Daily Dose of Freshness and Quality Coffee.</p> 
        
        <button 
          className="order-button"
          onClick={onOrderClick} 
        >
          Order Now
        </button> 
      </div>
    </header>
  );
}

export default HeroSection;