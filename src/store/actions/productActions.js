import { SET_PRODUCTS, GET_PRODUCT } from '../../constants/actionTypes'; // Define tus propios actionTypes

export function setProducts (products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export function getProduct(product){
  return {
    type:GET_PRODUCT,
    payload: product,
  }
}

