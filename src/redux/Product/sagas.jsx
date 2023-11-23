import { takeEvery, all } from 'redux-saga/effects';
import actions from './actions';
import { sagaWorker } from '../../utils/http';
import services from './../services';

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_PRODUCTS, (actionData) =>
      sagaWorker({
        endpoint: services.productList,
        type: 'GET',
        data: actionData?.payload,
        action: actions.SET_PRODUCTS,
      })
    ),
    takeEvery(actions.GET_SELECTED_PRODUCT, (actionData) =>
      sagaWorker({
        endpoint: `${services.baseUrl}/products/${actionData?.id}`,
        type: 'GET',
        data: actionData?.payload,
        action: actions.SET_SELECTED_PRODUCT,
      })
    ),
  ]);
}

// endpoint: `${services.baseUrl}/products/${actionData?.id}`,
