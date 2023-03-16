import { CreatEvent_TypeService, getEvent_TypeService, getAllEvent_TypeService, updateEvent_TypeService, deleteEvent_TypeService } from "../service/Event_Type.service.js";
import { resType } from "../response/res.types.js";


//creat Event_Type
export async function creatEvent_TypeController(req,res) {
    try{
        const data = req.body;
        const result= await CreatEvent_TypeService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

//Get Event_Type
export async function getEvent_TypeController(req,res) {
    try{
        const id = req.params.id
        const result= await getEvent_TypeService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

//GEt All Event_Type
export async function getAllEvent_TypeController(req,res) {
    try{
        
        const result= await getAllEvent_TypeService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

//Update Event_Type
export async function updateEvent_TypeController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateEvent_TypeService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

//Delete Event_Type
export async function deleteEvent_TypeController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteEvent_TypeService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
