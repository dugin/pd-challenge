import { createStore, applyMiddleware } from 'redux';
import reducers from './redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

function isDevelopment(env) {
  return () => env === 'development';
}

const middleWare = [
  thunk,
  createLogger({
    predicate: isDevelopment(process.env.NODE_ENV)
  })
];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

export default createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
