import { resType } from "../response/res.types.js";
import {
  CreatTokenService,
  deleteTokenService,
  getAllTokenService,
  getTokenService,
  updateTokenService,
} from "../service/token.service.js";

//Creat Client
export async function creatTokenController(req, res) {
  const data = req.body;
  const result = await CreatTokenService(data);
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Get Client By Id
export async function getTokenController(req, res) {
  const id = req.params.id;
  const result = await getTokenService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res.status(200).json({ data: result, response: resType.SUCCESS });
}
//Get All Clients
export async function getAllTokenController(req, res) {
  const result = await getAllTokenService();
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Update Client By Id
export async function updateTokenController(req, res) {
  const data = req.body;
  const id = req.params.id;
  const result = await updateTokenService(id, data);
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Delete Client By Id
export async function deleteTokenController(req, res) {
  const id = req.params.id;
  const result = await deleteTokenService(id);
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
