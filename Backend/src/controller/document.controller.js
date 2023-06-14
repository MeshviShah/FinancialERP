import {
  CreatDocumentService,
  getDocumentService,
  getAllDocumentService,
  updateDocumentService,
  deleteDocumentService,
  countDocumentService,
} from "../service/document.service.js";
import { resType } from "../response/res.types.js";
import { Types } from "mongoose";
import { getRoleService } from "../service/Role.service.js";
import { queryBuilder } from "../utils/queryBuilder.js";
const { ObjectId } = Types;
// --->>Creat Document
export async function creatDocumentController(req, res) {
  try {
     const data = { ...req.body, created_at: new Date() };
     const result = await CreatDocumentService(data);
     return res
       .status(200)
       .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
  } catch (error) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
   
}

//Get Document By Id
export async function getDocumentController(req, res) {
  const id = req.params.id;
  try {
     if (!ObjectId.isValid(id)) {
     return res
       .status(404)
       .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
   }
  const result = await getDocumentService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
  catch (error) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
}
//Get All Documents
export async function getAllDocumentController(req, res) {
   const query = req.query;
   const data = await queryBuilder(query);
  const id=req.user.data.id
  const firm_id = req.user.data.firm_id;
  const role_id = req.user.data.role_id;
   const role = await getRoleService(role_id);
   
   const role_name = role.name;
  
  const result = await getAllDocumentService(data,id,firm_id,role_name);

  if (result == null || result == undefined || result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Update Document By Id
export async function updateDocumentController(req, res) {
  const id = req.params.id;
  const data = req.body;
 if (!ObjectId.isValid(id)) {
   return res
     .status(404)
     .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
 }
  const result = await updateDocumentService(id, data);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Delete Document By Id
export async function deleteDocumentController(req, res) {
  
   //console.log(req.body,"hi")
   const id= req.body
   
  const result = await deleteDocumentService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

export async function countDocumentController(req, res) {
  const firm_id = req.user.data.firm_id;
  const result = await countDocumentService(firm_id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}