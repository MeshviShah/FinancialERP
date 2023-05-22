import { Router } from "express";
import {
  getDocumentController,
  getAllDocumentController,
  updateDocumentController,
  deleteDocumentController,
  creatDocumentController,
  countDocumentController,
} from "../controller/document.controller.js";
import { auth } from "../middleware/auth.js";

const DocumentRouter = Router();

//Document Router
DocumentRouter.post("/", creatDocumentController); //Creat Document
DocumentRouter.get("/count", countDocumentController);  
DocumentRouter.get("/:id", getDocumentController); //Get Document By Id
DocumentRouter.get("/", getAllDocumentController); //Get All Documents
DocumentRouter.put("/:id", updateDocumentController); //Update Document By Id
DocumentRouter.delete("/", deleteDocumentController); //Delete Document By Id

export { DocumentRouter };
