import { SET_SALARY_VALUE } from './salaryActionTypes';

export const setSalaryValue = payload => {
	return {
		type: SET_SALARY_VALUE,
		payload,
	}
}