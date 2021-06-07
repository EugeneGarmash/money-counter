import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './MenuToggleButton.module.scss';
import cn from 'classnames';
import {
  openModal,
  MENU_MODAL,
} from '../../../redux/modalReducer/modalReducer';


const MenuToggleButton = () => {
  const dispatch = useDispatch();
  const mobileMeuIsOpen = useSelector(s => s.modal[MENU_MODAL].isOpen);
  const handleToggleMenu = () => {
    dispatch(openModal(MENU_MODAL));
  }

  return (
    <div
      onClick={handleToggleMenu}
      className={cn(
        classes.MenuToggleButton , {
        [classes.MenuToggleButton_open]: mobileMeuIsOpen,
      })
    }>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default MenuToggleButton;