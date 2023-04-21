import { user } from "../models/user.model.js";
import { Types } from "mongoose";
import { passwordHash } from "../helper/passwordhash.helper.js";
const { ObjectId } = Types;

export async function CreatUserService(data) {
  const hash = await passwordHash(data.password);
  data.password = hash;
  const result = await user.create(data); //Creat User Query
  // Create a new object with all properties, but with password set to undefined
  const response = { ...result.toObject(), password: undefined }; // we can use ...result also
  return response;
}

export async function getUserService(id) {
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
        localField: "role",
        foreignField: "_id",
        as: "role",
      },
    },
  ]);

  return result;
}
export async function getAllUserService() {
  const result = await user.aggregate([
    //Get All User Query

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
        localField: "role",
        foreignField: "_id",
        as: "role",
      },
    },
  ]);
  return result.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}

export async function updateUserService(id,data) {
  const result = await user.findByIdAndUpdate(id,data, { new: true }); //Update User By Id Query
  //const response = { ...result.toObject(), password: undefined }; // we can use ...result also
  return result;
}

export async function deleteUserService(id) {
  const result = await user.findByIdAndDelete(id); //Delete User By Id QUery
  const response = { ...result.toObject(), password: undefined }; // we can use ...result also
  return response;
}

export async function getUserByEmailService({ email }) {
  //Fet USer By Id Query

  const result = await user.findOne({ email: email });
  return result;
}

export async function getUserById(id) {
  const result = await user.findById(id);
  return result;
}

//Find user By name
export async function getUserByName({name}) {
  const result = await user.findOne({ name: name });
  return result;
}