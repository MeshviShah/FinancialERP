import { task } from "../models/task.models.js";
import { Types } from "mongoose";
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
        from: "task_status",
        localField: "task_status",
        foreignField: "_id",
        as: "task_status",
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
  ]); //Get Task By Id Query
  return result;
}
export async function getAllTaskService() {
  const result = await task.aggregate([
    {
      $lookup: {
        from: "task_status",
        localField: "task_status",
        foreignField: "_id",
        as: "task_status",
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
  ]); //Get All Task Query
  return result;
}

export async function updateTaskService(data, id) {
  const result = await task.findByIdAndUpdate(data, id); //Update Task By Id Query
  return result;
}

export async function deleteTaskService(id) {
  const result = await task.findByIdAndDelete(id); //Delete Task By Id Query
  return result;
}
