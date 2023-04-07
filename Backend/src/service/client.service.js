import { client } from "../models/client.model.js";
import { Types } from "mongoose";
const { ObjectId } = Types;

export async function CreatClientService(data) {
  const result = await client.create(data); //Creat Client Query
  return result;
}
export async function getClientService(id) {
  const result = await client.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },

    {
      $lookup: {
        from: "users",
        localField: "ca_id",
        foreignField: "_id",
        as: "CA",
      },
    },

    {
      $lookup: {
        from: "firms",
        localField: "firm_id",
        foreignField: "_id",
        as: "firm",
      },
    },
    {
      $lookup: {
        from: "services",
        localField: "service_id",
        foreignField: "_id",
        as: "service",
      },
    },
  ]); //Get Client By Id Query
  return result;
}
export async function getAllClientService() {
  const result = await client.aggregate([
  
    {
      $lookup: {
        from: "users",
        localField: "ca_id",
        foreignField: "_id",
        as: "CA",
      },
    },

    {
      $lookup: {
        from: "firms",
        localField: "firm_id",
        foreignField: "_id",
        as: "firm",
      },
    },
    {
      $lookup: {
        from: "services",
        localField: "service_id",
        foreignField: "_id",
        as: "service",
      },
    },
  ]); //Get All Client Query
  return result;
}

export async function updateClientService(data, id) {
  
  const result = await client.findByIdAndUpdate(id,data); //Update Client By Id Query
  return result;
}

export async function deleteClientService(id) {
  const result = await client.findByIdAndDelete(id); //Delete Client By ID query
  return result;
}
