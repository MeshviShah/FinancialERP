import { firm } from "../models/firm.model.js";

export async function CreatFirmService(data) {
  //console.log(data,"service")
  const result = await firm.create(data); //Creat Firm Query
  return result;
}
export async function getFirmService(id) {
  const result = await firm.findById(id); //Get Firm By Id Query
  return result;
}
export async function getAllFirmService() {
  const result = await firm.find(); //Get All Firm Query
  return result;
}

export async function updateFirmService(data, id) {
  const result = await firm.findByIdAndUpdate(data, id); //Update Firm Query
  return result;
}

export async function deleteFirmService(id) {
  const result = await firm.findByIdAndDelete(id); //Delete Firm By Id Query
  return result;
}
