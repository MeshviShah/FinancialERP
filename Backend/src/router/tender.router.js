import { Router } from "express";
import {
  getTenderController,
  getAllTenderController,
  updateTenderController,
  deleteTenderController,
  creatTenderController,
  countTenderController,
} from "../controller/tender.controller.js";
import { auth } from "../middleware/auth.js";
import { upload, uploadImage } from "../utils/uploadImage.js";

const TenderRouter = Router();

//Tender Router
TenderRouter.post("/", creatTenderController); //Creat Tender
TenderRouter.get("/count", countTenderController);
TenderRouter.get("/:id", getTenderController); //Get Tender By Id
TenderRouter.get("/", getAllTenderController); //Get All Tenders
TenderRouter.put("/:id", updateTenderController); //Update Tender By Id
TenderRouter.delete("/:id", deleteTenderController); //Delete Tender By Id
TenderRouter.post("/upload", upload.single("file"), uploadImage);
export { TenderRouter };
