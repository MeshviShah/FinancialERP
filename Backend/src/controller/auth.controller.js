import { registrationAuthService } from "../service/auth.service.js";
import { resType } from "../response/res.types.js";
import {
  getUserByEmailService,
  getUserById,
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
import {
  CreatTokenService,
  getTokenByTokenService,
} from "../service/token.service.js";
import { CreatFirmService } from "../service/Firm.service.js";
import { startSession } from "mongoose";
// const id =new  mongoose.Types.ObjectId();

const secret = process.env.JWT_KEY;
const API_URL = process.env.FRONTEND_API_URL;
//Register Controller
export async function registerController(req, res) {
  const result = req.body;
  const role_id = "641aa625e9f4a78c1bac5601";
  
  const session = await startSession();
   try {
    session.startTransaction(); 
    const dataP = {...result,role_id}
  const resultfirm = await CreatFirmService(dataP, session); 
  let firmId = resultfirm.id;
  const data = await registrationAuthService({...result , firm_id : firmId}, session);
    await session.commitTransaction();
  return res
    .status(200)
    .json({ data: {data,resultfirm}, res: resType.SUCCESS, statusCode: 200 });
}catch (error) {
    await session.abortTransaction();

    return res.status(500).json({ error: 'An error occurred during registration.' });
  } finally {
    session.endSession();
  }
}

//Login Password Controllet
export async function loginController(req, res) {
  const { email, password } = req.body;
  const data = await getUserByEmailService({ email });
  console.log(data,"data")
  if (!data) return res
    .status(401)
    .json({ res: resType.WRONG_CREDENTIAL, statusCode: 401 });
  const hash = data?.[0]?.password;
  //console.log(data,"fff")
  const result = await passwordBcrypt(password, hash);
  if (!result) return res
    .status(401)
    .json({ res: resType.WRONG_CREDENTIAL, statusCode: 401 });
  const obj = {
    email: email,
    role_id: data?.[0].role_id,
    firm_id: data?.[0].firm_id,
    id: data?.[0]._id,
  };
  const etext = await encrypt(obj);

  const accessToken = await tokenGen(etext);

  return res
    .status(200)
    .json({
      data: { data, accessToken },
      res: resType.LOGGED_IN,
      statusCode: 200,
    });
}

//Forget PAssword Controller
export async function forgetPasswordController(req, res) {
  const result = req.body;
 
  const data = await getUserByEmailService({ email: result?.email });
  if (!data) return res.status(404).json({ response: resType.DATANOTAVAIABLE });
  const obj = {
    email: data?.[0]?.email,
    role_id: data?.[0]?.role_id,
    firm_id: data?.[0]?.firm_id,
    id: data?.[0]?.id,
  };
  console.log(obj,"obj")
  const etext = await encrypt(obj);
  const accessToken = await tokenGen(etext);
  // const adata = { token: accessToken };
  //console.log(adata);
  const link = `${API_URL}/reset-token/:${accessToken}`;
  console.log(link);
  const sendEmail = sendMail({ email: data?.[0]?.email, link: link });
  return res.status(200).json({ res: resType.SUCCESS, statusCode: 200});
}

export async function resetPasswordController(req, res) {
  const authTokenn = req.params;
  const authToken = authTokenn.token.substring(1);

  if (!authToken)
    return res
      .status(401)
      .json({ response: resType.WRONG_CREDENTIAL, statusCode: 401 });
  const token = await getTokenByTokenService({ token: authToken });
  // console.log(token,"gettoken")

 if (!token) {
    const adata = { token: authToken };
    const addToken = await CreatTokenService(adata);
    jwt.verify(authToken, secret, async (err, payload) => {
      if (err) return res.json({ res: resType.ERROR, statusCode: 403})
      const { etext } = payload;
 
      const bcryptData = await decrypt(etext);

      const result = await getUserByEmailService({ email: bcryptData.email });
      if (!result) return res.json({ res: resType.ERROR, statusCode: 403 });

      const { password } = req.body;

      if (!password)
        return res.json({ res: resType.DATANOTAVAIABLE, statusCode: 404 });

      const dat = await passwordHash(password);
       const data = {"password" : dat}
      //  console.log(result?.[0]._id,"result")
      const id = result?.[0]._id;

      const passwordChange = await updateUserService(id, data);
  
      // const addToken = await CreatTokenService(adata);
      if (!passwordChange)
      {
       return res.status(403).json({ response: resType.CORRECTPASSWORD, statusCode: 404 });
      }
        
      return res.status(200).json({ res: resType.SUCCESS, statusCode: 200 });
    });
  } else {
   res.status(498).json({ res: resType.ALREADYUSED,statusCode: 498 });
 }
}

//Change Password
export async function changePassword(req, res) {
  const { password, newPassword } = req.body;
  const id = req.user.data.id;
  const findUser = await getUserById(id);
  try{
  if (!findUser) {
      return res.status(403).json({ response: resType.DATANOTAVAIABLE, statusCode: 403 });
    }
    console.log(findUser,"f")
    const comPass = await passwordBcrypt(password, findUser?.password);
    
    if (!comPass) {
      return res.status(401).json({ response: resType.CORRECTPASSWORD, statusCode: 401 });
    }

    const data = { password: await passwordHash(newPassword) };
    const updatePassword = await updateUserService(id, data);

    return res.status(200).json({ data: updatePassword, res: resType.SUCCESS, statusCode: 200 });
  } catch (error) {

    return res.status(500).json({ response: resType.ERROR, statusCode: 500 });
  }
}

