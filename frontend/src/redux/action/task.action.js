import {
  addTaskSuccess,
  taskDatasSuccess,
  deleteTaskSuccess,
  getTaskSuccess,
  hasError,
  updateTaskSuccess,
} from "../slice/task.slice";
import { axio } from "../../utils/axios";
export const tasks = () => async (dispatch) => {
  await axio
    .get("/task")
    .then((response) => {
      dispatch(taskDatasSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const addTask = (body) => async (dispatch) => {
  await axio
    .post("/task", body)
    .then((response) => {
      dispatch(addTaskSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const getOneTask = (id) => async (dispatch) => {
  await axio
    .get("/task/" + id)
    .then((response) => {
      dispatch(getTaskSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const updateTask = (id, body) => async (dispatch) => {
  await axio
    .put("/task/" + id, body)
    .then((response) => {
      dispatch(updateTaskSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const deleteTask = (id) => async (dispatch) => {
  await axio
    .delete("/task/" + id)
    .then((response) => {
      dispatch(deleteTaskSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};



