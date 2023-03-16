import { user } from "../models/user.model.js";
import { genSalt, hash as _hash, compare } from 'bcrypt';
import { config } from 'dotenv';
import  jwt  from 'jsonwebtoken';
config();
 const saltRounds = parseInt(process.env.SALT)
export async function  registrationAuthService(result) {
       const salt =await  genSalt(saltRounds);
       const hash =await _hash(result.password, salt);
        result.password = hash
        const data =await user.create(result)           //Creat User Query
        return data  
       
}

export async function loginAuthService({email,password}) {
       let user = await user.findOne({ email })
         if(!user) {
             return res.status(401).json({
                  message: "Please Enter Correct Credential"
                });
         }
         const userData = {
            email : user.email,
         }
      
         compare(password,user.password, (err,result) => {
            if(result){
               const token = sign({
                  email:user.email,
               },secret,{expiresIn: "1h"})
               return result({
                  data: userData,
                  token: token,
                  isAuthenticated: true,
                  message: "LOG IN",
                });
            }
            
         })
   
}