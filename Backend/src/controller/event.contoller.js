import { CreatEventService, getEventService, getAllEventService, updateEventService, deleteEventService } from "../service/Event.service.js";
import { resType } from "../response/res.types.js";

//Creat Event
export async function creatEventController(req,res) {
    try{
        const data = req.body;
        const result= await CreatEventService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get Event By Id
export async function getEventController(req,res) {
    try{
        const id = req.params.id
        const result= await getEventService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get All Events
export async function getAllEventController(req,res) {
    try{
        
        const result= await getAllEventService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Update Event By Id
export async function updateEventController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateEventService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Delete Event By Id
export async function deleteEventController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteEventService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
