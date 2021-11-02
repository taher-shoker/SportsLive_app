import { GET_EMPLOYEE } from "../action/types";
const initialState = {
  employees: [],
};

const Employee = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        employees: payload,
      };
    default:
      return state;
  }
};

export default Employee;
