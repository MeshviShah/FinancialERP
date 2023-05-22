import {
  addTaskSuccess,
  taskDatasSuccess,
  deleteTaskSuccess,
  getTaskSuccess,
  hasError,
  updateTaskSuccess,
  taskCountSuccess,
} from "../slice/task.slice";
import { axio } from "../../utils/axios";
import { notifications } from "@mantine/notifications";
export const tasks = (query) => async (dispatch) => {
    const searchQuery = query?.search ?? "";
  await axio
    .get(`/task/?&search=${searchQuery}`)
    .then((response) => {
       notifications.show({
         title: "succ",
       });
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
    .delete("/task/" , {data:id})
    .then((response) => {
      dispatch(deleteTaskSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const taskCount = () => async (dispatch) => {
  await axio
    .get("/task/count")
    .then((response) => {
      dispatch(taskCountSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
