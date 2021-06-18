import { changeTrack, launchAnAudio, pauseAudio, stopAudio, changeSource } from "../audioReducer/audioReducer";
import { RootState } from '../store';
import { RSAA, RSAAAction  } from 'redux-api-middleware';

const TOGGLE_APP_STATE = 'TOGGLE_APP_STATE';
const CHANGE_ENTERTAINMENT_MODE = 'CHANGE_ENTERTAINMENT_MODE';
const SWITCH_ANIMATION = 'SWITCH_ANIMATION';

const GET_TRANSLATION_REQUEST = 'GET_TRANSLATION_REQUEST';
const GET_TRANSLATION_SUCCESS = 'GET_TRANSLATION_SUCCESS';
const GET_TRANSLATION_ERROR = 'GET_TRANSLATION_ERROR';

interface AppState {
  appIsInSalaryStep: boolean,
  entertainmentMode: string,
  spinner: boolean,
  animationIsOn: boolean,
  translations: { [key: string]: string }
}

const initialState: AppState = {
  appIsInSalaryStep: true,
  entertainmentMode: '',
  spinner: false,
  animationIsOn: true,
  translations: {},
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

export interface Translations {
  [id: string]: string;
}

export const defaultLang = 'en';

export const getTranslations = (language: string = defaultLang): RSAAAction<RootState, Translations> => ({
  [RSAA]: {
    method: 'GET',
    endpoint: `/translations/${language}.json`,
    headers: {
      'Content-Type': 'application/json',
    },
    types: [
      GET_TRANSLATION_REQUEST,
      GET_TRANSLATION_SUCCESS,
      GET_TRANSLATION_ERROR,
    ]
  }
});

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

    case GET_TRANSLATION_REQUEST:
      return {
        ...state,
        spinner: true,
      }
    case GET_TRANSLATION_SUCCESS:
      return {
        ...state,
        translations: action.payload,
        spinner: false,
      }
    case GET_TRANSLATION_ERROR:
      return {
        ...state,
        spinner: false,
      }

    default:
      return state;

  }

}

export default appReducer;