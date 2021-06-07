import { put, delay }  from 'redux-saga/effects';
import * as authActionTypes from '../authReducer/authActionTypes';

export function* logoutSaga(action) {
  // yield console.log(action);
  yield localStorage.removeItem('userData');
  yield put({
    type: authActionTypes.AUTH_LOGOUT,
  })
}

export function* checkAuthTimeoutSaga(action) {
  // yield console.log("🚀 ~ file: authSaga.js ~ line 13 ~ function*checkAuthTimeoutSaga ~ action", action);
  yield delay(action.expirationTime ); // 1000
  yield put({
    type: authActionTypes.AUTH_LOGOUT,
  });
  // setTimeout(() => {
  //   dispatch(logout());
  // }, expirationTime * 1000)
}