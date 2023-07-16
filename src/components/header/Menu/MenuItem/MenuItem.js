import React from 'react';
import './MenuItem.scss'

const MenuItem = ({ label, isActive, onClick }) => {
    const handleClick = () => {
        onClick();
      };
    
      return (
        <div
          className={`menu-item ${isActive ? 'active' : ''}`}
          onClick={handleClick}
          style={{ position: 'relative' }}
          data-item={label.toUpperCase()}
        >
          {label}
          {isActive && <div className="highlight-circle" />}
        </div>
      );
    };
    
    export default MenuItem;
  
    
    
    
    
    
    
    
