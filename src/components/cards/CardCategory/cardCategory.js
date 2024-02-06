import React from 'react';
import { Link } from 'react-router-dom';
import './cardCategory.scss';

const cardCategory = ({ title, description, linkTo, backgroundImage}) => {

  const cardStyle = {
    backgroundImage: `url(https://storemanager.local/imagenes/categorias/${backgroundImage}`,
  };

  return (
    <div className="card">
      <div className="card-body">
        <span className="card-title">{title}</span>
        <span className="card-text">{description}</span>
      </div>
      <div className='ver-detalles-boton-categoria'>
        <Link to={linkTo} className="btn btn-primary">Ver Detalles</Link>
      </div>
    </div>
  );
};

export default cardCategory;
