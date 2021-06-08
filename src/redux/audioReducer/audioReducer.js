import bonfireWav from '../../static/bonfire.wav';

const CREATE_AUDIO = 'CREATE_AUDIO';
const PAUSE_AUDIO = 'PAUSE_AUDIO';
const PLAY_AUDIO = 'PLAY_AUDIO';
const STOP_AUDIO = 'STOP_AUDIO';
const HANDLE_VOLUME = 'HANDLE_VOLUME';
const CHANGE_SOURCE = 'CHANGE_SOURCE';

const initialState = {
  audioInstance: null,
}

/**
 * @info
 * Although there're no specific audio properties in redux
 * and audioInstance is the same on every action fired,
 * manipulations are done here to make it transparent to use.
 * The initial audioInstance is altered under the hood.
 * */

const getAudioInstance = getState => {
  return getState().audio.audioInstance;
}

export const createAudio = mode => {
  return {
    type: CREATE_AUDIO,
    payload: mode,
  }
};

export const playAudio = () => (dispatch, getState) => {
  const audioInstance = getAudioInstance(getState);
  audioInstance.play();

  return dispatch({
    type: PLAY_AUDIO,
    payload: audioInstance,
  });
}

export const pauseAudio = () => (dispatch, getState) => {
  const audioInstance = getAudioInstance(getState);
  audioInstance.pause();

  return dispatch({
    type: PAUSE_AUDIO,
    payload: audioInstance,
  });
};

export const stopAudio = () => (dispatch, getState) => {
  const audioInstance = getAudioInstance(getState);
  audioInstance.pause();
  return dispatch({
    type: STOP_AUDIO,
    payload: audioInstance,
  });
}

export const changeSource = src => (dispatch, getState) => {
  const audioInstance = getAudioInstance(getState);
  audioInstance.src = src;
  return dispatch({
    type: CHANGE_SOURCE,
    payload: audioInstance,
  });
}

export const handleVolume = volumeLevel => (dispatch, getState) => {
  const audioInstance = getAudioInstance(getState)
  if(!audioInstance) {
    return;
  }
  audioInstance.volume = volumeLevel;
  return dispatch({
    type: HANDLE_VOLUME,
    payload: audioInstance,
  });
};

export const launchAnAudio = mode => (dispatch, getState) => {
  dispatch(createAudio(mode));
  dispatch(playAudio());
}

export const changeTrack = src => (dispatch, _) => {
  dispatch(pauseAudio());
  dispatch(changeSource(src));
  dispatch(playAudio());
};


const audioReducer = (state = initialState, action) => {
  switch(action.type) {

    case CREATE_AUDIO:

      const audioInstance = new Audio(bonfireWav);
      audioInstance.loop = true;

      return {
        ...state,
        audioInstance,
      }

    case PAUSE_AUDIO:
      return {
        ...state,
        audioInstance: action.payload,
      }

    case PLAY_AUDIO:
      return {
        ...state,
        audioInstance: action.payload,
      }

    case STOP_AUDIO: {
      return {
        ...state,
        audioInstance: null,
      }
    }

    case CHANGE_SOURCE: {
      return {
        ...state,
        audioInstance: action.payload,
      }
    }


    case HANDLE_VOLUME:
      return {
        ...state,
        audioInstance: action.payload,
      }

    default:
      return state;

  }
}

export default audioReducer;