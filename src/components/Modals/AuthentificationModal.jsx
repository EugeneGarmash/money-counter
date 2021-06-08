import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Authentification from '../Authentification/Authentification';
import { closeModal, AUTH_MODAL } from '../../redux/modalReducer/modalReducer';
import Modal from '../Modal';

const AuthentificationModal = () => {


  const dispatch = useDispatch();
  const authModalIsOpen = useSelector(s => s.modal[AUTH_MODAL].isOpen);

  const handleCloseAuthModal = () => {
    dispatch(closeModal(AUTH_MODAL))
  }

  return (
    <Modal
      isOpen={authModalIsOpen}
      onClose={handleCloseAuthModal}
    >
      <Authentification />
    </Modal>
  )
}

export default AuthentificationModal;