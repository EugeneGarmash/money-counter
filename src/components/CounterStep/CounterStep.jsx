import { useState, Fragment } from 'react'
import classes from './CounterStep.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import getCorrectTimeName from '../../utils/getCorrectTimeName';
import AdditionalInfo from './AdditionalSalaryInfo';
import Multipliers from './Multipliers/Multipliers';
import Animation from '../Animation/Animation';
import { entertainmentMode } from '../../utils/constants';
import { changeEntertainmentMode } from '../../redux/appReducer/appReducer';
import Button from '../Button/Button';

const CounterStep = () => {
  const dispatch = useDispatch();

  const counterTimeStep = useSelector(state => state.counter.counterTimeStep);
  const counterSalaryStep = useSelector(state => state.counter.counterSalaryStep);
  const appEntertainmentMode = useSelector(s => s.app.entertainmentMode);
  const counterState = useSelector(state => state.counter.counterValue);

  const [animationIsOn, setAnimationIsOn] = useState(true);

  const handleChangeView = () => setAnimationIsOn(!animationIsOn);

  return (
    <Fragment>

      <div className={classes.mainInfoContainer}>
        <p className={classes.CounterStep__noPaddingItem}>You've got</p>
        <p className={`${classes.CounterStep} ${classes.CounterStep__noPaddingItem}`}>
          {counterState.counterValue.toFixed(2)} items
        </p>
        <p className={classes.CounterStep__noPaddingItem}>
          for the last {getCorrectTimeName(counterState.secondsPassed)}
        </p>
        <p className={classes.CounterStep__salaryPerSecond}>
          You get ~{counterSalaryStep.toFixed(2)} items per {counterTimeStep / 1000} second(s)
        </p>
      </div>

      <div className={classes.CounterStep__viewContainer} >

        <div className={classes.CounterStep__viewContainerBody}>
          {animationIsOn
            ? (
              <>
                <Animation />
                <ul className={classes.CounterStep__entertainmentModes}>
                  {Object.entries(entertainmentMode).map(entry => {
                    const name = entry[0];
                    return (
                      <li
                        key={name}
                        className={classes.CounterStep__entertainmentItem}
                      >
                        <Button
                          onClick={() => dispatch(changeEntertainmentMode(entry))}
                          disabled={name === appEntertainmentMode}
                        >
                          {name}
                        </Button>
                      </li>
                    )
                  })}
                </ul>
              </>
            )
            : (
              <Fragment>
                <Multipliers />
                <AdditionalInfo counterSalaryStep={counterSalaryStep} />
              </Fragment>
            )
          }
        </div>

        <div className={classes.CounterStep__changeViewMode}>
          <Button
            onClick={handleChangeView}
            fullHeight
          >
            {'-->'}
          </Button>
        </div>

      </div>

    </Fragment>
  );
}


export default CounterStep;