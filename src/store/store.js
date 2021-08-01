import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

let middleware = applyMiddleware(promise, thunk);
export const store = createStore(rootReducer, middleware)

