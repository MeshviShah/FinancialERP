import { resType } from "../response/res.types.js"

export async function taskValidator(req,res,next){

    const result  = req.body
    if(result.name && result.user_id && result.task_status)next()   
else{
    return await res.status(400).json({res : resType.VALIDAION})
}
}