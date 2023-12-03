import React from 'react';
import './MenuItem.scss'

const MenuItem = ({ label, isActive, onClick }) => {
    const handleClick = () => {
      onClick();
      console.log(isActive);
      };
    
      return (
        <div
          className={`menu-item ${isActive ? 'active' : ''}`}
          onClick={handleClick}
          style={{ position: 'relative' }}
          data-item={label.toUpperCase()}
        >
          <span className="menu-item-label">{label}</span>
          {isActive && <div className="highlight-circle" />}
        </div>
      );
    };
    
    export default MenuItem;
  
    
    
    
    
    
    
    
