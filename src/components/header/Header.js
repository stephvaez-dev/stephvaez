import './Header.scss';
import './Menu/Menu.scss';
import Menu from './Menu/Menu.js'
import logo from '../../assets/images/logo.png';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(true); 
      } else {
        setMenuOpen(false); 
      }
    };

    // Agregar el event listener para el cambio de tamaño de ventana
    window.addEventListener('resize', handleResize);

    // Llamar a handleResize al montar el componente para establecer el estado inicial
    handleResize();

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
      {window.innerWidth <= 768 && (
        <button className={`menu-toggle ${menuOpen ? 'open' : 'closed'}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      )}
      <img src={logo} alt="Logo" className="logo" />
      <Menu menuOpen={menuOpen} />
    </div>
  );
};

export default Header;

