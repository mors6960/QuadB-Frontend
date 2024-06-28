import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import the 'thunk' named export from redux-thunk
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
