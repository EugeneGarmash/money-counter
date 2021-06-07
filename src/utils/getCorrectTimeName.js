const secondsInAMinute = 60;
const secondsInAnHour = 3600;

const getCorrectTimeName = (seconds) => {

  if (seconds < 60) {
    return `${seconds} second(s)`;
  } else if (seconds >= 60 && seconds < 3600) {
    const fullMinutes = Math.floor(seconds / secondsInAMinute);
    const secondsApart = seconds % secondsInAMinute;
    return `${fullMinutes} minute(s) ${secondsApart ? `and ${secondsApart} second(s)` : ''}`;
  } else if (seconds >= secondsInAnHour) {
    const fullHours = Math.floor(seconds / secondsInAnHour);
    const minuteSeconds = seconds - secondsInAnHour * fullHours;
    const fullMinutes = Math.floor(minuteSeconds / secondsInAMinute);
    const secondsApart = minuteSeconds % secondsInAMinute;

    return `${fullHours} hour(s)` +
           `${ (secondsApart && fullMinutes) // divider
                ? ','
                : (!secondsApart && !fullMinutes)
                  ? ''
                  : ' and'
            }` +
           `${fullMinutes ? ` ${fullMinutes} minute(s)` : ''}` +
           `${secondsApart ? ` and ${secondsApart} second(s)` : ''}`;
  }
}

export default getCorrectTimeName;