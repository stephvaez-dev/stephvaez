import { SET_CATEGORIES } from '../../constants/actionTypes';

const initialState = {
    categories: [],
};

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case SET_CATEGORIES:
        return {
          ...state,
          categories: action.categories,
        };
      default:
        return state;
    }
  }

