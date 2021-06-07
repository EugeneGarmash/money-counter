import React from 'react';
import classes from './Button.module.scss';

const Button = props => {
  return (
    <button
      className={classes.Button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.textContent || props.children}
    </button>
  )
};

export default Button;