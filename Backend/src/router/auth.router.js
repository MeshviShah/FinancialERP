import { Router } from "express";
import {
  registerController,
  loginController,
  forgetPasswordController,
  resetPasswordController,
  changePassword,
} from "../controller/auth.controller.js";
import { auth } from "../middleware/auth.js";

const AuthRouter = Router();

//Auth Router
AuthRouter.post("/register", registerController); //Creat Auth
AuthRouter.post("/login", loginController);
AuthRouter.post(`/forgetpassword`, forgetPasswordController);
AuthRouter.post(`/reset-token/:token`, resetPasswordController);
AuthRouter.post("/change-password", auth, changePassword);
export { AuthRouter };
