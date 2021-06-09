export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const MENU_MODAL = 'MENU_MODAL';


type ModalReducerInitialState = {
  [MENU_MODAL]: {
    isOpen: boolean,
    data: object,
  }
}

type OpenModalActionType = {
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

const initialState: ModalReducerInitialState = {
  [MENU_MODAL]: {
    isOpen: false,
    data: {}
  }
}

export const openModal = (modalName: string, data?: object): OpenModalActionType => {
  return {
    type: OPEN_MODAL,
    payload: {
      modalName,
      data,
    }
  }
}

export const closeModal = (modalName: string): CloseModalActionType => {
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