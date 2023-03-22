import { registrationAuthService } from "../service/auth.service.js";
import { resType } from "../response/res.types.js";
import {
  getUserByEmailService,
  getUserById,
  getUserService,
  updateUserService,
} from "../service/user.service.js";
import { passwordBcrypt } from "../helper/passwordBcrypt.helper.js";
import { tokenGen } from "../helper/tokenGen.helper.js";
import { encrypt } from "../helper/encryption.helper.js";
import { sendMail } from "../helper/sendMail.helper.js";
import { decrypt } from "../helper/decryption.helper.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import mongoose from "mongoose";
import { passwordHash } from "../helper/passwordhash.helper.js";
// const id =new  mongoose.Types.ObjectId();

const secret = process.env.JWT_KEY;

export async function registerController(req, res) {
  const result = req.body;
  const data = await registrationAuthService(result);
  return res.status(200).json({ data: data, res: resType.SUCCESS });
}

export async function loginController(req, res) {
  const { email, password } = req.body;
  const data = await getUserByEmailService({ email });
  if (!data) return res.status(401).json({ res: resType.ERROR });
  const hash = data.password;
  const result = await passwordBcrypt(password, hash);
  if (!result) return res.status(401).json({ res: resType.ERROR });
  const obj = {
    email: email,
    role_id: data.role_id,
    firm_id: data.firm_id,
    id: data.id,
  };
  const etext = await encrypt(obj);

  const accessToken = await tokenGen(etext);

  return res
    .status(200)
    .json({ data: { data, accessToken }, res: resType.LOGGED_IN });
}

export async function forgetPasswordController(req, res) {
  const result = req.body;
  const data = await getUserByEmailService({ email: result.email });
  if (!data) return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  const obj = {
    email: data.email,
    role_id: data.role_id,
    firm_id: data.firm_id,
    id:data.id,
  };
  const etext = await encrypt(obj);
  const accessToken = await tokenGen(etext);
  const link = `http://localhost:5002/reset-token/:${accessToken}`;
  console.log(link);
  const sendEmail = sendMail({ email: data.email, link: link });
  return res.status(200).json({ res: resType.SUCCESS });
}

export async function resetPasswordController(req, res) {
  const authTokenn = req.params;
  const authToken = authTokenn.token.substring(1);

  if (!authToken)
    return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  jwt.verify(authToken, secret, async (err, payload) => {
    if (err) return res.sendStatus(403);
    const { etext } = payload;
    const bcryptData = await decrypt(etext);
   
    const result = await getUserByEmailService({ email: bcryptData.email });
    if (!result) return res.sendStatus(401);

    const {password} = req.body;
  
    if (!password)
      return res.status(403).json({ response: resType.DATANOTAVAIABLE });
    
    const data = await passwordHash(password);
  
    const id = result.id;

    const passwordChange = await updateUserService(id, data);
   // console.log(passwordChange)
    if (!passwordChange)
      res.status(403).json({ response: resType.DATANOTAVAIABLE });
   return res.status(200).json({ res: resType.SUCCESS });
  });
}


export async function changePassword(req,res){
   const {password,newPassword} = req.body
   const id = req.user.id
  const findUser = await getUserById(id);
  // console.log(findUser)
  if(!findUser) res.status(403).json({ response: resType.DATANOTAVAIABLE });
  const comPass = await passwordBcrypt(password,findUser.password)
  if(!comPass) res.status(401).json({ response: resType.CORRECTPASSWORD});
   const data = {password : await passwordHash(newPassword)};
  const updatePassword = await updateUserService(id,data);
  return res.status(200).json({ data: updatePassword, res: resType.SUCCESS });
}