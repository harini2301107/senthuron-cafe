import React from 'react';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection'; 
import ContactSection from './components/ContactSection'; 
import './index.css'; // Make sure this line is here to load your styles

function App() {
  return (
    <div className="App">
      <HeroSection />
      <MenuSection /> 
      <ContactSection /> 
    </div>
  );
}

export default App;