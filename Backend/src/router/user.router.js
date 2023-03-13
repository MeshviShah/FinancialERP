const express = require('express');
const { creatUserController, getUserController } = require('../controller/user.controller');


const UserRouter  = express.Router();

UserRouter.post("/" , creatUserController);
UserRouter.get("/:id",getUserController)
UserRouter.get("/",getUserController)
UserRouter.put("/:id",getUserController)
UserRouter.delete("/:id",getUserController)


module.exports = UserRouter;

