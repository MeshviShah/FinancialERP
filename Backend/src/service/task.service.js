import { task } from "../models/task.models.js";
import { Types } from "mongoose";
import { getAllUserService, getUserService } from "./user.service.js";
const { ObjectId } = Types;

export async function CreatTaskService(data) {
  const result = await task.create(data); //Creat Task Query
  return result;
}
export async function getTaskService(id) {
  
  const result = await task.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },

    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $lookup: {
        from: "clients",
        localField: "client_id",
        foreignField: "_id",
        as: "client",
      },
    },
  ]); //Get Task By Id Query
  return result;
}
export async function getAllTaskService(data,role_name,id,firm_id) {

 
    let matchStage = {
      $or: [
        { name: { $regex: data.search, $options: "i" } },
        { user: { $regex: data.search, $options: "i" } },
      ],
    };
    if (role_name !== "admin") {
     
      matchStage = {
        ...matchStage,
        user_id: new ObjectId(id),
      };
    }
    if(role_name == "admin"){
    const  employee = await getAllUserService(data= {search: '',
  order: '',
  sortField: '',
  filterField: '',
  filterValue: '',
  offset: NaN,
  limit: NaN},firm_id);
      //console.log(employee)
      const ids = employee.map((item) => item._id);
      //console.log(ids)
      matchStage = {
        ...matchStage,
        user_id: { $in: ids.map((id) => new ObjectId(id)) },
      };
    }
  const result = await task.aggregate([
    { $match: matchStage },

    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    },

    {
      $lookup: {
        from: "clients",
        localField: "client_id",
        foreignField: "_id",
        as: "client",
      },
    },
  ]); //Get All Task Query
  return result;
}

export async function updateTaskService(data, id) {
  const result = await task.findByIdAndUpdate(data, id); //Update Task By Id Query
  return result;
}

export async function deleteTaskService(ids) {
  const result = await task.deleteMany({ _id: { $in: ids } }); //Delete Task By Id Query
  return result;
}

export async function countTaskService(firm_id) {
  const result = await task.aggregate([
    {
      $match: {
        firm_id: { $eq: new ObjectId(firm_id) },
      },
    },
    {
      $count: "totalCount",
    },
  ]);
  console.log(result)
  return result;
}