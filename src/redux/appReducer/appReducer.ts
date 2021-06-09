import { changeTrack, launchAnAudio, pauseAudio, stopAudio, changeSource } from "../audioReducer/audioReducer";
import { RootState } from '../store';

const TOGGLE_APP_STATE = 'TOGGLE_APP_STATE';
const TOGGLE_APP_SPINNER = 'TOGGLE_APP_SPINNER';
const CHANGE_ENTERTAINMENT_MODE = 'CHANGE_ENTERTAINMENT_MODE';
const SWITCH_ANIMATION = 'SWITCH_ANIMATION';

interface AppState {
  appIsInSalaryStep: boolean,
  entertainmentMode: string,
  spinner: boolean,
  animationIsOn: boolean,
}

const initialState: AppState = {
  appIsInSalaryStep: true,
  entertainmentMode: '',
  spinner: false,
  animationIsOn: true,
}

export const toggleAppState = () => (dispatch: any, getState: () => RootState) => {

  if (!getState().app.appIsInSalaryStep) {
    dispatch(changeEntertainmentMode(['', '']));
    dispatch(stopAudio());
  }

  return dispatch({
    type: TOGGLE_APP_STATE,
  });
};

type ToggleAppSpinnerActionType = {
  type: typeof TOGGLE_APP_SPINNER,
}

export const toggleAppSpinner = (): ToggleAppSpinnerActionType => ({
  type: TOGGLE_APP_SPINNER,
});

type ChangeEntertainmentModePayloadType = [ name: string, sound: string];

export const changeEntertainmentMode =
  (payload: ChangeEntertainmentModePayloadType) =>
    (dispatch: any, getState: () => RootState) => {
      const [name, sound] = payload;

      const state = getState();
      const counterIsActive = state.counter.counterIsActive;
      const audioInstance = state.audio.audioInstance;

      dispatch({ type: CHANGE_ENTERTAINMENT_MODE, payload: name });

      if (!counterIsActive) {
        dispatch(pauseAudio());
        dispatch(changeSource(sound));
        return;
      }

      audioInstance /** @info initialRender */
        ? dispatch(changeTrack(sound))
        : dispatch(launchAnAudio());
};

export const switchAnimation = (animationIsOn: boolean) => {
  return {
    type: SWITCH_ANIMATION,
    payload: animationIsOn,
  }
}


const appReducer = (state = initialState, action: any): AppState => {

  switch(action.type) {

    case TOGGLE_APP_STATE:
      const appIsInSalaryStep = state.appIsInSalaryStep;
      return {
        ...state,
        appIsInSalaryStep: !appIsInSalaryStep,
      }

    case CHANGE_ENTERTAINMENT_MODE:
      return {
        ...state,
        entertainmentMode: action.payload,
      }

    case SWITCH_ANIMATION:
      return {
        ...state,
        animationIsOn: action.payload,
      }

    default:
      return state;

  }

}

export default appReducer;