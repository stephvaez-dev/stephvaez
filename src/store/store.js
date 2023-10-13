import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducers'; // Importa tu root reducer aquí

// Define y configura tu tienda Redux
const store = createStore(rootReducer);

export default store;
