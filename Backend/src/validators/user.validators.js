import { resType } from "../response/res.types.js"

export async function userValidator(req,res,next){
    const result  = req.body
    console.log(result)
     if(!result.name && !result.firm_name) return await res
       .status(400)
       .json({ res: resType.VALIDAION, statusCode: 400 });  
     next()
}