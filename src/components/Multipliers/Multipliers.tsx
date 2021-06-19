import { useDispatch, useSelector } from 'react-redux';
import { setCounterSalaryStep } from '../../redux/counterReducer/counterReducer';
import classes from './Multipliers.module.scss';
import Button from '../Button/Button';
import { incomeArray } from '../../utils/constants';
import { RootState } from '../../redux/store';
import { useLocalization } from '../../utils/translations';

const Multipliers = () => {

  const dispatch = useDispatch();
  const { translations } = useLocalization();
  const multiplier = useSelector((state: RootState) => state.counter.multiplier);

  const increaseIncome = (value: number) => () => {
    dispatch(setCounterSalaryStep(value));
  }

  return (
    <ul className={classes.Multipliers}>
      { incomeArray.map(incomeItem =>
          <li
            key={incomeItem}
            className={classes.Multipliers__items}
          >
            <Button
              onClick={increaseIncome(incomeItem)}
              disabled={incomeItem === multiplier}
            >
              {incomeItem}{translations.x_income}
            </Button>
          </li>
      )}
    </ul>
  )
}

export default Multipliers;
