import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';
import cn from 'classnames';
import CloseToggleButton from '../Button/CloseToggleButton/CloseToggleButton';

const Modal = props => {

  const ModalComponent = props => {

    useEffect(() => {
      toggleBackground(true);
      return () => {
        toggleBackground(false);
      }
    })

    const toggleBackground = isOn => {
      const body = document.querySelector('body');
      body.style.overflow = isOn ? 'hidden' : 'visible';
      body.style.top = '0';
    }

    const handleClose = event => {
      event.preventDefault();
      props.onClose();
    }

    const handleModalClick = event => {
      event.stopPropagation();
    }

    return (
      <div className={classes.Modal_overlay} onClick={handleClose}>
        <div className={classes.Modal__closeButton}>
          <CloseToggleButton
            onClick={handleClose}
            closeMode={true}
          />
        </div>
        <div
          onClick={handleModalClick}
          className={cn(
            classes.Modal, {
            [classes.Modal_left_top]: props.topAndLeft,
            [classes.Modal_fullHeight]: props.fullHeight
          })}
        >
          {props.children}
        </div>
      </div>
    );
  }

  return props.isOpen
    ? ReactDOM.createPortal(
        <ModalComponent {...{...props, children: props.children}} />,
        document.querySelector('.App')
      )
    : null;
}

export default Modal;

