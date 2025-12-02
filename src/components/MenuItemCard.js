import React, { useState } from 'react'; // <-- ADDED useState

function MenuItemCard({ item }) {
  // State to track whether the item has just been added to the cart
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Prevent adding if it's already showing the success message
    if (isAdded) return;
    
    // 1. Set state to true to show the success message
    setIsAdded(true);

    // 2. Set a timer to hide the success message after 1.5 seconds (1500ms)
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);

    // In a real application, you would send the item data to the cart state here.
  };

  return (
    <div className="menu-card">
      <img 
        src={`/${item.image}`} 
        alt={item.name} 
        className="menu-item-image"
      />
      
      <h3>{item.name}</h3> 
      <p className="price">${item.price.toFixed(2)}</p> 
      
      <button 
        className="add-to-cart-button"
        onClick={handleAddToCart} // <-- ADDED onClick HANDLER
        disabled={isAdded} // Disable button while success message is visible
      >
        {/* Change button text based on the state */}
        {isAdded ? 'Added! ✅' : 'Add to Cart 🛒'}
      </button>
      
      {/* Optional: You can add an explicit success message below the button too: 
      {isAdded && <p className="item-added-message">Item added successfully!</p>}
      */}
    </div>
  );
}

export default MenuItemCard;