import { resType } from "../response/res.types.js"

export async function taskValidator(req,res,next){
    const result  = req.body
    if(!result.name && !result.user_id && !result.task_status)  return await res
      .status(400)
      .json({ res: resType.VALIDAION, statusCode: 400 });

    next()   
   
}