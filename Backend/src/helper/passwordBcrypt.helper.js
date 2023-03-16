import { genSalt, hash as _hash, compare } from 'bcrypt';
import { config } from 'dotenv';
import bcrypt from 'bcrypt';
const saltRounds = parseInt(process.env.SALT)


 export async function passwordBcrypt(password,hash){
    try{
    const value =  bcrypt.compare(password,hash)
      return value    
    }catch(error){
        return error
    }
 }