const { CreatUserService, getUserService } = require("../service/user.service");
const {resType} = require("../response/res.types")

exports.creatUserController  = async(req,res) => {
    try{
        const data = req.body;
        const result= await CreatUserService(data)
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

exports.getUserController  = async(req,res) => {
    try{
       
        const result= await getUserService({id : req.params.id})
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

exports.getAllUserController  = async(req,res) => {
    try{
        
        const result= await CreatUserService()
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

exports.updateUserController  = async(req,res) => {
    try{
        const data = req.body;
        const result= await CreatUserService({id:req.params.id, data})
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}

exports.deleteUserController  = async(req,res) => {
    try{
        const result= await CreatUserService({id:req.params.id})
        return res.status(200).json( {data: result , res :resType.SUCCESS});    
    }catch(error){
 await res.status(500).json({error:error.message})
    }    
}
