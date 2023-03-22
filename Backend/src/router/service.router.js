import { Router } from "express";
import {
  getServiceController,
  getAllServiceController,
  updateServiceController,
  deleteServiceController,
  creatServiceController,
} from "../controller/service.controller.js";
import { serviceValidator } from "../validators/service.validators.js";

const ServiceRouter = Router();

//Service Router
ServiceRouter.post("/", serviceValidator, creatServiceController); //Creat Service
ServiceRouter.get("/:id", getServiceController); //Get Service By Id
ServiceRouter.get("/", getAllServiceController); //Get All Services
ServiceRouter.put("/:id", updateServiceController); //Update Service By Id
ServiceRouter.delete("/:id", deleteServiceController); //Delete Service By Id

export { ServiceRouter };
