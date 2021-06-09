import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  MENU_MODAL,
} from '../../../redux/modalReducer/modalReducer';
import Modal from '../../Modal/Modal';
import { routes } from '../../../utils/constants';
import { NavLink } from "react-router-dom";
import cn from 'classnames';
import extraClasses from '../../Multipliers/Multipliers.module.scss';
import buttonClasses from '../../Button/Button.module.scss';
import { RootState } from '../../../redux/store';

const MenuModal = () => {

  const dispatch = useDispatch();
  const menuModalIsOpen = useSelector((s: RootState) => s.modal[MENU_MODAL].isOpen);

  const handleCloseMenuModal = () => {
    dispatch(closeModal(MENU_MODAL))
  }

  const handleMenuItemClick = () => {
    dispatch(closeModal(MENU_MODAL));
  }

  return (
    <Modal
      isOpen={menuModalIsOpen}
      onClose={handleCloseMenuModal}
      topAndLeft
      fullHeight
    >

      <div className='MenuModal'>

        <ul
          className={cn(
            `${extraClasses.Multipliers} MenuModal__menuList`, {
          })}
        >
          { Object.entries(routes).map(entry => (
              <li
                key={entry[0]}
                className='MenuModal__menuLink'
              >
                <NavLink
                  className={buttonClasses.Button}
                  to={entry[1]}
                  activeClassName={buttonClasses.Button_disabled}
                  exact
                  onClick={handleMenuItemClick}
                >
                  {entry[0]}
                </NavLink>
              </li>
          ))}
        </ul>

        {/* <p></p> */}

      </div>
      <style jsx>{`
        .MenuModal {
          width: 100%;
        }
        @media (min-width: 767px) {
          .MenuModal {
            width: 650px;
          }
        }
        @media (max-width: 767px) {
          .MenuModal {
            padding: 0px;
          }
        }
        .MenuModal__menuList {
          display: flex;
          flex-direction: column;
        }
        .MenuModal__menuLink {
          margin-bottom: 25px;
          color: #e6e0e0;
        }
      `}</style>

    </Modal>
  )
}

export default MenuModal;