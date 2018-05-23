import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory'

import thunk from 'redux-thunk'
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default rootStore;