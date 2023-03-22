import { Router } from "express";
import {
  getEvent_TypeController,
  getAllEvent_TypeController,
  updateEvent_TypeController,
  deleteEvent_TypeController,
  creatEvent_TypeController,
} from "../controller/event_type.controller.js";

const Event_TypeRouter = Router();

//Event_Type Router
Event_TypeRouter.post("/", creatEvent_TypeController); //Creat Event_Type
Event_TypeRouter.get("/:id", getEvent_TypeController); //Get Event_Type By Id
Event_TypeRouter.get("/", getAllEvent_TypeController); //Get All Event_Types
Event_TypeRouter.put("/:id", updateEvent_TypeController); //Update Event_Type By Id
Event_TypeRouter.delete("/:id", deleteEvent_TypeController); //Delete Event_Type By Id

export { Event_TypeRouter };
