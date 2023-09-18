import './Header.scss';
import './Menu/Menu.scss';
import Menu from './Menu/Menu.js'
import logo from '../../assets/images/logo.png';
import cruzIcon from '../../assets/images/cruz.png';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Definir una variable para el icono del botón
  const menuButtonIcon = menuOpen ? (
    <img src={cruzIcon} alt="Cerrar" className='cruzIcon' />
  ) : (
    <>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </>
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenuOpen(false); // Cerrar el menú cuando cambia el tamaño de la ventana
      } else {
        setMenuOpen(true);
      }
    };

    // Agregar el event listener para el cambio de tamaño de ventana
    window.addEventListener('resize', handleResize);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div className="headerContainer">
        {window.innerWidth <= 768 && (
          <div className="buttonContainer">
            <button className={`menu-toggle ${menuOpen ? 'open' : 'closed'}`} onClick={() => setMenuOpen(!menuOpen)}>
              {menuButtonIcon}
            </button>
          </div>
        )}
        <div className="logoContainer">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      <Menu menuOpen={menuOpen} />
    </div>
  );  
};

export default Header;
