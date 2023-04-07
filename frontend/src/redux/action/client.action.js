import axios from "axios";
import {
  addClientSuccess,
  clientDataSuccess,
  deleteClientSuccess,
  getClientSuccess,
  hasError,
  updateClientSuccess,
} from "../slice/client.slice";

export const client = () => async (dispatch) => {
  await axios
    .get("http://localhost:5002/client")
    .then((response) => {
      dispatch(clientDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const getOneClient = (id) => async (dispatch) => {
  await axios
    .get("http://localhost:5002/client/" + id)
    .then((response) => {
      dispatch(getClientSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const addClient = (body) => async (dispatch) => {
  await axios
    .post("http://localhost:5002/client", body)
    .then((response) => {
      dispatch(addClientSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const updateClient = (id, body) => async (dispatch) => {
  await axios
    .put("http://localhost:5002/client/" + id, body)
    .then((response) => {
      dispatch(updateClientSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const deleteClient = (id) => async(dispatch) => {
 await axios
   .delete("http://localhost:5002/client/" + id)
   .then((response) => {
     dispatch(deleteClientSuccess(response.data));
   })
   .catch((err) => {
     return dispatch(hasError(err.response?.data));
   });
}