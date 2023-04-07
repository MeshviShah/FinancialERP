import axios from "axios";
import {
  forgetPasswordSuccess,
  hasError,
  resetPasswordSuccess,
} from "../slice/password.slice";

export const password = (body) => async (dispatch) => {
  //console.log(body, "action");
  await axios
    .post("http://localhost:5002/forgetpassword", body)
    .then((response) => {
      dispatch(forgetPasswordSuccess(response?.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const resetPassword = (token , body) => async (dispatch) => {
  console.log(body, "action");
  await axios
    .post("http://localhost:5002/reset-token/"+ token , body)
    .then((response) => {
      dispatch(resetPasswordSuccess(response?.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};