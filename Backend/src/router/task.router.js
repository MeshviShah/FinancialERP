import { Router } from "express";
import {
  getTaskController,
  getAllTaskController,
  updateTaskController,
  deleteTaskController,
  creatTaskController,
  countTaskController,
} from "../controller/task.controller.js";
import { taskValidator } from "../validators/task.validatos.js";

const TaskRouter = Router();

//Task Router
TaskRouter.post("/",  creatTaskController); //Creat Task
TaskRouter.get("/count", countTaskController);
TaskRouter.get("/:id", getTaskController); //Get Task By Id
TaskRouter.get("/", getAllTaskController); //Get All Tasks
TaskRouter.put("/:id", updateTaskController); //Update Task By Id
TaskRouter.delete("/", deleteTaskController); //Delete Task By Id

export { TaskRouter };
