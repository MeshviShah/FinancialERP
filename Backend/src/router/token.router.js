import { Router } from "express";
import { creatTokenController, deleteTokenController, getAllTokenController, getTokenController, updateTokenController } from "../controller/token.controller.js";

const TokenRouter = Router();

//Firm Router
TokenRouter.post("/", creatTokenController); //Add Firm
TokenRouter.get("/:id", getTokenController); //Get Firm By ID
TokenRouter.get("/", getAllTokenController); //Get All Firm
TokenRouter.put("/:id", updateTokenController); //Update Firm By Id
TokenRouter.delete("/:id", deleteTokenController); //Delete Firm By Id

export { TokenRouter };
