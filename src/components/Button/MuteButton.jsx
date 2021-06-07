import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleVolume } from '../../redux/audioReducer/audioReducer';
import Button from '../Button/Button';

import classNames from 'classnames';
import classes from './MuteButton.module.scss';

// @info credits to  https://codepen.io/MrStank/pen/NwXKQx

const MuteButton = () => {

  const dispatch = useDispatch();
  const audioInstance = useSelector(state => state.audio.audioInstance);
  const counterIsActive = useSelector(state => state.counter.counterIsActive);
  const muted = audioInstance && audioInstance.volume === 0;

  if (!counterIsActive) {
    return null;
  }

  return (
    <div className={classes.MuteButtonContainer}>
      <Button onClick={() => dispatch(handleVolume(muted ? 1 : 0))}>
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
  );
}

export default MuteButton;