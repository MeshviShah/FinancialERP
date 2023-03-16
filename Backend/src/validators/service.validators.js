import { resType } from "../response/res.types.js"

export async function serviceValidator(req,res,next){

    const result  = req.body
    if(result.category_id && result.name)next()   
else{
    return await res.status(400).json({res : resType.VALIDAION})
}
}