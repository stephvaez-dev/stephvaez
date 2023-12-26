import { SET_PRODUCTS, OBTENER_PRODUCTO } from '../../constants/actionTypes'; // Define tus propios actionTypes

export function setProducts (products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export function obtenerProductoPorId(product){
  return {
    type:OBTENER_PRODUCTO,
    payload: product,
  }
}

