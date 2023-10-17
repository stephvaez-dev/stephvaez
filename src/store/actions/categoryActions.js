import { SET_CATEGORIES } from '../../constants/actionTypes'; // Define tus propios actionTypes

export function setCategories (categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};

