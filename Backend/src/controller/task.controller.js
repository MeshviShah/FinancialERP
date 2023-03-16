import { CreatTaskService, getTaskService, getAllTaskService, updateTaskService, deleteTaskService } from "../service/Task.service.js";
import { resType } from "../response/res.types.js";

//Creat Task
export async function creatTaskController(req,res) {
    try{
        const data = req.body;
        const result= await CreatTaskService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get Task By Id
export async function getTaskController(req,res) {
    try{
        const id = req.params.id
        const result= await getTaskService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get All Tasks
export async function getAllTaskController(req,res) {
    try{
        
        const result= await getAllTaskService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Update Task By Id
export async function updateTaskController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateTaskService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Delete Task By Id
export async function deleteTaskController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteTaskService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
