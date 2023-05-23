import { Router } from "express";
import {
  getRoleController,
  getAllRoleController,
  updateRoleController,
  deleteRoleController,
  creatRoleController,
} from "../controller/role.controller.js";
import { auth } from "../middleware/auth.js";
import { roleValidator } from "../validators/role.validators.js";

const RoleRouter = Router();

//Role Router
RoleRouter.post("/", roleValidator, creatRoleController); //Creat Role
RoleRouter.get("/:id", getRoleController); //Get Role By Id
RoleRouter.get("/", getAllRoleController); //Get All Roles
RoleRouter.put("/:id", updateRoleController); //Update Role By Id
RoleRouter.delete("/:id", deleteRoleController); //Delete Role By Id

export { RoleRouter };
