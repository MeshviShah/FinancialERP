import { CreatDocumentService, getDocumentService, getAllDocumentService, updateDocumentService, deleteDocumentService } from "../service/document.service.js";
import { resType } from "../response/res.types.js";

//Creat Document
export async function creatDocumentController(req,res) {
    try{
        const data = req.body;
        const result= await CreatDocumentService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get Document By Id
export async function getDocumentController(req,res) {
    try{
        const id = req.params.id
        const result= await getDocumentService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Get All Documents
export async function getAllDocumentController(req,res) {
    try{
        
        const result= await getAllDocumentService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Update Document By Id
export async function updateDocumentController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateDocumentService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Delete Document By Id
export async function deleteDocumentController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteDocumentService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
