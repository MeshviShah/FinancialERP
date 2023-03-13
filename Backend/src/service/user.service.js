const userModel = require("../models/user.model")
const resType = require("../response/res.types")

exports.CreatUserService = async(data) =>{ 
        const result = await userModel.create(data);   
        return result   
   
}
exports.getUserService = async(id) =>{
     
        const result = await userModel.find(id);
         return result        
   
}
exports.getAllUserService = async() =>{
   
        const result = await userModel.find();
         return result        
   
}

exports.updateUserService = async(data,id) =>{
     
        const result = await userModel.create(data,id);
          return result     
}

exports.deleteUserService = async(id) =>{
     
        const result = await userModel.create(id);
         return result    
}