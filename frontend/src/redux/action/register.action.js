import { axio } from "../../utils/axios";
import { registerSuccess, hasError } from "../slice/register.slice";
import { notifications } from "@mantine/notifications";
export const register = (body) => async (dispatch) => {
  //console.log(body, "action");
  await axio
    .post("/register", body)
    .then((response) => {
         notifications.show({
           title: "Success",
           message: "Succesffuly Registerd",
           autoClose: 8000,
         });
      dispatch(registerSuccess(response?.data));
    })
    .catch((err) => {
      console.log(err)
        notifications.show({
          title: "Error",
          message: "Please Try Again",
          autoClose: 8000,
        });
      return dispatch(hasError(err.response?.data));
    });
};
