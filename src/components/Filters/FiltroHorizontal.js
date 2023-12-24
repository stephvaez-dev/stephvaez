// FiltrosHorizontales.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './FiltroHorizontal.scss'; // Ajusta la ruta según tu estructura

const FiltroHorizontal = ({ categorias, seleccionCategoria, filtroPrecio }) => {
  return (
    <div className="filtro_horizontal">
      <div className="filtro_categoria">
        <span>Filtrar por Categoría:</span>
        <select onChange={(e) => seleccionCategoria(e.target.value)}>
          <option value="">Todos</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>
      <div className="filtro_precio">
        <span>Filtrar por Precio:</span>
        <input type="range" min="0" max="100" step="10" onChange={(e) => filtroPrecio(e.target.value)} />
      </div>
    </div>
  );
};

FiltroHorizontal.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.string).isRequired,
  seleccionCategoria: PropTypes.func.isRequired,
  filtroPrecio: PropTypes.func.isRequired,
};

export default FiltroHorizontal;
