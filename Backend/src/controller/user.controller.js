import {
  CreatUserService,
  getUserService,
  getAllUserService,
  updateUserService,
  deleteUserService,
} from "../service/user.service.js";
import { resType } from "../response/res.types.js";

//Creat User
export async function creatUserController(req, res) {
  const data = req.body;
  const result = await CreatUserService(data);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS });
}

//get User By Id
export async function getUserController(req, res) {
  const id = req.params.id;
  const result = await getUserService(id);
  if (result.length <= 0)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//get All Users
export async function getAllUserController(req, res) {
  const result = await getAllUserService();
  if (result == null || result == undefined || result.length <= 0)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Update User By Id
export async function updateUserController(req, res) {
  const data = req.body;
  const id = req.params.id;
  const result = await updateUserService(id, data);
  if (result == null || result == undefined || result.length <= 0)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Delete User By Id
export async function deleteUserController(req, res) {
  const id = req.params.id;
  const result = await deleteUserService(id);
  if (result == null || result == undefined || result.length <= 0)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}

