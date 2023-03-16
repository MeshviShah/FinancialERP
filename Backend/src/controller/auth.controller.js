import { registrationAuthService, loginAuthService } from "../service/auth.service.js"
import { resType } from "../response/res.types.js"
import { getUserByEmailService } from "../service/user.service.js";
import { passwordBcrypt } from "../helper/passwordBcrypt.helper.js";
import { tokenGen } from "../helper/tokenGen.helper.js";
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
    
        const {email,password} =req.body
        const data = await getUserByEmailService({email})
        if(!data)return res.status(401).json( { res :resType.ERROR});        
        const hash = data.password
        const result = await passwordBcrypt(password,hash)
        const role=data.role_id
        const firm_id = data.firm_id
         const accessToken = await  tokenGen({email,role,firm_id})
        if(!result)return res.status(401).json( { res : resType.ERROR});    
        return res.status(200).json( { data: {data,accessToken} , res :resType.SUCCESS});          
}

