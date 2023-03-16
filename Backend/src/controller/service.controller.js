import { CreatServiceService, getServiceService, getAllServiceService, updateServiceService, deleteServiceService } from "../service/service.service.js";
import { resType } from "../response/res.types.js";

//Creat Service
export async function creatServiceController(req,res) {
    try{
        const data = req.body;
        const result= await CreatServiceService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

//get Service By Id 
export async function getServiceController(req,res) {
    try{
        
        const id = req.params.id
        const result= await getServiceService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//get All Services
export async function getAllServiceController(req,res) {
    try{
        
        const result= await getAllServiceService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Update Service By Id
export async function updateServiceController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateServiceService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Delete Service By Id
export async function deleteServiceController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteServiceService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
