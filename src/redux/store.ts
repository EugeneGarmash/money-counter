import { combineReducers } from 'redux';
import salaryReducer from './salaryReducer/salaryReducer';
import appReducer from './appReducer/appReducer';
import counterReducer from './counterReducer/counterReducer';
import modalReducer from './modalReducer/modalReducer';
import audioReducer from './audioReducer/audioReducer';

const rootReducer = combineReducers({
    app: appReducer,
    salary: salaryReducer,
    counter: counterReducer,
    modal: modalReducer,
    audio: audioReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;