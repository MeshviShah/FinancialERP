import { task_status } from "../models/task_status.model.js";

export async function CreatTask_statusService(data) {
  const result = await task_status.create(data); // Creat Task_status Query
  return result;
}
export async function getTask_statusService(id) {
  const result = await task_status.findById(id); //Get Task_status By Id Query
  return result;
}
export async function getAllTask_statusService() {
  const result = await task_status.find(); //Get All Task_status Query
  return result;
}

export async function updateTask_statusService(data, id) {
  const result = await task_status.findByIdAndUpdate(data, id); //Update Task_status By Id Query
  return result;
}

export async function deleteTask_statusService(id) {
  const result = await task_status.findByIdAndDelete(id); //Delete Task_status By Id Query
  return result;
}
