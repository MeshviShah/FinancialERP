import { CreatRoleService, getRoleService, getAllRoleService, updateRoleService, deleteRoleService } from "../service/Role.service.js";
import { resType } from "../response/res.types.js";

//Creat Role
export async function creatRoleController(req,res) {
    try{
        const data = req.body;
        const result= await CreatRoleService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get Role By Id
export async function getRoleController(req,res) {
    try{
        const id = req.params.id
        const result= await getRoleService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get All Roles
export async function getAllRoleController(req,res) {
    try{
        
        const result= await getAllRoleService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Update Role By Id
export async function updateRoleController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateRoleService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Delete Role By Id
export async function deleteRoleController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteRoleService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
