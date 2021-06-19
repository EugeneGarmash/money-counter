import bonfireWav from '../static/bonfire.mp3';
import forestWav from '../static/forest.mp3';
import rainWav from '../static/rain.mp3';
import seaWav from '../static/sea.mp3';

export const LANGUAGES = process.env.REACT_APP_LANG_LIST.split(',');
export const DEFAULT_LANG = process.env.REACT_APP_DEFAULT_LANG;
export const fallbackDefaultLang = 'en';

export const basepath = `money-counter.vercel.app`;
export const welcomeText = 'Count your money while working';

// routing start
export const langSegmentRegexp = /\/\w{2}\//;

export const routes = {
  info: '/:lang/info/',
  main: `/:lang/`,
}

// export const routesRegexped = routes.map(route => { // просто вставить regexp
//   /:lang
// });
// https://codesandbox.io/s/react-router-regex-jbqxh?file=/src/index.tsx
// https://github.com/ReactTraining/react-router/issues/820#issuecomment-256814655

export const routesRegexped = {
  info: '/:lang([a-z]{2})/info/',
  main: '/:lang([a-z]{2})/',
}
// routing end

export const entertainmentMode = {
  fire: bonfireWav,
  forest: forestWav,
  sea: seaWav,
  rain: rainWav,
};


export const counterTimeStepInSeconds = 1;
export const counterTimeStep = counterTimeStepInSeconds * 1000;
export const time = {
  daysInAYear: 365,
  workDaysInAYear: 261,
  monthsInAYear: 12,
  hoursInADay: 24,
  workHoursInADay: 9,
  secondsInAnHour: 3600,
}

export const incomeArray = [1, 1.5, 2, 5];
export const additionalies = [
  {
    seconds: 60,
    time: 'time_per_minute',
  },
  {
    seconds: 3600,
    time: 'time_per_hour',
  },
  {
    seconds: 32400,
    time: 'time_per_day',
  },
  {
    seconds: 162000,
    time: 'time_per_workweek',
  },
  {
    seconds: 712800,
    time: 'time_per_month',
  },
  {
    seconds: 8553600,
    time: 'time_per_year',
  },
  {
    seconds: 102643200,
    time: 'time_when_you_young',
  },
];


export {
  bonfireWav,
  forestWav,
  rainWav,
  seaWav,
}
