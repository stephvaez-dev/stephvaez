import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setAccessToken } from '../../../store/actions/authActions';
import { setCategories } from '../../../store/actions/categoryActions'; 
import { obtenerTokenDeAcceso, obtenerCategorias } from '../../../services/storeManagerService';
import Card from '../../../components/cards/CardCategory/cardCategory';
import './Coleccion.scss';

const Coleccion = ({ accessToken, setAccessToken, categories, setCategories }) => {

  const dispatch = useDispatch();
  const email = process.env.REACT_APP_EMAIL;
  const password = process.env.REACT_APP_PASSWORD;
  const [isLoading, setIsLoading] = useState(true);
  
  
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
    <div id="coleccion">
      {categories && categories.map(category => (
        <Card
          key={category.idcategoria}
          title={category.nombre}
          description={category.descripcion}
          linkTo={`categorias-${category.idcategoria}`}
          backgroundImage={category.imagen}
        />
      ))}
    </div>
  );
};

// Define las propTypes para las props esperadas
Coleccion.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Coleccion);
