import { resType } from "../response/res.types.js"

export async function serviceValidator(req,res,next){
    const result  = req.body
    if(!result.category_id && !result.name) return res.status(400).json({ res: resType.VALIDAION, statusCode: 400 });
    next()   
    
}