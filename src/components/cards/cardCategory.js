import React from 'react';
import { Link } from 'react-router-dom';
import './cardCategory.scss';

const cardCategory = ({ title, description, linkTo }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={linkTo} className="btn btn-primary">Ver Detalles</Link>
      </div>
    </div>
  );
};

export default cardCategory;
