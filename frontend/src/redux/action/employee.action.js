import { axio } from "../../utils/axios";
import {
  addemployeeSuccess,
  employeeDataSuccess,
  deleteemployeeSuccess,
  getemployeeSuccess,
  hasError,
  updateemployeeSuccess,
} from "../slice/employee.slice";

export const employee = () => async (dispatch) => {
  await axio
    .get("/user")
    .then((response) => {
      dispatch(employeeDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const getOneEmployee = (id) => async (dispatch) => {
  await axio
    .get("/user/" + id)
    .then((response) => {
      dispatch(getemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const addEmployee = (body) => async (dispatch) => {
  await axio
    .post("/user", body)
    .then((response) => {
      dispatch(addemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const updateEmployee = (id, body) => async (dispatch) => {
  await axio
    .put("/user/" + id, body)
    .then((response) => {
      dispatch(updateemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const deleteEmployee = (id) => async (dispatch) => {
  await axio
    .delete("/user/" + id)
    .then((response) => {
      dispatch(deleteemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
