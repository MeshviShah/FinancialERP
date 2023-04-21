import {
  CreatClientService,
  getClientService,
  getAllClientService,
  updateClientService,
  deleteClientService,
} from "../service/client.service.js";
import { resType } from "../response/res.types.js";

//Creat Client
export async function creatClientController(req, res) {
  const data = req.body;
  const result = await CreatClientService(data);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get Client By Id
export async function getClientController(req, res) {
  const id = req.params.id;
  const result = await getClientService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, response: resType.SUCCESS, statusCode: 200 });
}
//Get All Clients
export async function getAllClientController(req, res) {
  const result = await getAllClientService();
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Update Client By Id
export async function updateClientController(req, res) {
  const data = req.body;
  const id = req.params.id;
  const result = await updateClientService(data, id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  const updatedClient = await getClientService(id);

  // return the updated client data in the response
  //return res.status(200).json({ data: updatedClient, res: resType.SUCCESS });
  return res
    .status(200)
    .json({ data: updatedClient, res: resType.SUCCESS, statusCode: 200 });
}
//Delete Client By Id
export async function deleteClientController(req, res) {
  const id = req.params.id;
  const result = await deleteClientService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
