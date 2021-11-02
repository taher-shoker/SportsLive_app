import axios from "axios";
import { GET_EMPLOYEE } from "./types";

// Get all employees
export const getEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://196.135.199.186:27948/api/Employees/GetAllEmployees"
    );
    dispatch({
      type: GET_EMPLOYEE,
      payload: res.data.response,
    });
  } catch (err) {
    console.log(err.msg);
  }
};
