import { SET_PRODUCTS, OBTENER_PRODUCTO } from '../../constants/actionTypes';

const initialState = {
    products: [],
    product: [],
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case OBTENER_PRODUCTO:
      return {
        ...state,
        product:action.payload,
      }
    default:
      return state;
  }
}

