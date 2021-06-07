import { changeTrack, launchAnAudio, pauseAudio, stopAudio, changeSource } from "../audioReducer/audioReducer";

const TOGGLE_APP_STATE = 'TOGGLE_APP_STATE';
const TOGGLE_APP_SPINNER = 'TOGGLE_APP_SPINNER';
const CHANGE_ENTERTAINMENT_MODE = 'CHANGE_ENTERTAINMENT_MODE';

interface AppState {
  appIsInSalaryStep: boolean,
  entertainmentMode: string,
  spinner: boolean,
}

const initialState: AppState = {
  appIsInSalaryStep: true,
  entertainmentMode: '',
  spinner: false,
}

export const toggleAppState = () => (dispatch: any, getState: any) => {

  if (!getState().app.appIsInSalaryStep) {
    dispatch(changeEntertainmentMode(''));
    dispatch(stopAudio());
  }

  return dispatch({ // returning the dispatch might be redundant
    type: TOGGLE_APP_STATE,
  });
};

type ToggleAppSpinnerActionType = {
  type: typeof TOGGLE_APP_SPINNER,
}

type ToggleAppSpinnerActionCreator = () => ToggleAppSpinnerActionType;

// interface ToggleAppSpinner  {
//   (): ToggleAppSpinnerActionType
// }

// export const toggleAppSpinner: ToggleAppSpinnerActionCreator = () => ({
//   type: TOGGLE_APP_SPINNER,
// });

export const toggleAppSpinner = (): ToggleAppSpinnerActionType => ({
  type: TOGGLE_APP_SPINNER,
});

export const changeEntertainmentMode = (payload: any) => (dispatch: any, getState: any) => {
  const [name, sound] = payload;

  const state = getState();
  const counterIsActive = state.counter.counterIsActive;
  const audioInstance = state.audio.audioInstance;

  dispatch({ type: CHANGE_ENTERTAINMENT_MODE, payload: name });

  // 1
  // if (!counterIsActive) { // leave audio muted
  //   console.log("🚀 ~ file: appReducer.js ~ line 38 ~ counterIsActive", counterIsActive, audioInstance);
  //   return;
  // }

  // 2
  if (!counterIsActive) {
    console.log('!!!!!!!!!!!');
    dispatch(pauseAudio());
    dispatch(changeSource(sound));
    return;
  }

  audioInstance /** @info initialRender */
    ? dispatch(changeTrack(sound))
    : dispatch(launchAnAudio());
};


const appReducer = (state = initialState, action: any): AppState => {

  switch(action.type) {

    case TOGGLE_APP_STATE:
      const appIsInSalaryStep = state.appIsInSalaryStep;
      return {
        ...state,
        appIsInSalaryStep: !appIsInSalaryStep,
      }

    case TOGGLE_APP_SPINNER:
      return {
        ...state,
        spinner: !state.spinner,
      }

    case CHANGE_ENTERTAINMENT_MODE:
      return {
        ...state,
        entertainmentMode: action.payload,
      }

    default:
      return state;

  }

}

export default appReducer;