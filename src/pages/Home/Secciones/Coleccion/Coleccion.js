import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../../../../store/actions/authActions';
import { setCategories } from '../../../../store/actions/categoryActions'; 
import { obtenerTokenDeAcceso, obtenerCategorias } from '../../../../services/storeManagerService';
import Card from '../../../../components/cards/cardCategory';
import './Coleccion.scss';

const Coleccion = ({ accessToken, setAccessToken, categories, setCategories }) => {

  const dispatch = useDispatch();
  const email = process.env.REACT_APP_EMAIL;
  const password = process.env.REACT_APP_PASSWORD;

  useEffect(() => {
    if (!accessToken) {
      obtenerTokenDeAcceso(email, password)
        .then(token => {
          dispatch(setAccessToken(token));
          obtenerCategorias(token)
            .then(response => {
              setCategories(response.data);
            })
            .catch(error => {
              console.error('Error al obtener categorías:', error);
            });
        })
        .catch(error => {
          console.error('Error al obtener el token de acceso:', error);
        });
    }
  }, [accessToken, dispatch]);

  return (
    <div id="coleccion">
      <h1>Colecciones</h1>
      {categories.map(category => (
        <Card
          key={category.id}
          title={category.nombre}
          description={category.descripcion}
          linkTo={`categorias-${category.id}`}
        />
      ))}
    </div>
  );
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
