import React, {useState} from 'react';
import './Header.scss';
import Menu from './Menu/Menu.js'
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <img src={logo} alt="Logo" className="logo" />
      {menuOpen && (
        <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
          <Menu />
      </div>
      )}
    </div>
  );
};

export default Header;
