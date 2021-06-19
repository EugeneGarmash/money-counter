import React, { Suspense, useEffect, useState } from 'react';
// import StyleRoot from 'radium';
import Radium from 'radium';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppHeader  from '../AppHeader/AppHeader';
import AppStepManager from '../AppStepManager/AppStepManager';
import { langSegmentRegexp, routesRegexped, DEFAULT_LANG, LANGUAGES, fallbackDefaultLang } from '../../utils/constants';
import './App.scss';
import Helpers from '../Helpers/Helpers';
import About from '../About/About';
import { useDispatch } from 'react-redux';
import { fetchLanguages, Localization } from '../../utils/translations';
const AppFooter = React.lazy(() => import('../AppFooter/AppFooter'));

export interface Translations {
  [id: string]: string;
}

const App = () =>  {

  const [localization, setLocalization] = useState({
    translations: {},
    language: DEFAULT_LANG,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const urlLang = window.location.pathname.match(langSegmentRegexp)?.[0];
    const urlNoSlash = urlLang?.slice(1, -1) || '';
    const doesLangExist = LANGUAGES.includes(urlNoSlash);
    fetchLanguages(doesLangExist ? urlNoSlash : (localization.language || fallbackDefaultLang))
      .then(response => {
        setLocalization(localization => ({
          ...localization,
          translations: response,
          language: urlNoSlash || DEFAULT_LANG,
        }));
    });
  }, [dispatch, localization.language])

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
                  strict
                  path={routesRegexped.info}
                >
                  <About />
                </Route>

                <Route
                  exact
                  strict
                  path={routesRegexped.main}
                >
                  <AppStepManager />
                  <Suspense fallback={<div>LOADING...</div>}>
                    <AppFooter />
                  </Suspense>
                </Route>

                <Redirect
                  to={window.location.pathname.endsWith('/')
                    ? `/${DEFAULT_LANG}/`
                    : window.location.pathname + '/'
                  }
                />

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