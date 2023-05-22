
import {axio} from "../../utils/axios"
import{imageUploadSuccess , hasError} from "../slice/imageUpload.slice"

export const imageUpload = (formData) => async(dispatch) => {
    await axio
      .post("/user/upload", formData )
      .then((response) => {
        dispatch(imageUploadSuccess(response.data));
      })
      .catch((err) => {
        return dispatch(hasError(err.response?.data));
      });
};