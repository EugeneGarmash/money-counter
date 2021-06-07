import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Fire from './Fire/Fire';
import Forest from './Forest/Forest';
import Sea from './Sea/Sea';
import Rain from './Rain/Rain';
// import NewYear from './NewYear/NewYear';

// remove audio when paused ??
// снимается пауза по "РАН"

import classes from './Animation.module.scss';

const Animation = () => {

  const entertainmentMode = useSelector(s => s.app.entertainmentMode);
  const counterIsActive = useSelector(s => s.counter.counterIsActive);

// Z_INDEX!!!

  const renderAnimation = () => {
    switch (entertainmentMode) {
      case 'fire':
        // console.log('FIRE'); // постоянный ререндер из-за счётчика
        return (
          <Fire paused={!counterIsActive}/>
        )
      case 'forest':
        return (
          <Forest paused={!counterIsActive}/>
        )
      case 'sea':
        return (
          <Sea paused={!counterIsActive}/>
        )
      case 'rain':
        return (
          <Rain paused={!counterIsActive}/>
        )
      // case 'newYear':
      //   return (
      //     <NewYear paused={!counterIsActive}/>
      //   )
      default:
        return (
          <Fire />
        )
    }
  }

  return (
    <div className={classes.Animation}>
      {renderAnimation()}
    </div>
  )

}

export default Animation;