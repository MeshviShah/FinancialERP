import { Rtoken } from "../models/token.model.js";

export async function CreatTokenService(adata) {
  console.log(adata)
  const result = await Rtoken.create(adata); //Creat token_Type Query
  return result;
}
export async function getTokenService({ id }) {
  const result = await Rtoken.findById(id); //Get token_Type By Id Query
  return result;
}
export async function getTokenByTokenService({ token }) {
  // console.log(token)
  const result = await Rtoken.findOne({token});
 // console.log(result,"fiedjf"); //Get token_Type By Id Query
  return result;
}
export async function getAllTokenService() {
  const result = await Rtoken.find(); //Get All token_Type Query
  return result;
}

export async function updateTokenService(id, data) {
  const result = await Rtoken.findByIdAndUpdate(id, data); //Update token_Type By Id Query
  return result;
}

export async function deleteTokenService(id) {
  const result = await Rtoken.findByIdAndDelete(id); //Delete token_Type By ID query
  return result;
}
