import { config } from "dotenv";
import bcrypt from "bcrypt";
const saltRounds = parseInt(process.env.SALT);

export async function passwordHash(password) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
   
    return   hash;
  } catch (error) {
    return 
  }
}
