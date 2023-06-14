import { user } from "../models/user.model.js";
import { Types } from "mongoose";
import { passwordHash } from "../helper/passwordhash.helper.js";
import { profileImage } from "../utils/image.utils.js";

const { ObjectId } = Types;

export async function CreatUserService(data) {
  const hash = await passwordHash(data.password);
  data.password = hash;
  const result = await user.create(data); //Creat User Query
  // Create a new object with all properties, but with password set to undefined
  const response = { ...result.toObject(), password: undefined }; // we can use ...result also
  return response;
}

export async function getUserService(id,firm_id) {
  //Get USer By Id Query

  const result = await user.aggregate([
    
    {
      $match: {
        _id: new ObjectId(id),
      },
    },

    {
      $lookup: {
        from: "firms",
        localField: "firm_id",
        foreignField: "_id",
        as: "firm",
      },
    },
    {
      $lookup: {
        from: "roles",
        localField: "role_id",
        foreignField: "_id",
        as: "role",
      },
    },
  ]);

  return result.map((u) => {
    const { profile_image, ...rest } = u;

    if (profile_image) {
      const image = profileImage(profile_image);
      const updatedUser = {
        ...rest,
        profile_image: image,
      };

      return updatedUser;
    } else {
      const userWithoutPassword = { ...rest };
      return userWithoutPassword;
    }
  });
}
export async function getAllUserService(data,firm_id) {

  const result = await user.aggregate([
    {
      $match: {
        firm_id: new ObjectId(firm_id),
      },
    },
    {
      $match: {
        $or: [
          { name: { $regex: data.search, $options: "i" } },
          // { email: { $regex: data.search, $options: "i" } },
        ],
      },
    },

    {
      $lookup: {
        from: "firms",
        localField: "firm_id",
        foreignField: "_id",
        as: "firm",
      },
    },
    {
      $lookup: {
        from: "roles",
        localField: "role_id",
        foreignField: "_id",
        as: "role",
      },
    },
  ]);
  return result.map((u) => {
    const { profile_image, ...rest } = u;
   
    if(profile_image) {
      const image = profileImage(profile_image);
       const updatedUser = {
         ...rest,
         profile_image: image,
       };

       return updatedUser;
    }
   else{
    const userWithoutPassword = { ...rest };
    return userWithoutPassword;
   }

   
  });
}

export async function updateUserService(id, data) {
  // console.log(id,"data")
  console.log(id,"data")
  const result = await user.findByIdAndUpdate(id, data, { new: true }); //Update User By Id Query
  //const response = { ...result.toObject(), password: undefined }; // we can use ...result also
  
   console.log(result,"update")
   return result
   }


export async function deleteUserService(ids) {
 const result = await user.deleteMany({ _id: { $in: ids } }); 
  return result
}

export async function getUserByEmailService({ email }) {
  //Fet USer By Id Query
   
     const result = await user.aggregate([
   
    {
      $match: {
        email: email,
      },
    },

    {
      $lookup: {
        from: "roles",
        localField: "role_id",
        foreignField: "_id",
        as: "role",
      },
    },
  ]);

 
  //console.log(result, "Fg")
  return result;
}

export async function getUserById(id) {
  const result = await user.findById(id);
  return result;
}

//Find user By name
export async function getUserByName({ name }) {
  const result = await user.findOne({ name: name });
  return result;
}



export async function countUserService(firm_id) {
  const result = await user.aggregate([
    {
      $match: {
        firm_id: new ObjectId(firm_id),
      },
    },
    {
      $count: "totalCount",
    },
  ]);
    return result?.[0]?.totalCount;
}


export async function getMyDataService(id, firm_id) {
  //Get USer By Id Query
  const result = await user.aggregate([
    {
      $match: {
        firm_id: new ObjectId(firm_id),
      },
    },
    {
      $match: {
        _id: new ObjectId(id),
      },
    },

    {
      $lookup: {
        from: "firms",
        localField: "firm_id",
        foreignField: "_id",
        as: "firm",
      },
    },
    {
      $lookup: {
        from: "roles",
        localField: "role_id",
        foreignField: "_id",
        as: "role",
      },
    },
  ]);

  return result.map((u) => {
    const { profile_image, ...rest } = u;

    if (profile_image) {
      const image = profileImage(profile_image);
      const updatedUser = {
        ...rest,
        profile_image: image,
      };

      return updatedUser;
    } else {
      const userWithoutPassword = { ...rest };
      return userWithoutPassword;
    }
  });
}