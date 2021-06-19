import { connect, useDispatch } from 'react-redux';
import { toggleAppState } from '../../redux/appReducer/appReducer';
import {
  setCounterSalaryStep,
  initializeACounter,
  toggleCounterState
} from '../../redux/counterReducer/counterReducer';
import classes from './AppMainButton.module.scss';
import { pauseAudio, playAudio } from '../../redux/audioReducer/audioReducer';
import Button from '../Button/Button';
import { RootState } from '../../redux/store';
import { setCounterValue } from '../../redux/counterReducer/counterReducer';
import { useLocalization } from '../../utils/translations';
import { MouseEventHandler } from 'react';

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
  }
);

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
  const { translations } = useLocalization();

  const handleCounterStepButtonClick: MouseEventHandler<HTMLButtonElement> = async e => {
    if (salaryValue) {
      /** @todo captcha */
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
            textContent={translations.timer_start}
            // classNames={classes.AppMainButton}
            onClick={handleCounterStepButtonClick}
          />
        : null
      : counterIsActive
          ? <Button
              textContent={translations.timer_pause}
              // classNames={classes.AppMainButton}
              onClick={handlePause}
            />
          : <div className={classes.AppMainButton__pausedButtonsContainer}>
              <div className={classes.AppMainButton__buttonContainer}>
                <Button
                  textContent={translations.timer_run}
                  // classNames={classes.AppMainButton}
                  onClick={handlePause}
                />
              </div>
              <Button
                textContent={translations.timer_stop}
                // classNames={classes.AppMainButton}
                onClick={handleStop}
              />
          </div>
  )
};

export default connector(AppMainButton);
