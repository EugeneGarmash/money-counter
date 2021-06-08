import { toggleAppState } from '../appReducer/appReducer';
import { changeEntertainmentMode } from '../appReducer/appReducer';
import {
  entertainmentMode,
  counterTimeStepInSeconds,
  counterTimeStep,
  time,
} from '../../utils/constants';
// import testaxios from '../../utils/testaxios.js';
// import { pauseAudio, playAudio } from '../audioReducer/audioReducer';

interface CounterReducerInitialState {
  counterTimeStep: number,
  counterTimeStepInSeconds: number,
  counterSalaryStep: number,
  counterIsActive: boolean,
  secondsPassed: number,
  counterValue: number,
  multiplier: number,
}

const SET_COUNTER_SALARY_STEP = 'SET_COUNTER_SALARY_STEP';
const TOGGLE_COUNTER_STATE = 'TOGGLE_COUNTER_STATE';
const SET_COUNTER_VALUE = 'SET_COUNTER_VALUE';

// type GeneralActionObjectType = { // object
//   type: string,
//   payload?: {
//     modalName?: string,
//     data?: any,
//   },
// }
// type DispatchType = (arg0?: GeneralActionObjectType | ThunkType) => GeneralActionObjectType | ThunkType; // arg0?: GeneralActionObjectType
// type ThunkType = DispatchType;
// // type GeneralActionThunkType = Dispatch;

// // dispatch: принимает что-то или функцию, отдаёт объект или ничего // dispatch(//...)
// //

// type ThunkCreatorResultType = (dispatch: ThunkType, getState: () => any) => any;
// // type ThunkCreator = () => ThunkCreatorResultType;

// type ToggleCounterThunkCreator = () => ThunkCreatorResultType;
// type SetCounterSalaryStepThunkCreator = (multiplier: number | null) => ThunkCreatorResultType;
// type InitializeACounterThunkCreator = (token: string) => ThunkCreatorResultType;
// types end

const initialState: CounterReducerInitialState = {
  counterTimeStep,
  counterTimeStepInSeconds,
  counterSalaryStep: 0,
  counterIsActive: false,
  secondsPassed: 0,
  counterValue: 0,
  multiplier: 1,
}

// is thunk necessary here? If not, it should be removed
export const toggleCounterState = () => (dispatch: any, _: any) => {
  return dispatch({ type: TOGGLE_COUNTER_STATE });
};

export const initializeACounter = (token: any) => (dispatch: any, _: any) => {
  dispatch(toggleAppState());
  dispatch(setCounterSalaryStep(null));
  dispatch(toggleCounterState());
  dispatch(changeEntertainmentMode(Object.entries(entertainmentMode)[0]));

  // const state = getState();
  // const userId = state.auth.success.localId;
  // const salary = state.salary.salaryValue;
  // const salaryStep = state.counter.counterSalaryStep.toFixed(3);

  // testaxios.post(`/salaries/${userId}.json`, { salary, salaryStep })
  //   .then(response => {
      // dispatch(toggleCounterState());
    // })
    // .catch(error => {
    // });
}

export const setCounterSalaryStep = (multiplier: any) => (dispatch: any, getState: any) => {
  console.log('🚀 ~ file: counterReducer.ts ~ line 83 ~ setCounterSalaryStep ~ multiplier', multiplier);
  const state = getState(); /** @info can be done in a reducer as well*/

  const salary = state.salary.salaryValue;
  const intervalsInAnHour = 3600 / counterTimeStepInSeconds;
  const multiplierToBe = multiplier || initialState.multiplier;

  const salaryStep = salary *
    time.monthsInAYear /
    time.workDaysInAYear /
    time.workHoursInADay /
    intervalsInAnHour * multiplierToBe
  ;

  return dispatch({
    type: SET_COUNTER_SALARY_STEP,
    payload: {
      salaryStep,
      multiplier: multiplierToBe,
    }
  });
}

export const setCounterValue = (payload: any) => {
  return {
    type: SET_COUNTER_VALUE,
    payload: payload,
  }
}

const counterReducer = (state = initialState, action: any) => {
  switch(action.type) {

    case SET_COUNTER_SALARY_STEP:
      return {
        ...state,
        counterSalaryStep: action.payload.salaryStep,
        multiplier: action.payload.multiplier,
      }

    case TOGGLE_COUNTER_STATE:
      const counterIsActive = state.counterIsActive;
      return {
        ...state,
        counterIsActive: !counterIsActive,
      }

    case SET_COUNTER_VALUE:
      return {
        ...state,
        secondsPassed: action.payload.secondsPassed,
        counterValue: action.payload.counterValue,
      }

    default:
      return state;

  }
}

export default counterReducer;