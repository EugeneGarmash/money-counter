import React from 'react';
import classes from './Fire.module.scss';

const Fire = props => {
  return (
    <div className={classes.fire}>
      <div className={classes.flames}>
        <div className={`${classes.flame} ${props.paused ? classes.paused : ''}`}></div>
        <div className={`${classes.flame} ${props.paused ? classes.paused : ''}`}></div>
        <div className={`${classes.flame} ${props.paused ? classes.paused : ''}`}></div>
        <div className={`${classes.flame} ${props.paused ? classes.paused : ''}`}></div>
      </div>
      <div className={classes.logs}/>
    </div>
  )
};

export default Fire;
