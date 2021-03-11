import {createStore} from 'redux';
import rootReducer from './reducers';

// const persistedConfig = {
//   key: 'root',
//   storage: storage,
//   timeout: 0,
// };

const initialState = {};

const store = createStore(rootReducer, initialState);

export {store};
