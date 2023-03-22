import { Router } from "express";
import {
  getEventController,
  getAllEventController,
  updateEventController,
  deleteEventController,
  creatEventController,
} from "../controller/event.contoller.js";

const EventRouter = Router();

//Event Router
EventRouter.post("/", creatEventController); //Creat Event
EventRouter.get("/:id", getEventController); //Get Event By Id
EventRouter.get("/", getAllEventController); //Get All Events
EventRouter.put("/:id", updateEventController); //Update Event By Id
EventRouter.delete("/:id", deleteEventController); //Delete Event By Id

export { EventRouter };
