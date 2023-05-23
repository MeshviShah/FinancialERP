import { tender } from "../models/tender.model.js";

export async function CreatTenderService(data) {
  const result = await tender.create(data); // Creat tender Query
  return result;
}
export async function getTenderService(id) {
  const result = await tender.findById(id); //Get tender By Id Query
  return result;
}
export async function getAllTenderService() {
  const result = await tender.find(); //Get All tender Query
  return result;
}

export async function updateTenderService(data, id) {
  const result = await tender.findByIdAndUpdate(data, id); //Update tender By Id Query
  return result;
}

export async function deleteTenderService(id) {
  const result = await tender.findByIdAndDelete(id); //Delete tender By Id Query
  return result;
}
export async function countTenderService() {
  const result = await tender.aggregate([
   
    {
      $count: "totalCount",
    },
  ]);
  return result?.[0]?.totalCount;
}