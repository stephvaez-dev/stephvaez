import React, { useEffect, useState, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setMenuOpen } from '../../store/actions/menuActions';  // Ajusta la importación según tu estructura de archivos
import MenuItem from './MenuItem/MenuItem';
import './Menu.scss';
import cruzIcon from '../../assets/images/cruz.png';
import arrowMenu from '../../assets/images/arrow.png';

const Menu = ({ menuOpen, setMenuOpen }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const menuRef = useRef(null); // Ref para el elemento del menú

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Hacer clic fuera del menú
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenuOpen(false); // Cerrar el menú cuando cambia el tamaño de la ventana
      } else {
        setMenuOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setMenuOpen]);

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

    setMenuOpen(false);
  };

  const menuItems = [
    { id: 1, label: 'INTRO', targetId: 'intro' },
    { id: 2, label: 'COLECCIÓN', targetId: 'coleccion' },
    { id: 3, label: 'CONTACTO', targetId: 'contacto' },
  ];

  const menuButtonIcon = menuOpen ? (
    <img src={cruzIcon} alt="Cerrar" className='cruzIcon' />
  ) : (
    <>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </>
  );

  const handleArrowMouseEnter = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    }
  };

  /**
   * El div menu tiene una clase open y closed que varia segun si el menu esta abierto o cerrado
   * menuOpen = true (Esta abierto)
   * menuOpen = false (Esta cerrado)
   */

  return (
    <>

      {window.innerWidth > 768 && !menuOpen && (
        <div className='arrowMenuContainer' onMouseEnter={handleArrowMouseEnter}>
          <img src={arrowMenu} alt="Abrir" className='arrowMenu' />
        </div>
      )}
      
      <div ref={menuRef} className={`menu ${menuOpen ? 'open' : 'closed'}`}>
        {window.innerWidth <= 768 && (
          <div className="menu-toggle-container">
            <button className={`menu-toggle ${menuOpen ? 'open' : 'closed'}`} onClick={() => setMenuOpen(!menuOpen)}>
              {menuButtonIcon}
            </button>
          </div>
        )}
        <ul className='menu-list'>
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
    </>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
};

const mapStateToProps = (state) => ({
  menuOpen: state.menu.menuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setMenuOpen: (isOpen) => dispatch(setMenuOpen(isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
