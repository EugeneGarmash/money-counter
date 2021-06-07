import React from 'react';
import classes from './Rain.module.scss';

const Rain = ({ paused }) => {
  return (
    <div className={classes.rainyWeather}>
      <div className={classes.cloudMain}/>
      <div className={classes.cloudCenter}/>
      <div className={classes.cloudLeft}/>
      <div className={`${classes.droplet} ${paused ? classes.paused : ''} ${classes.droplet1}`}/>
      <div className={`${classes.droplet} ${paused ? classes.paused : ''} ${classes.droplet2}`}/>
      <div className={`${classes.droplet} ${paused ? classes.paused : ''} ${classes.droplet3}`}/>
      <div className={`${classes.droplet} ${paused ? classes.paused : ''} ${classes.droplet4}`}/>
      <div className={`${classes.droplet} ${paused ? classes.paused : ''} ${classes.droplet5}`}/>
      <div className={`${classes.droplet} ${paused ? classes.paused : ''} ${classes.droplet6}`}/>
    </div>
  )
};

export default Rain;
