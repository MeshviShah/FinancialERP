import { Router } from "express";
import {
  getTask_statusController,
  getAllTask_statusController,
  updateTask_statusController,
  deleteTask_statusController,
  creatTask_statusController,
} from "../controller/task_status.contoller.js";

const Task_statusRouter = Router();

//Task_status Router
Task_statusRouter.post("/", creatTask_statusController); //Creat Task_status
Task_statusRouter.get("/:id", getTask_statusController); //Get Task_status By Id
Task_statusRouter.get("/", getAllTask_statusController); //Get All Task_statuss
Task_statusRouter.put("/:id", updateTask_statusController); //Update Task_status By Id
Task_statusRouter.delete("/:id", deleteTask_statusController); //Delete Task_status By Id

export { Task_statusRouter };
