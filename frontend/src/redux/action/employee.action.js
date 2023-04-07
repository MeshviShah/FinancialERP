import axios from "axios";
import {
  addemployeeSuccess,
  employeeDataSuccess,
  deleteemployeeSuccess,
  getemployeeSuccess,
  hasError,
  updateemployeeSuccess,
} from "../slice/employee.slice";

export const employee = () => async (dispatch) => {
  await axios
    .get("http://localhost:5002/user")
    .then((response) => {
      dispatch(employeeDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const getOneEmployee = (id) => async (dispatch) => {
  await axios
    .get("http://localhost:5002/user/" + id)
    .then((response) => {
      dispatch(getemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const addEmployee = (body) => async (dispatch) => {
  await axios
    .post("http://localhost:5002/user", body)
    .then((response) => {
      dispatch(addemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const updateEmployee = (id, body) => async (dispatch) => {
  await axios
    .put("http://localhost:5002/user/" + id , body)
    .then((response) => {
      dispatch(updateemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const deleteEmployee = (id) => async (dispatch) => {
  await axios
    .delete("http://localhost:5002/user/" + id)
    .then((response) => {
      dispatch(deleteemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
