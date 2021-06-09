import { toggleAppState } from '../appReducer/appReducer';
import { changeEntertainmentMode } from '../appReducer/appReducer';
import {
  entertainmentMode,
  counterTimeStepInSeconds,
  counterTimeStep,
  time,
} from '../../utils/constants';
import { RootState } from '../store';

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

const initialState: CounterReducerInitialState = {
  counterTimeStep,
  counterTimeStepInSeconds,
  counterSalaryStep: 0,
  counterIsActive: false,
  secondsPassed: 0,
  counterValue: 0,
  multiplier: 1,
}

export const toggleCounterState = () => {
  return {
    type: TOGGLE_COUNTER_STATE
  };
};

export const initializeACounter = (token: any) => (dispatch: any) => {
  dispatch(toggleAppState());
  dispatch(setCounterSalaryStep(initialState.multiplier));
  dispatch(toggleCounterState());
  dispatch(changeEntertainmentMode(Object.entries(entertainmentMode)[0]));
}

export const setCounterSalaryStep =
  (multiplier: number) =>
  (dispatch: any, getState: () => RootState) => {
    const state = getState(); /** @info can be done in a reducer as well */

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

interface SetCounterValuePayload {
  counterValue: number,
  secondsPassed: number,
}

export const setCounterValue = (payload: SetCounterValuePayload) => {
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