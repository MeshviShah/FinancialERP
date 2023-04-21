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
ClientRouter.post("/",auth, creatClientController); //Creat Client
ClientRouter.get("/:id", auth, getClientController); //Get Client By Id
ClientRouter.get("/",auth, getAllClientController); //Get All Clients
ClientRouter.put("/:id",auth, updateClientController); //Update Client By Id
ClientRouter.delete("/:id",auth, deleteClientController); //Delete Client By Id

export { ClientRouter };
