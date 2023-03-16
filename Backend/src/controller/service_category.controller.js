import { CreatService_categoryService, getService_categoryService, getAllService_categoryService, updateService_categoryService, deleteService_categoryService } from "../service/service_category.service.js";
import { resType } from "../response/res.types.js";

//Creat Service_category
export async function creatService_categoryController(req,res) {
    try{
        const data = req.body;
        const result= await CreatService_categoryService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

//get Service_category By Id 
export async function getService_categoryController(req,res) {
    try{
        
        const id = req.params.id
        const result= await getService_categoryService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//get All Service_categorys
export async function getAllService_categoryController(req,res) {
    try{
        
        const result= await getAllService_categoryService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Update Service_category By Id
export async function updateService_categoryController(req,res) {
    try{
        const data = req.body;
        const id = req.params.id
        const result= await updateService_categoryService(id, data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
//Delete Service_category By Id
export async function deleteService_categoryController(req,res) {
    try{
        const id = req.params.id
        const result= await deleteService_categoryService(id)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
