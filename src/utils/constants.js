import bonfireWav from '../static/bonfire.wav';
import forestWav from '../static/forest.wav';
import rainWav from '../static/rain.wav';
import seaWav from '../static/sea.wav';
// import bellsWav from '../static/bells.wav';

const routes = {
  // personal: '/personal_history',
  info: '/info',
  main: '/',
}

const entertainmentMode = {
  fire: bonfireWav,
  forest: forestWav,
  sea: seaWav,
  rain: rainWav,
  // bells: bellsWav,
};


const counterTimeStepInSeconds = 1;
const counterTimeStep = counterTimeStepInSeconds * 1000;
const time = {
  daysInAYear: 365,
  workDaysInAYear: 261,
  monthsInAYear: 12,
  hoursInADay: 24,
  workHoursInADay: 9,
  secondsInAnHour: 3600,
}

const incomeArray = [1, 1.5, 2, 5];
const additionalies = [
  {
    seconds: 60,
    time: 'per minute',
  },
  {
    seconds: 3600,
    time: 'per hour',
  },
  {
    seconds: 32400,
    time: 'per day',
  },
  {
    seconds: 162000,
    time: 'per workweek',
  },
  {
    seconds: 712800,
    time: 'per month',
  },
  {
    seconds: 8553600,
    time: 'per year',
  },
  {
    seconds: 102643200,
    time: 'when you\'re young (21 - 32 y.o.)',
  },
];


export {
  bonfireWav,
  forestWav,
  rainWav,
  seaWav,
  // bellsWav,

  entertainmentMode,

  routes,

  counterTimeStepInSeconds,
  counterTimeStep,
  time,

  incomeArray,
  additionalies,
}
