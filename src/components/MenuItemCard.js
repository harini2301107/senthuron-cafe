import React from 'react';

function MenuItemCard({ item }) {
  return (
    <div className="menu-card">
      {}
      <img 
          src={`/${item.image}`} 
          alt={item.name} 
          className="menu-item-image"
      />
       
      <h3>{item.name}</h3> 
      <p className="price">${item.price.toFixed(2)}</p> 
    </div>
  );
}

export default MenuItemCard;