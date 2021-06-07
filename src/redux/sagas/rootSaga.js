import { logoutSaga, checkAuthTimeoutSaga } from './authSaga';
import { takeEvery } from 'redux-saga/effects';
import * as sagaActionTypes from '../sagaActionTypes';

export function* watchAuth() {
  yield takeEvery(sagaActionTypes.AUTH_INITIATE_LOGOUT, checkAuthTimeoutSaga);
  // yield takeEvery(sagaActionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  // yield takeEvery(sagaActionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
};