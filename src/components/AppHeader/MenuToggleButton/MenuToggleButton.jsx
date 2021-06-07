import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './MenuToggleButton.module.scss';
import cn from 'classnames';
import {
  openModal,
  MENU_MODAL,
} from '../../../redux/modalReducer/modalReducer';


const MenuToggleButton = (props) => {
  const {
    handleToggleMenu,
    closeMode,
  } = props;

  return (
    <div
      onClick={handleToggleMenu}
      className={cn(
        classes.MenuToggleButton , {
        [classes.MenuToggleButton_open]: closeMode,
      })
    }>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default MenuToggleButton;