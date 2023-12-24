import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { categoryReducer } from './categoryReducer';
import { productReducer } from './productReducer';
import { menuReducer } from './menuReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  menu: menuReducer,
  product:productReducer
});

export default rootReducer;
