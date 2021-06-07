import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, compose , applyMiddleware } from 'redux';
// import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import rootReducer from './redux/store';
import createSagaMiddleware from 'redux-saga';
import { logoutSaga } from './redux/sagas/authSaga'; // checkAuthTimeoutSaga
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from "redux-devtools-extension";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: boolean
  }
}

// const composeEnhancers =
//   process.env.NODE_ENV === 'development'
//   /** @todo create global ts config */
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null ||
//   // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) ||
//   compose
// ;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(logoutSaga);

ReactDOM.render(
  // <React.StrictMode> {/** renders everything twice */}
    <Provider store={store}>
      <App />
    </Provider>, // coma might be redundant
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
