
import fs from "fs";

const imageUpload = async (req, next) => {
  try {
   
    const  filename  = req.body;
    console.log(filename,"mem")
      return next({
        status: 200,
        message: "file",
        data: { filename},
  })
    }
  catch (err) {
    console.log(err);
    return next({ status: 400, message: err.message, err: err });
  }
};

export {imageUpload}