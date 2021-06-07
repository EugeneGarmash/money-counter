export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const AUTH_MODAL = 'AUTH_MODAL';
export const MENU_MODAL = 'MENU_MODAL';

// types start

type ModalReducerInitialState = {
  [AUTH_MODAL]: {
    isOpen: boolean,
    data: object,
  },
  [MENU_MODAL]: {
    isOpen: boolean,
    data: object,
  }
}

// type GeneralModalActionType = {
//   type: string,
//   payload?: {
//     modalName?: string,
//     data?: any
//   },
// }

type OpenModalActionType = { // dispatch(openModal(AUTH_MODAL)); !!!
  type: typeof OPEN_MODAL,
  payload?: {
    modalName: string,
    data: any,
  }
}

type CloseModalActionType = {
  type: typeof CLOSE_MODAL,
  payload: {
    modalName: string,
    data: {},
  }
}

// interface ModalReducer {
//   (state: ModalReducerInitialState, action: GeneralModalActionType): ModalReducerInitialState,
// }

// interface OpenModalActionCreator {
//   (modalName: string, data: any): OpenModalActionType,
// }

// interface CloseModalActionActionCreator {
//   (modalName: string): CloseModalActionType,
// }

// types end

const initialState: ModalReducerInitialState = { // ModalReducerInitialState
  [AUTH_MODAL]: {
    isOpen: false,
    data: {},
  },
  [MENU_MODAL]: {
    isOpen: false,
    data: {}
  }
}

export const openModal = (modalName: string, data?: object): OpenModalActionType => { // OpenModalActionCreator
  return {
    type: OPEN_MODAL,
    payload: {
      modalName,
      data,
    }
  }
}

export const closeModal = (modalName: string): CloseModalActionType => { // CloseModalActionActionCreator
  return {
    type: CLOSE_MODAL,
    payload: {
      modalName,
      data: {},
    }
  }
}

const modalReducer = (state = initialState, action: any): ModalReducerInitialState => {
  switch(action.type) {

    case OPEN_MODAL:
      return {
        ...state,
        [action.payload.modalName]: {
          isOpen: true,
          data: action.payload.data,
          // hey: '1', // почему не ругается, если добавить?
        }
      }
    case CLOSE_MODAL:
      return {
        ...state,
        [action.payload.modalName]: {
          isOpen: false,
          data: {},
        }
      }
    default:
      return state;

  }
}

export default modalReducer;