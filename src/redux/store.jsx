import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, {}, composeWithDevTools());

export default store;
