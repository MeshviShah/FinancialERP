import axios from "axios";
import { registerSuccess, hasError } from "../slice/register.slice";

export const register = (body) => async (dispatch) => {
  console.log(body,"action")
  await axios
    .post("http://localhost:5002/register", body)
    .then((response) => {
      dispatch(registerSuccess(response?.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
