import { all } from 'redux-saga/effects';
import Product from './Product/sagas';

export default function* rootSaga() {
  yield all([Product()]);
}
