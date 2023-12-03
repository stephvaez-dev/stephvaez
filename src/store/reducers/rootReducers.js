import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { categoryReducer } from './categoryReducer';
import { menuReducer } from './menuReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  menu: menuReducer,
});

export default rootReducer;
