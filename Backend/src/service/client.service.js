import { client } from "../models/client.model.js";
import { Types } from "mongoose";
const { ObjectId } = Types;

export async function CreatClientService(data) {
  const result = await client.create(data); //Creat Client Query
  return result;
}
export async function getClientService(id,firm_id) {
  const result = await client.aggregate([
    {
      $match: {
        firm_id: { $eq: new ObjectId(firm_id) },
      },
    },
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
export async function getAllClientService(data,firm_id) {
  console.log(firm_id,"firm")
  const result = await client.aggregate([
    {
      $match: {
        firm_id: { $eq: new ObjectId(firm_id) },
      },
    },
    {
      $match: {
        $or: [
          { name: { $regex: data.search, $options: "i" } },
          { email: { $regex: data.search, $options: "i" } },
        ],
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
  ]); //Get All Client Query
  return result;
}

export async function updateClientService(data, id) {
  
  const result = await client.findByIdAndUpdate(id,data); //Update Client By Id Query
  return result;
}

export async function deleteClientService(ids) {
  const result = await client.deleteMany({ _id: { $in: ids } }); //Delete Client By ID query
  return result;
}


export async function getPaymentClientService(data) {
  const result = await client.aggregate([
    {
      $match: {
        payment: "pending",
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
    {
      $project: {
        email: 1, // Include the fieldName field in the output document
        _id: 1, // Exclude the _id field from the output document
      },
    },
  ]); //Get All Client Query
  return result;
}



export async function countClientService(firm_id) {
  const result = await client
    .aggregate([
      {
        $match: {
          firm_id: { $eq: new ObjectId(firm_id) },
        },
      },
      {
        $count: "totalCount",
      },
    ])
    ;
  return result?.[0].totalCount;
}