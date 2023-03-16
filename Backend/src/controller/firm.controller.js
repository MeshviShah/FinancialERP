import { CreatFirmService, getFirmService, getAllFirmService, updateFirmService, deleteFirmService } from "../service/Firm.service.js";
import { resType } from "../response/res.types.js";

//creat Firm
export async function creatFirmController(req,res) {
    try{
        const data = req.body;
        const result= await CreatFirmService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//get Firm By ID
export async function getFirmController(req,res) {
    try{
        const id = req.params.id
        const result= await getFirmService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

//get All Firm
export async function getAllFirmController(req,res) {
    try{
        
        const result= await getAllFirmService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

//Update Firm By Id
export async function updateFirmController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateFirmService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

//Delete Firm By Id
export async function deleteFirmController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteFirmService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
