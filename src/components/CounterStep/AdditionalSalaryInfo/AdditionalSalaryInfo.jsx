import React from 'react';
import classes from './AdditionalSalaryInfo.module.scss';
import { additionalies } from '../../../utils/constants';


const AdditionalSalaryInfo = props => {
  const {
    counterSalaryStep,
  } = props;
  return (
    <ul className={classes.AdditionalSalaryInfo}>
      { additionalies.map((additionaly, index) => {
          const withDecimal = (index === 0 || index === 1);
          const salaryToFixed = (counterSalaryStep * additionaly.seconds).toFixed(withDecimal);
          const salaryFormatted = salaryToFixed.length > 3 && !withDecimal
            ? salaryToFixed.length <= 6
              ? `${salaryToFixed.slice(0, -3)} ${salaryToFixed.slice(-3)}`
              : salaryToFixed.length >= 8
                ? 'a whole shitload of'
                : `${salaryToFixed.slice(0, 1)} ${salaryToFixed.slice(1, -3)} ${salaryToFixed.slice(-3)}`
            : salaryToFixed;
          return (
            <li
              key={additionaly.time}
              className={classes.AdditionalSalaryInfo__additionaly}
            >
              You will make ~{salaryFormatted} items {additionaly.time}
            </li>
          );
        })

      }
    </ul>
  )
}

export default AdditionalSalaryInfo;