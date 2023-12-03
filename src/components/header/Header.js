import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    </div>
  );  
};

export default Header;
