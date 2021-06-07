import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Spinner.module.scss';

const Spinner = () => {

  const isOn = useSelector (s => s.app.spinner);

  return isOn
    ? <div className={classes.LoaderContainer}>
        <div className={classes.Loader}/>
      </div>
    : null
}

export default Spinner;