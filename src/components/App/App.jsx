import React, { Suspense } from 'react';
import { StyleRoot } from 'radium';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AppHeader  from '../AppHeader/AppHeader';
import AppStepManager from '../AppStepManager/AppStepManager';
import { routes } from '../../utils/constants';
import './App.scss';
import Helpers from '../Helpers/Helpers';
import About from '../About/About';
import { subBasepath } from '../../utils/constants';
const AppFooter = React.lazy(() => import('../AppFooter/AppFooter'));

const App = () =>  {

  return (
    <BrowserRouter basename={process.env.NODE_ENV !== 'development' ? subBasepath : ''}> {/** is for github pages */}
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