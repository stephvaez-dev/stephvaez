// ListadoProducto.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardProducto from '../../components/cards/CardProduct/CardProduct'; // Ajusta la ruta según tu estructura
import './ListadoProducto.scss'; // Ajusta la ruta según tu estructura

const ListadoProducto = () => {
  const navigate = useNavigate();
  const { nombreCategoria } = useParams();

  // Simula datos de productos (ajusta según tus necesidades)
  const productos = [
    { nombre: 'Producto 1', precio: 20, imagen: 'imagen1.jpg' },
    { nombre: 'Producto 2', precio: 30, imagen: 'imagen2.jpg' },
    // ... más productos
  ];

  return (
    <div>
      <div className="productos-lista">
        {productos.map((producto, index) => (
          <CardProducto key={index} {...producto} />
        ))}
      </div>
    </div>
  );
};

export default ListadoProducto;
