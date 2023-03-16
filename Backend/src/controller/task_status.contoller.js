import { CreatTask_statusService, getTask_statusService, getAllTask_statusService, updateTask_statusService, deleteTask_statusService } from "../service/Task_status.service.js";
import {resType}  from "../response/res.types.js";

//Creat Task_status
export async function creatTask_statusController(req,res) {
    try{
        const data = req.body;
        const result= await CreatTask_statusService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get Task_status By Id
export async function getTask_statusController(req,res) {
    try{
        const id = req.params.id
        const result= await getTask_statusService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get All Task_statuss
export async function getAllTask_statusController(req,res) {
    try{
        
        const result= await getAllTask_statusService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Update Task_status By Id
export async function updateTask_statusController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateTask_statusService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Delete Task_status By Id
export async function deleteTask_statusController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteTask_statusService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
