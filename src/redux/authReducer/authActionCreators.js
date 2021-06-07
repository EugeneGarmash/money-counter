
import testaxios from '../../utils/testaxios';
import axios from 'axios';
import {
  SET_PERSONAL_DATA,

  AUTH_FETCHING,
  AUTH_SUCCESS,
  AUTH_ERROR,

  AUTH_LOGOUT,

  SAVE_USER_SALARY,
} from './authActionTypes';
import {
  AUTH_INITIATE_LOGOUT,
  AUTH_CHECK_TIMEOUT,
} from '../sagaActionTypes';
import { toggleAppSpinner } from '../appReducer/appReducer';
import { closeModal, AUTH_MODAL } from '../modalReducer/modalReducer';
import {saveUserToStorage} from '../../utils/saveUserToStorage';


const key = 'AIzaSyA9xEWlTDvAfOlaBojNIUvUS9zTctNfnUk'

export const setPersonalData = payload => {
  return {
      type: SET_PERSONAL_DATA,
      payload,
  }
}

// export const getSalaries = token => (dispatch, getState) => {
//   const userId = getState().auth.success.localId; // !!!
//   if (!userId) {
//     return;
//   }
//   testaxios.get(`/salaries/${userId}.json`)
//       .then(response => {
//           // console.log("getPersonalData -> response", response.data);
//           return dispatch(setPersonalData(response.data));
//       });
// }

export const setAuthFetching = () => ({ type: AUTH_FETCHING });
export const setAuthSuccess = payload => ({ type: AUTH_SUCCESS, payload, }); // refreshToken
export const setAuthError = payload => ({ type: AUTH_ERROR, payload, });

export const saveUserSalary = userSalaryData => (dispatch, getState) => {
  // const userEmail = getState().auth.success.email;
  const localId = getState().auth.success.localId;

  fetch(`https://eugene-s-project-72ed7.firebaseio.com/salaries/${localId}.json`,
    {
      method: 'POST',
      body: JSON.stringify({
        secondsPassed: userSalaryData.secondsPassed,
        salaryValue: userSalaryData.salaryValue,
        counterValue: userSalaryData.counterValue,
      }),
    }
  )
    .then(response => {
    })
    .catch(error => {
    })
}

export const logout = () => {
  // localStorage.removeItem('userData')
  return {
    // type: AUTH_LOGOUT,
    type: AUTH_INITIATE_LOGOUT,
  }
};

export const checkAuthTimeout = expirationTime => (dispatch) => {
  // setTimeout(() => {
  //   dispatch(logout());
  // }, expirationTime * 1000)

  console.log('checkAuthTimeout');

  return {
    type: AUTH_CHECK_TIMEOUT,
    expirationTime: 10,
  }
}

// export const getNewToken = () => {
//   // success.
// }

export const checkUserAuth = () => dispatch => {
  const userData = JSON.parse(localStorage.getItem('userData' || {}));
  if (!userData || !userData.token || !userData.expirationDate) {
    dispatch(logout());
  } else {
    const expirationDate = new Date(userData.expirationDate);
    if ( expirationDate > new Date()) {
      dispatch(setAuthSuccess(userData));
    } else {
      // get new token!
      // dispatch(logout());
    }
  }
  // return
}

export const postPersonalData = (mode, userData) => dispatch => {
  const modeIsSignUp = mode === 'signup';
  const authData = {
    email: userData.email,
    password: userData.password,
    returnSecureToken: true,
  }

  dispatch(toggleAppSpinner());

  const baseURL = modeIsSignUp
    ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
    : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`

  axios.post(baseURL, authData)
    .then(response => {
      const {
        idToken,
        expiresIn,
        email,
        localId,
      } = response.data;

      dispatch(setAuthSuccess({ idToken, email, expiresIn, localId }))
      dispatch(checkAuthTimeout(expiresIn)); // ?
      dispatch(toggleAppSpinner());
      dispatch(closeModal(AUTH_MODAL));
      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      saveUserToStorage({
        token: response.data.idToken,
        expirationDate,
        email,
        localId,
      });
    })
    .catch(error => {
      dispatch(setAuthError(error.response.data.error));
      dispatch(toggleAppSpinner());
    });
  ;
}