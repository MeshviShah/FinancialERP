import { CreatUserService, getUserService, getAllUserService, updateUserService, deleteUserService } from "../service/user.service.js";
import { resType } from "../response/res.types.js";

//Creat User
export async function creatUserController(req,res) {
    try{
        const data = req.body;
        const result= await CreatUserService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

//get User By Id 
export async function getUserController(req,res) {
    try{
        
        const id = req.params.id
        const result= await getUserService(id)
        return res.status(200).json( {data : result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//get All Users
export async function getAllUserController(req,res) {
    try{
        
        const result= await getAllUserService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Update User By Id
export async function updateUserController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateUserService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Delete User By Id
export async function deleteUserController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteUserService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
