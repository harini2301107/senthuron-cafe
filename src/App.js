import React, { useRef } from 'react';
import './App.css';
import MenuSection from './components/MenuSection';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';


function App() {
  
  const menuRef = useRef(null);

  
  const handleScrollToMenu = () => {
    menuRef.current.scrollIntoView({
      behavior: 'smooth', 
      block: 'start', 
    });
  };

  return (
    <div className="App">
      {/* 1. Pass the scroll function to the Hero component */}
      <HeroSection onOrderClick={handleScrollToMenu} />

      {/* 2. Attach the reference to the Menu component */}
      <MenuSection ref={menuRef} />

      {/* Other sections */}
      <ContactSection />
    </div>
  );
}

export default App;