import { Fragment } from 'react'
import classes from './CounterStep.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import getCorrectTimeName from '../../utils/getCorrectTimeName';
import AdditionalInfo from './AdditionalSalaryInfo/AdditionalSalaryInfo';
import Multipliers from '../Multipliers/Multipliers';
import Animation from '../Animation/Animation';
import { entertainmentMode } from '../../utils/constants';
import { changeEntertainmentMode } from '../../redux/appReducer/appReducer';
import Button from '../Button/Button';
import { switchAnimation } from '../../redux/appReducer/appReducer';
import { useLocalization } from '../../utils/translations';
import { RootState } from '../../redux/store';

const CounterStep = () => {
  const dispatch = useDispatch();
  const { translations } = useLocalization();

  const appEntertainmentMode = useSelector((s: RootState) => s.app.entertainmentMode);
  const animationIsOn = useSelector((s: RootState) => s.app.animationIsOn);

  const counterTimeStep = useSelector((s: RootState) => s.counter.counterTimeStep);
  const counterSalaryStep = useSelector((s: RootState) => s.counter.counterSalaryStep);
  const counterValue = useSelector((s: RootState) => s.counter.counterValue);
  const counterSecondsPassed = useSelector((s: RootState) => s.counter.secondsPassed);

  const correctTimeName = getCorrectTimeName(counterSecondsPassed, translations);

  const handleChangeView = () => dispatch(switchAnimation(!animationIsOn));

  return (
    <Fragment>

      <div className={classes.mainInfoContainer}>
        <p className={classes.CounterStep__noPaddingItem}>{translations.you_have}</p>
        <p className={`${classes.CounterStep} ${classes.CounterStep__noPaddingItem}`}>
          {counterValue.toFixed(2)} {translations.items}
        </p>
        <p className={classes.CounterStep__noPaddingItem}>
          {translations.for_the_last} {correctTimeName}
        </p>
        <p className={classes.CounterStep__salaryPerSecond}>
          {translations.you_get} ~{counterSalaryStep.toFixed(2)} {translations.items_per} {counterTimeStep / 1000} {translations.second1}
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
                          {translations[name]}
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
