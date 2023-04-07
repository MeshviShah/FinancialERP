import { service } from "../models/service.model.js";
import { Types } from "mongoose";
const { ObjectId } = Types;
export async function CreatServiceService(data) {
  const result = await service.create(data); //Creat Service Query
  return result;
}
export async function getServiceService(id) {
  //Get Service By Id Query

  const result = await service.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },

    {
      $lookup: {
        from: "service_categories",
        localField: "category_id",
        foreignField: "_id",
        as: "category",
      },
    },
  ]);
  return result;
}
export async function getAllServiceService() {
  //Get All Service By Id Query

  const result = await service.aggregate([
    {
      $lookup: {
        from: "service_categories",
        localField: "category_id",
        foreignField: "_id",
        as: "category",
      },
    },
  ]);
  return result;
}

export async function updateServiceService(data, id) {
  //Update Service By Id Query

  const result = await service.findByIdAndUpdate(data, id);
  return result;
}

export async function deleteServiceService(id) {
  //Delete Service By Id Query

  const result = await service.findByIdAndDelete(id);
  return result;
}
