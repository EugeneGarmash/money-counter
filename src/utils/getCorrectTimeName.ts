import { Translations } from '../redux/appReducer/appReducer';

const secondsInAMinute = 60;
const secondsInAnHour = 3600;

export const getCorrectTimeName = (seconds: number, translations: Translations ) => {
  if (seconds < 60) {
    return `${seconds} ${translations.second_s}`;
  } else if (seconds >= 60 && seconds < 3600) {
    const fullMinutes = Math.floor(seconds / secondsInAMinute);
    const secondsApart = seconds % secondsInAMinute;
    return `${fullMinutes} ${translations.minute_s} ${secondsApart ? `${translations.and} ${secondsApart} ${translations.second_s}` : ''}`;
  } else if (seconds >= secondsInAnHour) {
    const fullHours = Math.floor(seconds / secondsInAnHour);
    const minuteSeconds = seconds - secondsInAnHour * fullHours;
    const fullMinutes = Math.floor(minuteSeconds / secondsInAMinute);
    const secondsApart = minuteSeconds % secondsInAMinute;

    return `${fullHours} ${translations.hours_s}` +
           `${ (secondsApart && fullMinutes) // divider
                ? ','
                : (!secondsApart && !fullMinutes)
                  ? ''
                  : ` ${translations.and}`
            }` +
           `${fullMinutes ? ` ${fullMinutes} ${translations.minute_s}` : ''}` +
           `${secondsApart ? ` ${translations.and} ${secondsApart} ${translations.second_s}` : ''}`;
  }
}

export default getCorrectTimeName;
