import { Router } from "express";
import {
  getFirmController,
  getAllFirmController,
  updateFirmController,
  deleteFirmController,
  creatFirmController,
} from "../controller/firm.controller.js";
import { firmValidator } from "../validators/firm.validators.js";

const FirmRouter = Router();

//Firm Router
FirmRouter.post("/", firmValidator, creatFirmController); //Add Firm
FirmRouter.get("/:id", getFirmController); //Get Firm By ID
FirmRouter.get("/", getAllFirmController); //Get All Firm
FirmRouter.put("/:id", updateFirmController); //Update Firm By Id
FirmRouter.delete("/:id", deleteFirmController); //Delete Firm By Id

export { FirmRouter };
