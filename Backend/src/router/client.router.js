import { Router } from "express";
import {
  getClientController,
  getAllClientController,
  updateClientController,
  deleteClientController,
  creatClientController,
  countClientController,
} from "../controller/client.controller.js";
import { auth } from "../middleware/auth.js";
import { clientValidator } from "../validators/client.validators.js";
import { schedularController } from "../controller/schedular.controller.js";

const ClientRouter = Router();

//Client Router
ClientRouter.post("/", creatClientController); //Creat Client
ClientRouter.get("/pay", schedularController); 
ClientRouter.get("/count",auth, countClientController);    
ClientRouter.get("/:id", auth, getClientController); //Get Client By Id
ClientRouter.get("/",
// auth,
getAllClientController); //Get All Clients
ClientRouter.put("/:id",auth, updateClientController); //Update Client By Id
ClientRouter.delete("/", deleteClientController); //Delete Client By Id

export { ClientRouter };
