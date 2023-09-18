import React, { useState, useRef } from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.scss';

const Menu = ({ menuOpen }) => {
  const [activeItem, setActiveItem] = useState(null);
  const menuRef = useRef(null);

  const handleItemClick = (item, targetId) => {
    setActiveItem(item);

    if (targetId) {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const menuItems = [
    { id: 1, label: 'INTRO', targetId: 'intro' },
    { id: 2, label: 'COLECCIÓN', targetId: 'coleccion' },
    { id: 3, label: 'CONTACTO', targetId: 'contacto' },
  ];

  return (
    <div className={`menu ${menuOpen ? 'open' : 'closed'}`} ref={menuRef}>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          label={item.label}
          isActive={activeItem === item.id}
          onClick={() => handleItemClick(item.id, item.targetId)}
        />
      ))}
    </div>
  );
};

export default Menu;
