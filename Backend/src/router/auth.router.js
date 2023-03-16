import { Router } from 'express';
import {  registerController, loginController } from '../controller/Auth.controller.js';



const AuthRouter  = Router();

//Auth Router
AuthRouter.post("/register" , registerController );                  //Creat Auth 
AuthRouter.post("/login" , loginController );  


export {AuthRouter};