import {
  CreatTenderService,
  getTenderService,
  getAllTenderService,
  updateTenderService,
  deleteTenderService,
  countTenderService,
} from "../service/tender.service.js";
import { resType } from "../response/res.types.js";
import { getUserByName, getUserService } from "../service/user.service.js";
import { queryBuilder } from "../utils/queryBuilder.js";
import { sendPaymentMail, sendTenderMail } from "../helper/sendMail.helper.js";

//Creat Tender
export async function creatTenderController(req, res) {
  const data = req.body;
  const id = req.user;
  const result = await CreatTenderService(data);
  const admin=await getUserService(id);
  //console.log(admin?.[0].email,"admin")
  //const sendEmail =await sendTenderMail({email : admin?.[0].email})
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get Tender By Id
export async function getTenderController(req, res) {
  const id = req.params.id;
  const result = await getTenderService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get All Tenders
export async function getAllTenderController(req, res) {
  const query = req.query;

  const data = await queryBuilder(query);
  const result = await getAllTenderService(data);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Update Tender By Id
export async function updateTenderController(req, res) {
  const data = req.body;
  const id = req.params.id;

  
  const result = await updateTenderService(id,data);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Delete Tender By Id
export async function deleteTenderController(req, res) {
  const id = req.params.id;
  const result = await deleteTenderService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}


export async function countTenderController(req, res) {

  const result = await countTenderService();
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}