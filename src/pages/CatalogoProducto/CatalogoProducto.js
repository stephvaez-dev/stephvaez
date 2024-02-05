// ListadoProducto.jsx
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

import { setAccessToken } from '../../store/actions/authActions.js';
import { setProducts } from '../../store/actions/productActions.js';

import CardProducto from '../../components/cards/CardProduct/CardProduct'; // Ajusta la ruta según tu estructura
import Banner from '../../components/Banner/Banner.js';
import FiltroHorizontal from '../../components/Filters/FiltroHorizontal'; // Ajusta la ruta según tu estructura
import './CatalogoProducto.scss'; // Ajusta la ruta según tu estructura
import { obtenerTokenDeAcceso, obtenerProductos } from '../../services/storeManagerService.js';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CatalogoProducto = ({ accessToken, setAccessToken, products }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nombre } = useParams();
  const email = process.env.REACT_APP_EMAIL;
  const password = process.env.REACT_APP_PASSWORD;
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  console.log(nombre);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!accessToken) {
          const token = await obtenerTokenDeAcceso(email, password);
          dispatch(setAccessToken(token));
          const response = await obtenerProductos(token);
          dispatch(setProducts(response));
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [accessToken, dispatch]);


  // Obtén categorías únicas de los productos
  const categorias = [...new Set(products.map((product) => product.idcategoria))];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [precioFiltrado, setPrecioFiltrado] = useState(0);

  const filtrarProductos = () => {
    // Implementa lógica de filtrado según la categoría y el precio
    // ...
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  console.log(products);
  console.log(isMobile);
  return (
    <>
      <Banner texto={`Explora nuestros productos de la coleccion ${nombre}`} />
      <div className="catalogo_productos">

        {/* START FILTRO */}
        <FiltroHorizontal
          categorias={categorias}
          seleccionCategoria={(categoria) => setCategoriaSeleccionada(categorias)}
          filtroPrecio={(precio) => setPrecioFiltrado(precio)}
        />
        {/* END FILTRO. */}


        {isMobile ? (
        <div className="catalogo">
          <ul className='lista_productos'>
            {products &&
              products.map((product) => (
                <li className='item_producto' key={product.idarticulo}>
                  <CardProducto
                    id={product.idarticulo}
                    nombre={product.nombre}
                    description={product.descripcion}
                    precio={product.precio}
                    backgroundImage={product.imagen}
                    linkTo={`/producto/${product.idarticulo}/${product.nombre}`}
                  />
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div className='catalogo'>
          <Slider {...settings}>
            {products &&
              products.map(product => (
                <div key={product.idarticulo}>
                  <CardProducto
                    id={product.idarticulo}
                    nombre={product.nombre}
                    description={product.descripcion}
                    precio={product.precio}
                    backgroundImage={product.imagen}
                    linkTo={`/producto/${product.idarticulo}/${product.nombre}`}
                  />
                </div>
              ))}
          </Slider>
        </div>
      )}
      </div>
    </>
  );
};


CatalogoProducto.propTypes = {
  accessToken: PropTypes.string,
  setAccessToken: PropTypes.func,
  products: PropTypes.array,
  setProducts: PropTypes.func,
};


const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken,
  products: state.product.products
});

const mapDispatchToProps = (dispatch) => ({
  setAccessToken: (token) => dispatch(setAccessToken(token)),
  setProducts: (products) => dispatch(setProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogoProducto);
