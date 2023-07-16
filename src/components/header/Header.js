import React, {useState} from 'react';
import './Header.scss';
import Menu from './Menu/Menu.js'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      {menuOpen && <Menu />}
    </div>
  );
};

export default Header;
