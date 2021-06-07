const initialState = {
  error: {},
  success: {},
}

const reducerObject = {
  SET_PERSONAL_DATA: (state, action) => {
    return {
      ...state,
      personalData: {
        name: action.payload.name,
        surname: action.payload.surname,
        occupacy: action.payload.occupacy,
      }
    }
  },
  AUTH_FETCHING: (state, action) => {
    return {
      ...state,
    }
  },
  AUTH_SUCCESS: (state, action) => {
    const { payload, } = action;
    return {
      ...state,
      success: {
        ...payload,
      },
      error: {},
    }
  },
  AUTH_ERROR: (state, action) => {
    return {
      ...state,
      error: {
        ...action.payload,
      },
      success: {},
    }
  },
  AUTH_LOGOUT: (state, action) => {
    return {
      ...state,
      success: {},
    }
  }

}

const salaryReducer = (state = initialState, action) => {
  const handler = reducerObject[action.type];
  return reducerObject[action.type] ? handler(state, action) : state;
}

export default salaryReducer;