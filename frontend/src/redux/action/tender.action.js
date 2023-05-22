import {
  tenderDataSuccess,
  hasError,
  getTenderSuccess,
  tenderCountSuccess,
} from "../slice/tender.slice";
import { axio } from "../../utils/axios";
export const tenders = () => async (dispatch) => {
  await axio
    .get("/tender")
    .then((response) => {
      dispatch(tenderDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};


export const getOneTender = (id) => async (dispatch) => {
  await axio
    .get("/task/" + id)
    .then((response) => {
      dispatch(getTenderSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};



export const tenderCount = () => async (dispatch) => {
  await axio
    .get("/tender/count")
    .then((response) => {
      dispatch(tenderCountSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};