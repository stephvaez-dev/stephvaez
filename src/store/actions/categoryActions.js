// Importa las constantes de acción que necesites
import { SET_CATEGORIES } from '../../constants/actionTypes'; // Define tus propios actionTypes

export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};

