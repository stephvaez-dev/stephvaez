import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../../../../store/actions/authActions'; 
import { obtenerTokenDeAcceso } from '../../../../services/auth';
import Card from '../../../../components/cards/cardCategory';
import './Coleccion.scss';
import axios from 'axios';

const Coleccion = ({ accessToken, setAccessToken }) => {
  const dispatch = useDispatch();
  const [categorias, setCategorias] = useState([]);
  const email = process.env.REACT_APP_EMAIL;
  const password = process.env.REACT_APP_PASSWORD;

  const obtenerCategorias = (token) => {
    // Usamos axios para realizar la solicitud de categorías con el token
    axios.post('https://storemanager.local/api/getCategories', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Respuesta de la API Categorias', response.data);
      setCategorias(response.data);
    })
    .catch(error => {
      // Manejo de errores
    });
  };

  useEffect(() => {
    // Primero, verificamos si ya tenemos un token en el estado de Redux
    if (!accessToken) {
      // Si no tenemos un token, obtenemos uno y lo almacenamos en el estado
      obtenerTokenDeAcceso(email, password)
        .then(token => {
          dispatch(setAccessToken(token));
          // Una vez que tenemos el token, realizamos la solicitud de categorías
          obtenerCategorias(token);
        })
        .catch(error => {
          // Manejo de errores
        });
    } else {
      // Si ya tenemos un token, simplemente hacemos la solicitud de categorías
      obtenerCategorias(accessToken);
    }
  }, [accessToken, dispatch]);

  return (
    <div id="coleccion">
      <h1>Colecciones</h1>
      {categorias.map(categoria => (
        <Card
          key={categoria.id}
          title={categoria.nombre}
          description={categoria.descripcion}
          linkTo={`categorias-${categoria.id}`} // Cambia la URL según tu enrutamiento
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
});

const mapDispatchToProps = (dispatch) => ({
  setAccessToken: (token) => dispatch(setAccessToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Coleccion);
