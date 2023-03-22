import { event_type } from "../models/event_type.model.js";

export async function CreatEvent_TypeService({data}) {
  const result = await event_type.create(data); //Creat event_type_Type Query
  return result;
}
export async function getEvent_TypeService({id}) {
  const result = await event_type.findById(id); //Get event_type_Type By Id Query
  return result;
}
export async function getAllEvent_TypeService() {
  const result = await event_type.find(); //Get All event_type_Type Query
  return result;
}

export async function updateEvent_TypeService(id,data) {
  const result = await event_type.findByIdAndUpdate(id,data); //Update event_type_Type By Id Query
  return result;
}

export async function deleteEvent_TypeService(id) {
  const result = await event_type.findByIdAndDelete(id); //Delete event_type_Type By ID query
  return result;
}
