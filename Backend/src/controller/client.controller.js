import {
  CreatClientService,
  getClientService,
  getAllClientService,
  updateClientService,
  deleteClientService,
  countClientService,
} from "../service/client.service.js";
import { resType } from "../response/res.types.js";
import { queryBuilder } from "../utils/queryBuilder.js";
import { Types } from "mongoose";
const { ObjectId } = Types;
//Creat Client
export async function creatClientController(req, res) {
  const data = req.body;
  const firmId = req.user.data.firm_id;
  const result = await CreatClientService({...data,firm_id:firmId});
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get Client By Id
export async function getClientController(req, res) {
  const id = req.params.id;
  const firm_id = req.user.data.firm_id;
  
  const result = await getClientService(id,firm_id);
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
  const query = req.query;
  const firm_id = req.user.data.firm_id;
  const data = await queryBuilder(query);
  
  const result = await getAllClientService(data,firm_id);
 
  if (result == null || result == undefined || result.length <= 0)
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
   if (!ObjectId.isValid(id)) {
     return res
       .status(404)
       .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
   }
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
  try{
 const id = req.body;
 const result = await deleteClientService(id);
 if (result == null || result == undefined)
   return res
     .status(404)
     .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
 return res
   .status(200)
   .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
  }catch(error){
    console.log(error)
  }
 
}

export async function countClientController(req, res) {
  const firm_id = req.user.data.firm_id;
  const result = await countClientService(firm_id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}