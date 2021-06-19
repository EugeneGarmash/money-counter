import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';
import cn from 'classnames';
import CloseToggleButton from '../Button/CloseToggleButton/CloseToggleButton';

interface Props {
  children: React.ReactNode,
  isOpen: boolean;
  onClose(): void;
  topAndLeft?: boolean;
  fullHeight?: boolean;
}

const Modal = (props: Props) => {

  const ModalComponent = (props: Props) => {

    useEffect(() => {
      toggleBackground(true);
      return () => {
        toggleBackground(false);
      }
    })

    const toggleBackground = (isOn: boolean) => {
      const body: HTMLBodyElement | null = document.querySelector('body');
      if (body) {
        body.style.overflow = isOn ? 'hidden' : 'visible';
        body.style.top = '0';
      }
    }

    const handleClose = (event: React.MouseEvent) => {
      event.preventDefault();
      props.onClose();
    }

    const handleModalClick = (event: React.MouseEvent) => {
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
        document.querySelector('.App') as HTMLDivElement
      )
    : null;
}

export default Modal;

