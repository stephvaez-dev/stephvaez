import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../../../../store/actions/authActions'; 
import { obtenerTokenDeAcceso } from '../../../../services/auth';
import axios from 'axios'; // Asegúrate de importar axios

const Coleccion = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const [categorias, setCategorias] = useState([]);
  const email = process.env.REACT_APP_EMAIL;
  const password = process.env.REACT_APP_PASSWORD;

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

  const obtenerCategorias = (token) => {
    // Usamos axios para realizar la solicitud de categorías con el token
    axios.get('http://storemanager.local/api/getCategories', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setCategorias(response.data);
      console.log(response.data);
    })
    .catch(error => {
      // Manejo de errores
    });
  };

  return (
    <div id="coleccion">
      <ul>
        {categorias.map(categoria => (
          <li key={categoria.id}>{categoria.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Coleccion;
