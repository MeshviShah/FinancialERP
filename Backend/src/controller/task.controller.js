import {
  CreatTaskService,
  getTaskService,
  getAllTaskService,
  updateTaskService,
  deleteTaskService,
} from "../service/task.service.js";
import { resType } from "../response/res.types.js";
import { getUserByName } from "../service/user.service.js";
import { queryBuilder } from "../utils/queryBuilder.js";
import { Types } from "mongoose";
import { getRoleService } from "../service/Role.service.js";
import { countTaskService } from "../service/task.service.js";
const { ObjectId } = Types;
//Creat Task

export async function creatTaskController(req, res) {
  const data = req.body;
  const created_data = new Date()
  const payload = { ...data, created_data  };
  
  const result = await CreatTaskService(payload);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get Task By Id
export async function getTaskController(req, res) {
   const id = req.params.id;
  const result = await getTaskService(id);
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get All Tasks
export async function getAllTaskController(req, res) {
   const query = req.query;
  const role_id = req.user.data.role_id;
  const id=req.user.data.id
  const firm_id = req.user.data.firm_id;
  const role = await getRoleService(role_id)
  const role_name = role.name
  console.log(role_name,"name")
  console.log(id,"user_id")
   const data = await queryBuilder(query);
  const result = await getAllTaskService(data,role_name,id,firm_id);
  if (result == null || result == undefined || result.length <= 0)
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
  if (!ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  }
   const updated_data = new Date();
   const payload = { ...data, updated_data };
  const result = await updateTaskService(id, payload);
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Delete Task By Id
export async function deleteTaskController(req, res) {
  const id = req.body;
  const result = await deleteTaskService(id);
  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

export async function countTaskController(req, res) {
  const firm_id = req.user.data.firm_id;
  const result = await countTaskService(firm_id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}