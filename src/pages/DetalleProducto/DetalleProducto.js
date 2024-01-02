import React, { useEffect, useState } from 'react';
import { connect, dispatch, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import './DetalleProducto.scss';
import { setAccessToken } from '../../store/actions/authActions.js';
import { obtenerTokenDeAcceso } from '../../services/storeManagerService.js';
import { obtenerProductoPorId } from '../../services/storeManagerService';


const DetalleProducto = ({accessToken}) => {
  const { idarticulo } = useParams();
  const dispatch = useDispatch();
  const email = process.env.REACT_APP_EMAIL;
  const password = process.env.REACT_APP_PASSWORD;
  const [isLoading, setIsLoading] = useState(true);
  const [producto, setProducto] = useState(null);


  useEffect(() => {

    const fetchData = async () => {
      try {
        if (!accessToken) {
          const token = await obtenerTokenDeAcceso(email, password);
          dispatch(setAccessToken(token));
          const response = await obtenerProductoPorId(token, idarticulo);
          setProducto(response);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [accessToken, dispatch]);

  if (!producto) {
    return <p>Cargando...</p>; // Puedes mostrar un indicador de carga mientras se carga el producto
  }
  console.log(producto);
  return (
    <div className="detalle-producto-container">
      <div className="detalle-producto">
        <div className="imagen">
          <img src={`https://storemanager.local/imagenes/articulos/${producto.imagen}`} alt={producto.nombre} />
        </div>
        <div className="informacion">
          <h1>{producto.nombre}</h1>
          <p className="descripcion">{producto.descripcion}</p>
          <div className="detalles">
            <div className="detalle-item">
              <span className="detalle-label">Precio:</span>
              <span className="detalle-valor">${producto.precio}</span>
            </div>
            {/* Agrega más detalles según tus necesidades */}
          </div>
          <button className="btn-comprar">Comprar ahora</button>
          {/* Agrega más elementos, como opciones de compra, detalles técnicos, etc. */}
        </div>
      </div>
    </div>
  );
};

DetalleProducto.propTypes = {
  accessToken: PropTypes.string,
  producto: PropTypes.shape({
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    precio: PropTypes.number,
  }),
};

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken,
  producto: state.product.product,
});

const mapDispatchToProps = (dispatch) => ({
  setAccessToken: (token) => dispatch(setAccessToken(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetalleProducto);
