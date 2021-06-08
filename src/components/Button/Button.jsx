import React from 'react';
import classNames from 'classnames';
import classes from './Button.module.scss';

const Button = props => {
  return (
    <button
      className={classNames(
        classes.Button, {
        [classes.Button__fullHeight]: props.fullHeight,
      })}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.textContent || props.children}
    </button>
  )
};

export default Button;