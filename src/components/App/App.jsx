import React, { Suspense } from 'react';
import { StyleRoot } from 'radium';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AppHeader  from '../AppHeader/AppHeader';
import AppStepManager from '../AppStepManager';
import { routes } from '../../utils/constants';
import './App.scss';
import Helpers from '../Helpers/Helpers';
import About from '../About/About';
const AppFooter = React.lazy(() => import('../AppFooter'));

/** @todo personal history */
// import PersonalHistory from '../PersonalHistory';
// const PersonalHistory = React.lazy(() => import('../PersonalHistory'));
// useEffect(() => {
  // dispatch(checkUserAuth());
// }, [dispatch]);
/* <Route path={routes.personal}>
  <Suspense fallback={<div>LOADING...</div>}>
    <PersonalHistory />
  </Suspense>
</Route> */

const App = () =>  {

  return (
    <BrowserRouter basename={process.env.NODE_ENV !== 'development' ? 'moneyCounter' : ''}>
      <StyleRoot>
        <div className="App">
          <div className='container'>

            <AppHeader/>

            <Switch>

              <Route path={routes.info}>
                <About />
              </Route>

              <Route path={routes.main}>
                <AppStepManager />
                <Suspense fallback={<div>LOADING...</div>}>
                  <AppFooter />
                </Suspense>
              </Route>

            </Switch>

            <Helpers />

          </div>
        </div>
      </StyleRoot>
    </BrowserRouter>
  );
}

export default App;