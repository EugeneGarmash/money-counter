import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux';
import { toggleAppState } from '../../redux/appReducer/appReducer';
import {
  setCounterSalaryStep,
  initializeACounter,
  toggleCounterState
} from '../../redux/counterReducer/counterReducer';
import { saveUserSalary } from '../../redux/authReducer/authActionCreators';
import classes from './AppMainButton.module.scss';
import { pauseAudio, playAudio } from '../../redux/audioReducer/audioReducer';
import Button from '../Button/Button';
import { RootState } from '../../redux/store';
import { setCounterValue } from '../../redux/counterReducer/counterReducer';

type PropsType = {
  setCounterPassed: (data: object) => any,
  counterState: {
    secondsPassed: number,
    counterValue: number,
  },
  appIsInSalaryStep: boolean,
  counterIsActive: boolean,
  salaryValue: number,
  toggleAppState: () => any,
  toggleCounterState: () => any,
  setCounterSalaryStep: (multiplier: any) => any,
  initializeACounter: () => any,
  onPauseAudio: () => any,
  onPlayAudio: () => any,
  onSaveUserSalary: (data: object) => any,
}

const connector = connect(
  (state: RootState) => ({
    appIsInSalaryStep: state.app.appIsInSalaryStep, /** @info or (state) => state.app.appState*/
    counterIsActive: state.counter.counterIsActive,
    salaryValue: state.salary.salaryValue,
  }),
  {
    toggleAppState,
    toggleCounterState,
    setCounterSalaryStep,
    initializeACounter,
    onPauseAudio: pauseAudio,
    onPlayAudio: playAudio,
    onSaveUserSalary: saveUserSalary,
  }
);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsType & PropsFromRedux

const AppMainButton = (props: any) => {

  const {
    appIsInSalaryStep,
    counterIsActive,
    toggleAppState,
    salaryValue,
    toggleCounterState,
    initializeACounter,
    onPauseAudio,
    onPlayAudio,
  } = props;

  const dispatch = useDispatch();

  const handleCounterStepButtonClick = async (e: any) => {
    if (salaryValue) {
      // e.preventDefault();
      // window.grecaptcha.ready(function() {
      //   window.grecaptcha.execute('6LeT0OEZAAAAACWNvEOTwKHTF4L6vawvPVYQI8QS', {action: 'submit'})
      //     .then(function(token) {
            initializeACounter();
          }
    //     );
    //   });
    // }
  }

  const handlePause = () => {
    toggleCounterState();
    counterIsActive
      ? onPauseAudio()
      : onPlayAudio()

  }

  const handleStop = () => {
    toggleAppState();
    dispatch(setCounterValue({
      secondsPassed: 0,
      counterValue: 0,
    }))
  }

  return (
    appIsInSalaryStep
      ? salaryValue
        ? <Button
            textContent='Start a timer'
            classNames={classes.AppMainButton}
            onClick={handleCounterStepButtonClick}
          />
        : null
      : counterIsActive
          ? <Button
              textContent='pause'
              classNames={classes.AppMainButton}
              onClick={handlePause}
            />
          : <div className={classes.AppMainButton__pausedButtonsContainer}>
              <div className={classes.AppMainButton__buttonContainer}>
                <Button
                  textContent='run'
                  classNames={classes.AppMainButton}
                  onClick={handlePause}
                />
              </div>
              <Button
                textContent='stop'
                classNames={classes.AppMainButton}
                onClick={handleStop}
              />
          </div>
  )
};

export default connector(AppMainButton);