import React, {
  Suspense,
  useEffect,
  useState,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { StyleRoot } from 'radium';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {
  // openModal,
  // closeModal,
  // MENU_MODAL,
  // AUTH_MODAL,
} from '../../redux/modalReducer/modalReducer';
import AppHeader  from '../AppHeader/AppHeader';
import AppStepManager from '../AppStepManager';
import Spinner from '../Spinner';
import { routes } from '../../utils/constants';
import Audio from '../Audio/Audio';
import Counter from '../Counter/Counter';
import Modals from '../Modals/Modals';
import './App.scss';
// import Modals from '../Modals/Modals';
// import handleActiveTabClose from '../../utils/handleActiveTabClose';
import { checkUserAuth } from '../../redux/authReducer/authActionCreators';
import PersonalHistory from '../PersonalHistory';
// const PersonalHistory = React.lazy(() => import('../PersonalHistory'));
const AppFooter = React.lazy(() => import('../AppFooter'));

const App = () =>  {

  const dispatch = useDispatch();
  const counterIsActive = useSelector(state => state.counter.counterIsActive);

  /**
   * @info because counter should be active when browsing through pages we
    add a Counter component and some state in App and pass the to CounterStep
    and MainButton (to stop it)
  */
  const [counterState, setCounterPassed] = useState({ /** @todo use context OR REF */
    secondsPassed: 0,
    counterValue: 0,
    paused: counterIsActive,
  });

  useEffect(() => {
    // handleActiveTabClose(); /** @info should be active - but only if counter is active */
    // dispatch(checkUserAuth());
  }, [dispatch]);

  return (
    <BrowserRouter basename={process.env.NODE_ENV !== 'development' ? 'moneyCounter' : ''}>
      <StyleRoot>
        <div className="App">
          <div className='container'>
            <AppHeader/>

            <Switch>

              <Route path={routes.info}>
                <p>I am Eugene Garmash and I am a web developer</p>
              </Route>

              {/* <Route path={routes.personal}>
                <Suspense fallback={<div>LOADING...</div>}>
                  <PersonalHistory />
                </Suspense>
              </Route> */}

              <Route path={routes.main}>
                <AppStepManager counterState={counterState} />
                <Suspense fallback={null}>
                  <AppFooter
                    setCounterPassed={setCounterPassed}
                    counterState={counterState}
                  />
                </Suspense>
              </Route>

            </Switch>


            {/** @info helpers */}

            <Counter
              counterIsActive={counterIsActive}
              setCounterPassed={setCounterPassed}
            />

            <Spinner />

            <Audio />

            <Modals />


          </div>
        </div>
      </StyleRoot>
    </BrowserRouter>
  );
}

export default App;