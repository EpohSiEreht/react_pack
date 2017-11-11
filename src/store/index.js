import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '@/reducers/root.js';

let middleware;
if (process.env.NODE_ENV === 'local') {
  middleware = applyMiddleware(thunk, logger);
} else {
  middleware = applyMiddleware(thunk);
}

const store = createStore(rootReducer, middleware);

export default store;
