import { axio } from "../../utils/axios";
import {
  forgetPasswordSuccess,
  hasError,
  resetPasswordSuccess,
} from "../slice/password.slice";

export const password = (body) => async (dispatch) => {
  //console.log(body, "action");
  await axio
    .post("/forgetpassword", body)
    .then((response) => {
      dispatch(forgetPasswordSuccess(response?.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const resetPassword = (token, body) => async (dispatch) => {
 // console.log(body, "action");
  await axio
    .post("/reset-token/" + token, body)
    .then((response) => {
      dispatch(resetPasswordSuccess(response?.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const changePassword = (body) => async (dispatch) => {
  // console.log(body, "action");
  await axio
    .post("/change-password", body)
    .then((response) => {
      dispatch(resetPasswordSuccess(response?.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
