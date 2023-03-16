import { user } from "../models/user.model.js";
 import { Types } from 'mongoose';
 const { ObjectId } = Types;
export async function CreatUserService(data){ 
  const salt =await  bcrypt.genSalt(saltRounds);
       const hash =await bcrypt.hash(data.password, salt);
        data.password = hash
        const result = await user.create(data);             //Creat User Query
        return result   
   
}
export async function getUserService(id){                         //Fet USer By Id Query
     
        const result = await user.aggregate([
        {
          $match: {
            _id: new ObjectId(id)
        }
        },
   
    {
     
      $lookup: {
        from: "firms",
        localField: "firm_id",
        foreignField: "_id",
        as: "firm"
      }
    },
     {
     
      $lookup: {
        from: "roles",
        localField: "role_id",
        foreignField: "_id",
        as: "role"
      }
    },
    
    
  ])
  
    const {password, ...hPassword } = result[0];
        return hPassword;
           
   
}
export async function getAllUserService(){
   
        const result = await user.aggregate([         //Get All User Query
   
    {
     
      $lookup: {
        from: "firms",
        localField: "firm_id",
        foreignField: "_id",
        as: "firm"
      }
    },
     {
     
      $lookup: {
        from: "roles",
        localField: "role_id",
        foreignField: "_id",
        as: "role"
      }
    },
    
    
  ])
        return result.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
   
}

export async function updateUserService(data,id){               
     
        const result = await user.findByIdAndUpdate(data,id);       //Update User By Id Query
        const { username, ...hPassword } = result;
        return hPassword     
}

export async function deleteUserService(id){
     
        const result = await user.findByIdAndDelete(id);            //Delete User By Id QUery
        const { username, ...hPassword } = result;
        return hPassword       
}



export async function getUserByEmailService({email}){                         //Fet USer By Id Query
     
        const result = await user.findOne({email : email})
        return result;
           
   
}