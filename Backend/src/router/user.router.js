import { Router } from "express";
import {
  creatUserController,
  getUserController,
  getAllUserController,
  updateUserController,
  deleteUserController,
  getUserByIdController,
  countUserController,
} from "../controller/user.controller.js";
import { userValidator } from "../validators/user.validators.js";
import { auth } from "../middleware/auth.js";
import {imageUpload} from "../service/uploadImage.service.js"
import { upload, uploadImage } from "../utils/uploadImage.js";
const UserRouter = Router();

UserRouter.post("/",
// userValidator,
creatUserController);
UserRouter.get("/mydata", auth ,getUserByIdController); 
UserRouter.get("/count",countUserController)
UserRouter.get("/:id", getUserController);
UserRouter.get("/", getAllUserController);
UserRouter.put("/:id" , updateUserController);
UserRouter.delete("/", deleteUserController);
UserRouter.post("/upload", upload.single("file"), uploadImage);   //Image Upload
export { UserRouter };
