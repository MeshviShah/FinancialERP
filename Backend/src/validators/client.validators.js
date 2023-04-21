import { resType } from "../response/res.types.js";

export async function clientValidator(req, res, next) {
  const result = req.body;
  if (result.name && result.firm_id && result.ca_id && result.service_id && result.gst_number)
    next();
  else return res.status(400).json({ res: resType.VALIDAION, statusCode: 400 });
  
}
