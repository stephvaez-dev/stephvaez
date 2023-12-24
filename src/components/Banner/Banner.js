// Banner.jsx
import React from 'react';
import './Banner.scss';
import { Link } from 'react-router-dom';

const Banner = ({ texto }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{texto}</h1>
        <p>Descubre nuestras increíbles ofertas y productos exclusivos.</p>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
