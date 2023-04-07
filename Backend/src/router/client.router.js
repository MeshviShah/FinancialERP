import { Router } from "express";
import {
  getClientController,
  getAllClientController,
  updateClientController,
  deleteClientController,
  creatClientController,
} from "../controller/client.controller.js";
import { auth } from "../middleware/auth.js";
import { clientValidator } from "../validators/client.validators.js";

const ClientRouter = Router();

//Client Router
ClientRouter.post("/", creatClientController); //Creat Client
ClientRouter.get("/:id",  getClientController); //Get Client By Id
ClientRouter.get("/", getAllClientController); //Get All Clients
ClientRouter.put("/:id", updateClientController); //Update Client By Id
ClientRouter.delete("/:id", deleteClientController); //Delete Client By Id

export { ClientRouter };
