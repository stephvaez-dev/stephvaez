// CardProducto.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './CardProduct.scss'; // Ajusta la ruta según tu estructura
import { Link } from 'react-router-dom';

const CardProduct = ({id, nombre, precio, imagen, backgroundImage, linkTo }) => {

  const cardStyle = {
    backgroundImage: `https://storemanager.local/imagenes/articulos/${backgroundImage}`,
  };

  return (
    <div className="card-product">
      <img className="card-img-product" src={cardStyle.backgroundImage} alt={nombre} />
      <div className="card-body-product">
        <h3 className="card-title-product">{nombre}</h3>
        <p className="card-price-product">Precio: {precio}</p>
        <div className='ver-detalles-buttom'>
          <Link to={linkTo} className="btn btn-primary">Ver Detalles</Link>
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default CardProduct;
