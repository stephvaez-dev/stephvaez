import { createStore } from 'redux';
import rootReducer from './reducers/rootReducers'; // Importa tu root reducer aquí

const store = createStore(rootReducer);

export default store;
