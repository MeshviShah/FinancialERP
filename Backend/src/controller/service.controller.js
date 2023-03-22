import {
  CreatServiceService,
  getServiceService,
  getAllServiceService,
  updateServiceService,
  deleteServiceService,
} from "../service/service.service.js";
import { resType } from "../response/res.types.js";

//Creat Service
export async function creatServiceController(req, res) {
  const data = req.body;
  const result = await CreatServiceService(data);
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}

//get Service By Id
export async function getServiceController(req, res) {
  const id = req.params.id
  const result = await getServiceService(id);
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//get All Services
export async function getAllServiceController(req, res) {
  const result = await getAllServiceService();
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Update Service By Id
export async function updateServiceController(req, res) {
  const data = req.body;
  const id = req.params.id;
  const result = await updateServiceService(id, data);
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Delete Service By Id
export async function deleteServiceController(req, res) {
  const id = req.params.id;
  const result = await deleteServiceService(id);
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
