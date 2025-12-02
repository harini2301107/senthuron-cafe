import React from 'react';

function MenuItemCard({ item }) {
  return (
    <div className="menu-card">
      {/* The button is placed inside the card for better visual grouping.
      It doesn't need logic here, as the logic is handled by MenuSection.js
      */}
      <img 
        src={`/${item.image}`} 
        alt={item.name} 
        className="menu-item-image"
      />
      
      <h3>{item.name}</h3> 
      <p className="price">${item.price.toFixed(2)}</p> 
      
      {/* ADDED: The Add to Cart Button UI */}
      <button className="add-to-cart-button">
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default MenuItemCard;