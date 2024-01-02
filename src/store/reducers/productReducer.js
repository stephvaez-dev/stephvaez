import { SET_PRODUCTS, GET_PRODUCT } from '../../constants/actionTypes';

const initialState = {
    products: [],
    product: {},
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      case GET_PRODUCT:
        return {
          ...state,
          product:action.payload,
        }
    default:
      return state;
  }
}

