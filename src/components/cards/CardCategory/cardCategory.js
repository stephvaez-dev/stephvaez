import React from 'react';
import { Link } from 'react-router-dom';
import './cardCategory.scss';

const cardCategory = ({ title, description, linkTo }) => {
  return (
    <div className="card">
      <div className="card-body">
        <span className="card-title">{title}</span>
        <p className="card-text">{description}</p>
        <div className='ver-detalles-buttom'>
          <Link to={linkTo} className="btn btn-primary">Ver Detalles</Link>
        </div>
      </div>
    </div>
  );
};

export default cardCategory;
