import { axio } from "../../utils/axios";
import { loginSuccess, hasError } from "../slice/login.slice";

export const login = (body) => async (dispatch) => {
  //console.log(body,"action")
  await axio
    .post("/login", body)
    .then((response) => {
      dispatch(loginSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
