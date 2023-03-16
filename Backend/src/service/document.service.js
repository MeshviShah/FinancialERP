import { document } from "../models/document.model.js";
 import { Types } from 'mongoose';
 const { ObjectId } = Types;

export async function CreatDocumentService(data){ 
        const result = await document.create(data);                          //Creat Document Query
        return result   
   
}
export async function getDocumentService(id){
     
        const result = await document.aggregate([
        {
          $match: {
            _id: new ObjectId(id)
        }
        },
   
    {
     
      $lookup: {
        from: "clients",
        localField: "client_id",
        foreignField: "_id",
        as: "client"
      }
    },
    {
     
      $lookup: {
        from: "services",
        localField: "service_id",
        foreignField: "_id",
        as: "service"
      }
    },
   
  
  ])                            //Get Document By Id Query
         return result        
   
}
export async function getAllDocumentService(){
   
        const result = await document.aggregate([
   
    {
     
      $lookup: {
        from: "clients",
        localField: "client_id",
        foreignField: "_id",
        as: "client"
      }
    },
    {
     
      $lookup: {
        from: "services",
        localField: "service_id",
        foreignField: "_id",
        as: "service"
      }
    },
  ])                                    //Get All Document Query
         return result         
}

export async function updateDocumentService(data,id){
     
        const result = await document.findByIdAndUpdate(data,id);          //Update Document By Id Query
          return result     
}

export async function deleteDocumentService(id){
     
        const result = await document.findByIdAndDelete(id);              //Delete Document By ID query
         return result    
}