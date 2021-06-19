import classes from './AdditionalSalaryInfo.module.scss';
import { additionalies } from '../../../utils/constants';
import formatNumberWithComas from '../../../utils/formatNumberWithComas';
import { useLocalization } from '../../../utils/translations';

const AdditionalSalaryInfo = ({ counterSalaryStep }: { counterSalaryStep: number }) => {

  const { translations } = useLocalization();


  return (
    <ul className={classes.AdditionalSalaryInfo}>
      { additionalies.map((additionaly) => {
          const salaryToFixed = (counterSalaryStep * additionaly.seconds).toFixed(2);

          return (
            <li
              key={additionaly.time}
              className={classes.AdditionalSalaryInfo__additionaly}
            >
              {translations.you_make} ~ {formatNumberWithComas(salaryToFixed)} {translations.items} {translations[additionaly.time]}
            </li>
          );
        })

      }
    </ul>
  )
}

export default AdditionalSalaryInfo;
