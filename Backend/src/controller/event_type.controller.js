import {
  CreatEvent_TypeService,
  getEvent_TypeService,
  getAllEvent_TypeService,
  updateEvent_TypeService,
  deleteEvent_TypeService,
} from "../service/Event_Type.service.js";
import { resType } from "../response/res.types.js";

//creat Event_Type
export async function creatEvent_TypeController(req, res) {
  const result = await CreatEvent_TypeService({ data: req.body });
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//Get Event_Type
export async function getEvent_TypeController(req, res) {
  const result = await getEvent_TypeService({id:req.params.id});
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//GEt All Event_Type
export async function getAllEvent_TypeController(req, res) {
  const result = await getAllEvent_TypeService();
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//Update Event_Type
export async function updateEvent_TypeController(req, res) {
  const id = req.params.id;
  const data = req.body;
  const result = await updateEvent_TypeService(id,data);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//Delete Event_Type
export async function deleteEvent_TypeController(req, res) {
  const id = req.params.id;
  const result = await deleteEvent_TypeService(id);
  if (result.length <= 0)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
