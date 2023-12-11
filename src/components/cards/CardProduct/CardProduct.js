// CardProducto.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './CardProduct.scss'; // Ajusta la ruta según tu estructura

const CardProducto = ({ nombre, precio, imagen }) => {
  return (
    <div className="card">
      <img className="card-img" src={imagen} alt={nombre} />
      <div className="card-body">
        <h3 className="card-title">{nombre}</h3>
        <p className="card-price">Precio: {precio}</p>
      </div>
    </div>
  );
};

CardProducto.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default CardProducto;
