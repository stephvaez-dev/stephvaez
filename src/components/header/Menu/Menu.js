import React, { useState, useRef  } from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.scss'

const Menu = () => {
  const [activeItem, setActiveItem] = useState(null);
  const menuRef = useRef(null);

  const handleItemClick = (item) => {
    setActiveItem(item);

    if (menuRef.current) {
      const menuItem = menuRef.current.querySelector(`[data-item="${item}"]`);
      if (menuItem) {
        menuItem.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const menuItems = [
    { id: 1, label: 'INTRO' },
    { id: 2, label: 'COLLECTION' },
    { id: 3, label: 'CONTACTO' },
    // Agrega más ítems de menú según sea necesario
  ];

  return (
    <div className="menu" ref={menuRef}>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          label={item.label}
          isActive={activeItem === item.id}
          onClick={() => handleItemClick(item.id)}
        />
      ))} 
    </div>
  );
};

export default Menu;
