import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  MENU_MODAL,
} from '../../../redux/modalReducer/modalReducer';
import Modal from '../../Modal/Modal';
import { routes } from '../../../utils/constants';
import { NavLink, Link } from "react-router-dom";
import cn from 'classnames';
import extraClasses from '../../Multipliers/Multipliers.module.scss';
import buttonClasses from '../../Button/Button.module.scss';
import { useLocalization } from '../../../utils/translations';
import { langSegmentRegexp, LANGUAGES } from '../../../utils/constants';

const MenuModal = () => {

  const dispatch = useDispatch();
  const localizationContext = useLocalization();
  const menuModalIsOpen = useSelector((s) => s.modal[MENU_MODAL].isOpen);

  const handleCloseMenuModal = () => {
    dispatch(closeModal(MENU_MODAL))
  }

  const handleMenuItemClick = () => {
    dispatch(closeModal(MENU_MODAL));
  }

  const handleLanguageChange = language => () => {
    dispatch(closeModal(MENU_MODAL))
    localizationContext.setLocality({
      ...localizationContext,
      language,
    });
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
                  to={entry[1].replace(/:lang/, localizationContext.language)}
                  activeClassName={buttonClasses.Button_disabled}
                  exact
                  onClick={handleMenuItemClick}
                >
                  {entry[0]}
                </NavLink>
              </li>
          ))}
        </ul>

        <ul className='MenuModal__langList'>
          {LANGUAGES.map(item => {
            return (
              <li
                key={item}
                className='MenuModal__langItem'
              >
                <Link
                  className={cn(
                    buttonClasses.Button, {
                    [buttonClasses.Button_disabled]: localizationContext.language === item,
                  })}
                  to={location => location.pathname.replace(langSegmentRegexp, `/${item}/`)}
                  onClick={handleLanguageChange(item)}
                >
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <style jsx>{`
        .MenuModal {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
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
        .MenuModal__langList {
          display: flex;
          margin-top: auto;
          margin-bottom: 25px;
        }
        .MenuModal__langItem {
          width: 50px;
          margin-right: 25px;
        }
      `}</style>

    </Modal>
  )
}

export default MenuModal;