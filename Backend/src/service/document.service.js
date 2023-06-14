import { document } from "../models/document.model.js";
import { Types } from "mongoose";
import { getAllClientService } from "./client.service.js";
import { profileImage } from "../utils/image.utils.js";
const { ObjectId } = Types;

export async function CreatDocumentService(data) {

  const result = await document.create(data); //Creat Document Query
  return result;
}
export async function getDocumentService(id) {
  const result = await document.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },

    {
      $lookup: {
        from: "clients",
        localField: "client_id",
        foreignField: "_id",
        as: "client",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $lookup: {
        from: "tasks",
        localField: "task_id",
        foreignField: "_id",
        as: "task",
      },
    },
    {
      $lookup: {
        from: "services",
        localField: "service",
        foreignField: "_id",
        as: "service",
      },
    },
  ]); //Get Document By Id Query
  
  
  return result.map((u) => {
    const { file,  ...rest } = u;

    if (file) {
      const image = profileImage(file);
      const updatedDoc = {
        ...rest,
        file: image,
      };

      return updatedDoc;
    } else {
      const userWithoutPassword = { ...rest };
      return userWithoutPassword;
    }
  });
}
export async function getAllDocumentService(data,id,firm_id,role_name) {
    
  let matchStage = { 
     
        $or: [
          { name: { $regex: data.search, $options: "i" } },
          // { email: { $regex: data.search, $options: "i" } },
        ],
      };
   if (role_name !== "admin") {
     matchStage = {
       ...matchStage,
       user_id: new ObjectId(id),
     };
   }
   if (role_name == "admin") {
     const employee = await getAllClientService(
       {
         search: "",
         order: "",
         sortField: "",
         filterField: "",
         filterValue: "",
         offset: NaN,
         limit: NaN,
       },
       firm_id
     );
     //console.log(employee)
     const ids = employee.map((item) => item?._id);
     
     matchStage = {
       ...matchStage,
       client_id: { $in: ids.map((id) => new ObjectId(id)) },
     };
   }
  const result = await document.aggregate([
    { $match: matchStage },
    {
      $lookup: {
        from: "clients",
        localField: "client_id",
        foreignField: "_id",
        as: "client",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    },
  ]); //Get All Document Query
 
  return result.map((u) => {
    const { file,  ...rest } = u;
    
    if (file) {
      const image = profileImage(file);
      const updatedUser = {
        ...rest,
        file: image,
      };
     
       return updatedUser;
    } else {
     
      return u;
    }
  });
}
export async function updateDocumentService(data, id) {
  const result = await document.findByIdAndUpdate(data, id); //Update Document By Id Query
  return result;
}

export async function deleteDocumentService(ids) {
  const result = await document.deleteMany({ _id: { $in: ids } }); // Delete Document By ID query
  return result.deletedCount;
}


export async function countDocumentService(firm_id) {
  const result = await document.aggregate([
    // {
    //   $match: {
    //     firm_id: { $eq: new ObjectId(firm_id) },
    //   },
    // },
    {
      $count: "totalCount",
    },
  ]);
  return result?.[0].totalCount;
}