import { combineReducers } from 'redux';
import productReducers from './Product/reducers';

const reducer = combineReducers({
  allProducts: productReducers,
});

export default reducer;
