import { resType } from "../response/res.types.js"

export async function userValidator(req,res,next){
    const result  = req.body
    console.log(result)
     if(!result.name && !result.firm_id && !result.role_id) return await res.status(400).json({ res: resType.VALIDAION });  
     next()
}