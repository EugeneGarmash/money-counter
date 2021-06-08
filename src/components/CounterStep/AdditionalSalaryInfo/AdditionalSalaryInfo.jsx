import classes from './AdditionalSalaryInfo.module.scss';
import { additionalies } from '../../../utils/constants';
import formatNumberWithComas from '../../../utils/formatNumberWithComas';

const AdditionalSalaryInfo = ({ counterSalaryStep }) => {
  return (
    <ul className={classes.AdditionalSalaryInfo}>
      { additionalies.map((additionaly, index) => {
          const salaryToFixed = (counterSalaryStep * additionaly.seconds).toFixed(2);

          return (
            <li
              key={additionaly.time}
              className={classes.AdditionalSalaryInfo__additionaly}
            >
              You make ~ {formatNumberWithComas(salaryToFixed)} items {additionaly.time}
            </li>
          );
        })

      }
    </ul>
  )
}

export default AdditionalSalaryInfo;