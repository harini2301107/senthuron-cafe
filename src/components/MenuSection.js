import React from 'react';
import MenuItemCard from './MenuItemCard';

const menuItems = [
  { id: 1, name: "Classic Espresso", price: 4.50, image: "espresso.jpg" }, 
  { id: 2, name: "Latte Macchiato", price: 5.75, image: "latte.jpg" },    
  { id: 3, name: "Iced Frappe", price: 6.00, image: "frappe.jpg" },      
  { id: 4, name: "Croissant Platter", price: 3.50, image: "croissant.jpg" }, 
];

// 1. Wrap the component in React.forwardRef to receive the scroll reference
const MenuSection = React.forwardRef((props, ref) => {
    return (
        // 2. Attach the ref to the top-level <section> element
        <section className="menu-section" ref={ref}> 
            <h2>Our Signature Menu</h2>
            <div className="menu-grid">
                {menuItems.map(item => (
                    <MenuItemCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
});

export default MenuSection;