import {
  CreatUserService,
  getUserService,
  getAllUserService,
  updateUserService,
  deleteUserService,
  countUserService,
  getMyDataService,
} from "../service/user.service.js";
import { resType } from "../response/res.types.js";
import { queryBuilder } from "../utils/queryBuilder.js";
import { Types } from "mongoose";
const { ObjectId } = Types;
//Creat User
export async function creatUserController(req, res) {
  const data = req.body;
  //console.log(req.user)
  const firmId = req.user.data.firm_id;
  // console.log(firmId , "ff")
  const result = await CreatUserService({...data , firm_id:firmId});
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//get User By Id
export async function getUserController(req, res) {
  const id = req.params.id;
  const firm_id = req.user.data.firm_id;
 try{
const result = await getUserService(id, firm_id);
if (result.length <= 0)
  return res
    .status(404)
    .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
return res
  .status(200)
  .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
 }catch(error){
return res.status(500).json({ message: error.message, statusCode: 500 });
 }
}
//get All Users
export async function getAllUserController(req, res) {
  const query = req.query;
  const data = await queryBuilder(query);
  //console.log(data);
  try{
 const firm_id = req.user.data.firm_id;
 const result = await getAllUserService(data, firm_id);
 if (result == null || result == undefined || result.length <= 0)
   return res
     .status(404)
     .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
 return res
   .status(200)
   .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
  }catch(error){
return res.status(500).json({ message: error.message, statusCode: 500 });
  }
}
//Update User By Id
export async function updateUserController(req, res) {
  const data = req.body;
  console.log(data,"data")
  const id = req.params.id;
  try {
     if (!ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  }
  const result = await updateUserService(id, data);
  if (result == null || result == undefined || result.length <= 0)
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
//Delete User By Id
export async function deleteUserController(req, res) {
  const id = req.body;
  try {
    const result = await deleteUserService(id);
    if (result == null || result == undefined || result.length <= 0)
      return res
        .status(404)
        .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
    return res
      .status(200)
      .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
  } catch (error) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
}


export async function getUserByIdController(req, res) {
  const id = req.user.data.id;
  const firm_id = req.user.data.firm_id;
  // console.log(req.user)
  // console.log(id)
  try {
     const result = await getMyDataService(id, firm_id);
     console.log(result,"result");
     if (result == null || result == undefined || result.length <= 0)
       return res
         .status(404)
         .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
     return res
       .status(200)
       .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
  } catch (error) {
    return res.status(500).json({ message: error.message, statusCode: 500 });
  }
 
}

export async function countUserController(req, res) {
  const firm_id = req.user.data.firm_id;
  const result = await countUserService(firm_id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}