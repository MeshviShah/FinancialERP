import {
  CreatDocumentService,
  getDocumentService,
  getAllDocumentService,
  updateDocumentService,
  deleteDocumentService,
} from "../service/document.service.js";
import { resType } from "../response/res.types.js";

// --->>Creat Document
export async function creatDocumentController(req, res) {
  const data = req.body;
  const result = await CreatDocumentService(data);
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}

//Get Document By Id
export async function getDocumentController(req, res) {
  const id = req.params.id;
  const result = await getDocumentService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Get All Documents
export async function getAllDocumentController(req, res) {
  const result = await getAllDocumentService();
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Update Document By Id
export async function updateDocumentController(req, res) {
  const id = req.params.id;
  const data = req.body;

  const result = await updateDocumentService(id, data);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
//Delete Document By Id
export async function deleteDocumentController(req, res) {
  const id = req.params.id;
  const result = await deleteDocumentService(id);
  if (result == null || result == undefined)
    return res
      .status(404)
      .json({ response: resType.DATANOTAVAIABLE, statusCode: 404 });
  return res
    .status(200)
    .json({ data: result, res: resType.SUCCESS, statusCode: 200 });
}
