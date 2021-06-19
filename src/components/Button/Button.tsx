import { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import classes from './Button.module.scss';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  fullHeight?: boolean;
  capitalize?: boolean;
  textContent?: string;
  children?: ReactNode;
  disabled?: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      className={classNames(
        classes.Button, {
        [classes.Button_fullHeight]: props.fullHeight,
        [classes.Button_capitalize]: props.capitalize,
      })}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.textContent || props.children}
    </button>
  )
};

export default Button;
