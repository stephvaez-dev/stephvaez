import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import './DetalleProducto.scss';
import { obtenerProductoPorId } from '../../store/actions/productActions';

const DetalleProducto = ({ producto, obtenerProductoPorId }) => {
  const { idarticulo } = useParams();

  useEffect(() => {
    // Cargar el producto por ID cuando el componente se monta
    if (idarticulo) {
      obtenerProductoPorId(idarticulo);
    }
  }, [idarticulo, obtenerProductoPorId])
  

  if (!producto) {
    return <p>Cargando...</p>; // Puedes mostrar un indicador de carga mientras se carga el producto
  }

  console.log(producto);

  return (
    <div className="detalle-producto-container">
      <div className="detalle-producto">
        <div className="imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="informacion">
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          {/* Puedes agregar más detalles según tus necesidades */}
        </div>
      </div>
    </div>
  );
};

DetalleProducto.propTypes = {
  producto: PropTypes.object,
  obtenerProductoPorId: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  producto: state.product.product,
});

const mapDispatchToProps = (dispatch) => ({
  obtenerProductoPorId: (idarticulo) => dispatch(obtenerProductoPorId(idarticulo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetalleProducto);
