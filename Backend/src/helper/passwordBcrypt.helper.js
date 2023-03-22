// import {  hash as _hash } from "bcrypt";
import bcrypt from "bcrypt";
import { config } from "dotenv";
const saltRounds = parseInt(process.env.SALT);
export async function passwordBcrypt(password, hash) {
  try {
    const value =await  bcrypt.compare(password, hash);
    return value;
  } catch (error) {
    return 
  }
}
