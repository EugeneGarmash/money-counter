import React, { Suspense, useContext, useEffect, useState } from 'react';
// import StyleRoot from 'radium';
import Radium from 'radium';
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
import { useDispatch } from 'react-redux';
import { getTranslations, defaultLang } from '../../redux/appReducer/appReducer';
import { fetchLanguages, Localization } from '../../utils/translations';
const AppFooter = React.lazy(() => import('../AppFooter/AppFooter'));

// LOCALIZATION - ru / eng // change languages
{/* <NotFoundPage /> */}
{/* Route in Route */}
// ENV VARS
// MenuModal
// empty language redirect

export interface Translations {
  [id: string]: string;
}

const App = () =>  {

  const [localization, setLocalization] = useState({
    translations: {},
    language: defaultLang,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    fetchLanguages(localization.language)
      .then(response => {
        setLocalization(localization => ({
          ...localization,
          translations: response,
        }));
    });
  }, [dispatch])

  return (
    <BrowserRouter>
      <Radium.StyleRoot>
        <Localization.Provider
          value={{
            translations: localization.translations,
            language: localization.language,
            setLocality: setLocalization,
          }}
        >
          <div className="App">
            <div className='container'>

              <AppHeader/>

              <Switch>
                <Route
                  exact
                  path={routes.info}
                >
                  <About />
                </Route>

                <Route
                  // exact
                  path={routes.main}
                >
                  <AppStepManager />
                  <Suspense fallback={<div>LOADING...</div>}>
                    <AppFooter />
                  </Suspense>
                </Route>
              </Switch>

              <Helpers />

            </div>
          </div>
        </Localization.Provider>
      </Radium.StyleRoot>
    </BrowserRouter>
  );
}

export default App;