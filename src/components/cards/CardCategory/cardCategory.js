import React from 'react';
import { Link } from 'react-router-dom';
import './cardCategory.scss';

const cardCategory = ({ title, description, linkTo, backgroundImage}) => {

  const cardStyle = {
    backgroundImage: `url(https://storemanager.local/imagenes/categorias/${backgroundImage}`,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-body">
        <span className="card-title">{title}</span>
        <span className="card-text">{description}</span>
        <div className='ver-detalles-buttom'>
          <Link to={linkTo} className="btn btn-primary">Ver Detalles</Link>
        </div>
      </div>
    </div>
  );
};

export default cardCategory;
