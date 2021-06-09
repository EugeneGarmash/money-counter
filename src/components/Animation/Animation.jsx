import { useSelector } from 'react-redux';
import Fire from './Fire/Fire';
import Forest from './Forest/Forest';
import Waves from './Waves/Waves';
import Rain from './Rain/Rain';
import classes from './Animation.module.scss';

const Animation = () => {

  const entertainmentMode = useSelector(s => s.app.entertainmentMode);
  const counterIsActive = useSelector(s => s.counter.counterIsActive);

  const renderAnimation = () => {
    switch (entertainmentMode) {
      case 'fire':
        return (
          <Fire paused={!counterIsActive}/>
        )
      case 'forest':
        return (
          <Forest paused={!counterIsActive}/>
        )
      case 'sea':
        return (
          <Waves paused={!counterIsActive}/>
        )
      case 'rain':
        return (
          <Rain paused={!counterIsActive}/>
        )
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