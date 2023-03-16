import { registrationAuthService, loginAuthService } from "../service/auth.service.js"
import { resType } from "../response/res.types.js"
export async function registerController(req,res) {
    try{
   const result = req.body
   const data =  await registrationAuthService(result)    
    return res.status(200).json( {data: data , res :resType.SUCCESS});    
    }catch(error){
    return await res.status(500).json({error:error.message})
    }    
}

export async function loginController(req,res){
    try{
        const {email,password} =req.body
        const data = await loginAuthService({email,password})
         return res.status(200).json( {data: data , res :resType.SUCCESS});    
    }catch(error){
         return  await res.status(500).json({error:error.message})
    }
}
