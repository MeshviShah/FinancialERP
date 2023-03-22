import { user } from "../models/user.model.js";
import { genSalt, hash as _hash, compare } from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { passwordHash } from "../helper/passwordhash.helper.js";
const saltRounds = parseInt(process.env.SALT);

export async function registrationAuthService(result) {
  const password = result.password
  const hash = await passwordHash(password);
  result.password = hash;
  const data = await user.create(result);
  return data;
}
