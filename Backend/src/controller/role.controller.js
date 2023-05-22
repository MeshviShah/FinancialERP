import {
  CreatRoleService,
  getRoleService,
  getAllRoleService,
  updateRoleService,
  deleteRoleService,
} from "../service/Role.service.js";
import { resType } from "../response/res.types.js";
import { Types } from "mongoose";
const { ObjectId } = Types;
//Creat Role
export async function creatRoleController(req, res) {
  const data = req.body;
  const result = await CreatRoleService(data);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get Role By Id
export async function getRoleController(req, res) {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  }
  const result = await getRoleService(id);
  if (result == null || result == undefined || !result)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get All Roles
export async function getAllRoleController(req, res) {
  const result = await getAllRoleService();
  if (result == null || result == undefined || !result)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404});
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Update Role By Id
export async function updateRoleController(req, res) {
  const data = req.body;
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  }
  const result = await updateRoleService(id, data);
  if (result == null || result == undefined || !result)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404});
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Delete Role By Id
export async function deleteRoleController(req, res) {
  const id = req.params.id
  if (!ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  }
  const result = await deleteRoleService(id);
  if (result == null || result == undefined || !result)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
