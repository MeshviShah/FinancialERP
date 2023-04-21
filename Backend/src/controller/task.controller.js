import {
  CreatTaskService,
  getTaskService,
  getAllTaskService,
  updateTaskService,
  deleteTaskService,
} from "../service/Task.service.js";
import { resType } from "../response/res.types.js";
import { getUserByName } from "../service/user.service.js";

//Creat Task
export async function creatTaskController(req, res) {
  const data = req.body;
  const result = await CreatTaskService(data);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get Task By Id
export async function getTaskController(req, res) {
  const id = req.params.id;
  const result = await getTaskService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get All Tasks
export async function getAllTaskController(req, res) {
  const result = await getAllTaskService();
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Update Task By Id
export async function updateTaskController(req, res) {
  const data = req.body;
  const id = req.params.id;
  const result = await updateTaskService(id, data);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Delete Task By Id
export async function deleteTaskController(req, res) {
  const id = req.params.id;
  const result = await deleteTaskService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
