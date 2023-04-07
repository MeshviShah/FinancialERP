import axios from "axios";
import { loginSuccess, hasError } from "../slice/login.slice";

export const login = (body) => async (dispatch) => {
  //console.log(body,"action")
  await axios
    .post("http://localhost:5002/login", body)
    .then((response) => {
      dispatch(loginSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
