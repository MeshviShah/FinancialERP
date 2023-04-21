import {
  CreatTask_statusService,
  getTask_statusService,
  getAllTask_statusService,
  updateTask_statusService,
  deleteTask_statusService,
} from "../service/Task_status.service.js";
import { resType } from "../response/res.types.js";

//Creat Task_status
export async function creatTask_statusController(req, res) {
  const data = req.body;
  const result = await CreatTask_statusService(data);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get Task_status By Id
export async function getTask_statusController(req, res) {
  const id = req.params.id
  const result = await getTask_statusService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get All Task_statuss
export async function getAllTask_statusController(req, res) {
  const result = await getAllTask_statusService();
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Update Task_status By Id
export async function updateTask_statusController(req, res) {
  const data = req.body;
  const id = req.params.id;
  const result = await updateTask_statusService(id, data);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Delete Task_status By Id
export async function deleteTask_statusController(req, res) {
  const id = req.params.id;
  const result = await deleteTask_statusService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
