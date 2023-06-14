import multer from "multer";
import path from "path"
import { profileImage } from "./image.utils.js";

// function getFolderName(file) {
//   // Return the folder name based on some criteria, e.g. file type
//   const type = file.mimetype.split("/")[0];
//   switch (type) {
//     case "image":
//       return "images";
//     case "video":
//       return "videos";
//     default:
//       return "uploads";
//   }
// }

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/profile_image/");
  },
  // destination: function (req, file, cb) {
  //   const folder = getFolderName(file); // Call a function to determine the folder name
  //   const path = `./public/${folder}/`; // Construct the folder path
  //   return cb(null, path); // Pass the folder path to the callback
  // },
  filename: function (req, file, cb) {
    return cb(
      null,
      Date.now().toString() + "." + file.originalname.split(".").pop()
    ); //path.extname(file.originalname)
  },
});
const upload = multer({
  storage: storage,
  // fileFilter: (req, file, cb) => {
  //   if (
  //     file.mimetype == "image/png" ||
  //     file.mimetype == "image/jpg" ||
  //     file.mimetype == "image/jpeg"
  //   ) {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //     return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  //   }
  // },
  // limits: {
  //   fileSize: 1024 * 1024 * 10, // 10 MB
  // },
});


export async function  uploadImage(req, res){
  try {
    // console.log(req,"req");
    const tempLocation = req?.file?.path;   
    const filename = req.file?.filename
     //console.log("Uploaded file:", req.file);
     const imageUrl = profileImage(filename);
    res.json({ data: { imageUrl , filename }, statuscode: 200 });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server error" });
  }
};

const moveFile = (source, destination) => {
  return new Promise((resolve, reject) => {
    const sourceStream = fs.createReadStream(source);
    const destStream = fs.createWriteStream(destination);
    sourceStream.pipe(destStream);
    sourceStream.on("end", () => {
      fs.unlinkSync(source);
      resolve();
    });
    sourceStream.on("error", (err) => {
      reject(err);
    });
  });
};

export { upload , moveFile };