import {
  CreatService_categoryService,
  getService_categoryService,
  getAllService_categoryService,
  updateService_categoryService,
  deleteService_categoryService,
} from "../service/service_category.service.js";
import { resType } from "../response/res.types.js";

//Creat Service_category
export async function creatService_categoryController(req, res) {
  const data = req.body;
  const result = await CreatService_categoryService(data);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//get Service_category By Id
export async function getService_categoryController(req, res) {
  const id =  req.params.id
  const result = await getService_categoryService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//get All Service_categorys
export async function getAllService_categoryController(req, res) {
  const result = await getAllService_categoryService();
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Update Service_category By Id
export async function updateService_categoryController(req, res) {
  const data = req.body;
  const id = req.params.id;
  const result = await updateService_categoryService(id, data);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Delete Service_category By Id
export async function deleteService_categoryController(req, res) {
   const id = req.params.id;
  const result = await deleteService_categoryService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
