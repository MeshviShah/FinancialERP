import { service_category } from "../models/service_category.model.js";

export async function CreatService_categoryService(data) {
  const result = await service_category.create(data); //Creat Service Query
  return result;
}
export async function getService_categoryService(id) {
  const result = await service_category.findById(id); //Get Service_category By Id QUery
  return result;
}
getAllService_categoryService()
export async function getAllService_categoryService() {
  const result = await service_category.find(); //Get All Service_category Query
  return result;
}

export async function updateService_categoryService(data, id) {
  const result = await service_category.findByIdAndUpdate(data, id); //Update Service_cateogry By Id Query
  return result;
}

export async function deleteService_categoryService(id) {
  const result = await service_category.findByIdAndDelete(id); //Delete Service_category By Id Query
  return result;
}
