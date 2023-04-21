import { resType } from "../response/res.types.js"

export async function roleValidator(req,res,next){

    const result  = req.body
    if(result.name)next()   
    else return await res
      .status(400)
      .json({ res: resType.VALIDAION, statusCode: 400 });

}