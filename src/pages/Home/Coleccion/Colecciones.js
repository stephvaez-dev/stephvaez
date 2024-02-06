import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setAccessToken } from '../../../store/actions/authActions';
import { setCategories } from '../../../store/actions/categoryActions';
import { obtenerTokenDeAcceso, obtenerCategorias } from '../../../services/storeManagerService';
import CardCategory from '../../../components/cards/CardCategory/cardCategory';
import './Colecciones.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Colecciones = ({ accessToken, setAccessToken, categories, v }) => {

  const dispatch = useDispatch();
  const email = process.env.REACT_APP_EMAIL;
  const password = process.env.REACT_APP_PASSWORD;
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);


  useEffect(() => {

    const fetchData = async () => {
      try {
        if (!accessToken) {
          const token = await obtenerTokenDeAcceso(email, password);
          dispatch(setAccessToken(token));
          const response = await obtenerCategorias(token);
          dispatch(setCategories(response));
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [accessToken, dispatch]);

  console.log('Props categories:', categories); // Agrega esta línea

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  if (isLoading) {
    // Muestra un indicador de carga mientras se obtienen los datos
    return (
      <div id='coleccion'>
        <h1>Colecciones</h1>
        <div>
          Cargando...
        </div>
      </div>
    );
  }
  console.log(categories);
  return (
    <>
      {isMobile ? (
        <div id="coleccion">
          {categories && categories.map(category => (
            <CardCategory
              key={category.idcategoria}
              title={category.nombre}
              description={category.descripcion}
              linkTo={`coleccion/${category.nombre}`}
              backgroundImage={category.imagen}
            />
          ))}
        </div>
      ) : (
        <div id="coleccion">
          <Slider {...settings}>
            {categories && categories.map(category => (
              <CardCategory
                key={category.idcategoria}
                title={category.nombre}
                description={category.descripcion}
                linkTo={`coleccion/${category.nombre}`}
                backgroundImage={category.imagen}
              />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

// Define las propTypes para las props esperadas
Colecciones.propTypes = {
  accessToken: PropTypes.string,
  setAccessToken: PropTypes.func,
  categories: PropTypes.array,
  setCategories: PropTypes.func,
};


const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken,
  categories: state.category.categories
});

const mapDispatchToProps = (dispatch) => ({
  setAccessToken: (token) => dispatch(setAccessToken(token)),
  setCategories: (categories) => dispatch(setCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(Colecciones);
