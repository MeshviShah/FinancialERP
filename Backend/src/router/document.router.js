import { Router } from 'express';
import { getDocumentController, getAllDocumentController, updateDocumentController, deleteDocumentController, creatDocumentController } from '../controller/document.controller.js';


const DocumentRouter  = Router();

//Document Router
DocumentRouter.post("/" , creatDocumentController);                  //Creat Document 
DocumentRouter.get("/:id",getDocumentController)                     //Get Document By Id             
DocumentRouter.get("/",getAllDocumentController)                     //Get All Documents
DocumentRouter.put("/:id",updateDocumentController)                  //Update Document By Id
DocumentRouter.delete("/:id",deleteDocumentController)               //Delete Document By Id


export {DocumentRouter};