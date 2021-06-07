const initialState = {
  salaryValue: '',
  personalData: {},
}

const reducerObject = {
  SET_SALARY_VALUE: (state, action) => {
    const oldSalaryValue = state.salaryValue;
    const salaryValue = /^\d{0,12}$/.test(action.payload) ? action.payload : oldSalaryValue;
    return {
      ...state,
      salaryValue,
    }
  },
  SET_PERSONAL_DATA: (state, action) => {
    return {
      ...state,
      personalData: {
        name: action.payload.name,
        surname: action.payload.surname,
        occupacy: action.payload.occupacy,
      }
    }
  }
}

const salaryReducer = (state = initialState, action) => {
  const handler = reducerObject[action.type];
  return reducerObject[action.type] ? handler(state, action) : state;
}

export default salaryReducer;