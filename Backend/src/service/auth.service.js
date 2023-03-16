import { user } from "../models/user.model.js";
import { genSalt, hash as _hash, compare } from 'bcrypt';
import { config } from 'dotenv';
import  jwt  from 'jsonwebtoken';
import { passwordHash } from "../helper/passwordhash.helper.js";
config();

export async function  registrationAuthService(result) {
       const hash =await passwordHash(result.password);
        result.password = hash
        const data =await user.create(result)          
        return data  
       
}

export async function loginAuthService({email,password}) {
       let userr = await user.findOne({ email })
        
         const userData = {
            email : user.email,
         }
      
         compare(password,userr.password, (err,result) => {
            if(result){
               const token = sign({
                  email:userr.email,
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