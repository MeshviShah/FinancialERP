import {
  CreatFirmService,
  getFirmService,
  getAllFirmService,
  updateFirmService,
  deleteFirmService,
} from "../service/Firm.service.js";
import { resType } from "../response/res.types.js";
import { Types } from "mongoose";
const { ObjectId } = Types;
//creat Firm
export async function creatFirmController(req, res) {
  const data = req.body;
  const result = await CreatFirmService(data);
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//get Firm By ID
export async function getFirmController(req, res) {
  // const id = { _id:new  ObjectId(req.params.id) };
  const id  = req.params.id
  const result = await getFirmService(id);
  if (result == null || result == undefined || result.length <= 0)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}

//get All Firm
export async function getAllFirmController(req, res) {
  const result = await getAllFirmService();
  if (result == null || result == undefined || result.length <= 0)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}

//Update Firm By Id
export async function updateFirmController(req, res) {
  const data = req.body;
  const id = req.params.id;
  const result = await updateFirmService(id, data);
  if (result == null || result == undefined || result.length <= 0)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}

//Delete Firm By Id
export async function deleteFirmController(req, res) {
  const id = req.params.id
  const result = await deleteFirmService(id);
  if (result == null || result == undefined || result.length <= 0)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
