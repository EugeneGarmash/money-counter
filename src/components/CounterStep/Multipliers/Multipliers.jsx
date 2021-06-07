import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setCounterSalaryStep } from '../../../redux/counterReducer/counterReducer';
import classes from './Multipliers.module.scss';
import Button from '../../Button/Button';
import { incomeArray } from '../../../utils/constants';

const Multipliers = () => {

  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(0);

  const increaseIncome = (value, index) => () => {
    setDisabled(index);
    dispatch(setCounterSalaryStep(value));
  }

  return (
    <ul className={classes.Multipliers}>
      { incomeArray.map((incomeItem, index) =>
          <li
            key={incomeItem}
            className={classes.Multipliers__items}
          >
            <Button
              onClick={increaseIncome(incomeItem, index)}
              disabled={index === disabled}
            >
              {incomeItem}x income
            </Button>
          </li>
      )}
    </ul>
  )
}

export default Multipliers