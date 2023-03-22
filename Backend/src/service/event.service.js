import { event } from "../models/event.models.js";
import { Types } from "mongoose";
const { ObjectId } = Types;
export async function CreatEventService(data) {
  const result = await event.create(data); //Creat Event Query
  return result;
}
export async function getEventService(id) {
  const result = await event.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },

    {
      $lookup: {
        from: "event_types",
        localField: "event_type",
        foreignField: "_id",
        as: "event_type",
      },
    },
  ]); //Find Event By Id Query
  return result;
}
export async function getAllEventService() {
  const result = await event.aggregate([
    {
      $lookup: {
        from: "event_types",
        localField: "event_type",
        foreignField: "_id",
        as: "event_type",
      },
    },
  ]); //Find All Event Query
  return result;
}

export async function updateEventService(data, id) {
  const result = await event.findByIdAndUpdate(data, id); //Update Event By Id Query
  return result;
}

export async function deleteEventService(id) {
  const result = await event.findByIdAndDelete(id); //Delete Event By Id Query
  return result;
}
