import { SET_PRODUCTS } from '../../constants/actionTypes'; // Define tus propios actionTypes

export function setProducts (products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

