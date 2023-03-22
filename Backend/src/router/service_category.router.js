import { Router } from "express";
import {
  getService_categoryController,
  getAllService_categoryController,
  updateService_categoryController,
  deleteService_categoryController,
  creatService_categoryController,
} from "../controller/service_category.controller.js";

const Service_categoryRouter = Router();

//Service_category Router
Service_categoryRouter.post("/", creatService_categoryController); //Creat Service_category
Service_categoryRouter.get("/:id", getService_categoryController); //Get Service_category By Id
Service_categoryRouter.get("/", getAllService_categoryController); //Get All Service_categorys
Service_categoryRouter.put("/:id", updateService_categoryController); //Update Service_category By Id
Service_categoryRouter.delete("/:id", deleteService_categoryController); //Delete Service_category By Id

export { Service_categoryRouter };
