import { Router } from "express";
import {
  creatUserController,
  getUserController,
  getAllUserController,
  updateUserController,
  deleteUserController,
} from "../controller/user.controller.js";
import { userValidator } from "../validators/user.validators.js";
import { auth } from "../middleware/auth.js";
const UserRouter = Router();

UserRouter.post("/",
// userValidator,
creatUserController);
UserRouter.get("/:id", getUserController);
UserRouter.get("/", getAllUserController);
UserRouter.put("/:id" , updateUserController);
UserRouter.delete("/:id", deleteUserController);

export { UserRouter };
