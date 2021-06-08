import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleVolume } from '../../redux/audioReducer/audioReducer';
import Button from '../Button/Button';
import classNames from 'classnames';
import classes from './MuteButton.module.scss';

const MuteButton = () => {

  const dispatch = useDispatch();
  const audioInstance = useSelector(state => state.audio.audioInstance);
  const counterIsActive = useSelector(state => state.counter.counterIsActive);
  const [muted, setMuted] = useState(false);

  return counterIsActive
    ? (
        <div className={classes.MuteButtonContainer}>
          <Button
            onClick={() => {
              dispatch(handleVolume(audioInstance?.volume === 0 ? 1 : 0));
              setMuted(!muted);
            }}
          >
            <div
              className={classNames(
                [classes.MuteButton], {
                [classes.muted]: muted,
              })}
            >
              <span></span>
            </div>
          </Button>
        </div>
      )
    : null;
}

export default MuteButton;