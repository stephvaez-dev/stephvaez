// En menuReducer.js
import { SET_MENU_OPEN } from '../actions/menuActions';

const initialState = {
  menuOpen: false,
};

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENU_OPEN:
      return {
        ...state,
        menuOpen: action.payload,
      };
    default:
      return state;
  }
};
