import {
  CreatEventService,
  getEventService,
  getAllEventService,
  updateEventService,
  deleteEventService,
} from "../service/Event.service.js";
import { resType } from "../response/res.types.js";

//Creat Event
export async function creatEventController(req, res) {
  const data = req.body;
  const result = await CreatEventService(data);
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Get Event By Id
export async function getEventController(req, res) {
  const id = req.params.id; 
  const result = await getEventService(id);
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Get All Events
export async function getAllEventController(req, res) {
  const result = await getAllEventService();
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Update Event By Id
export async function updateEventController(req, res) {
   const id = req.params.id;
   const data = req.body;
  const result = await updateEventService(id,data);
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
//Delete Event By Id
export async function deleteEventController(req, res) {
  const id = req.params.id
  const result = await deleteEventService(id);
  if (result == null || result == undefined)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  return res.status(200).json({ data: result, res: resType.SUCCESS });
}
