import { CreatClientService, getClientService, getAllClientService, updateClientService, deleteClientService } from "../service/client.service.js";
import { resType } from "../response/res.types.js";

//Creat Client
export async function creatClientController(req,res) {
    try{
        const data = req.body;
        const result= await CreatClientService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get Client By Id
export async function getClientController(req,res) {
    try{
        const id = req.params.id
        const result= await getClientService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get All Clients
export async function getAllClientController(req,res) {
    try{
        
        const result= await getAllClientService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Update Client By Id
export async function updateClientController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateClientService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Delete Client By Id
export async function deleteClientController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteClientService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
