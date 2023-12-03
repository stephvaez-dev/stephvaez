import React, {useEffect, useState, useRef } from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.scss';
import cruzIcon from '../../assets/images/cruz.png';


const Menu = () => {
  const [activeItem, setActiveItem] = useState(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

    // Ocultar el menú después de hacer clic en un elemento
    setMenuOpen(false);

  };

  const menuItems = [
    { id: 1, label: 'INTRO', targetId: 'intro' },
    { id: 2, label: 'COLECCIÓN', targetId: 'coleccion' },
    { id: 3, label: 'CONTACTO', targetId: 'contacto' },
  ];

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
    <div className={`menu ${menuOpen ? 'open' : 'closed'}`} ref={menuRef}>
      {window.innerWidth <= 768 && (
        <div className="menu-toggle-container">
          <button className={`menu-toggle ${menuOpen ? 'open' : 'closed'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuButtonIcon}
          </button>
        </div>
      )}
      <ul className='menu-list' >
        {menuItems.map((item) => (
          <li className='item-list' key={item.id}>
            <MenuItem
              label={item.label}
              isActive={activeItem === item.id}
              onClick={() => handleItemClick(item.id, item.targetId)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
