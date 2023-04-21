import { resType } from "../response/res.types.js"

export async function firmValidator(req,res,next){

    const result  = req.body
    if(result.name && result.address && result.phone)next()   
    else  return await res
      .status(400)
      .json({ res: resType.VALIDAION, statusCode: 400 });
    
}