import bodyParser from "body-parser";
import express, { json as _json } from "express";
import cors from "cors"
const app = express();
import "dotenv/config.js";
import { dirname } from "path";
import { connection } from "./src/config/db.config.js";
import { router } from "./src/router/index.js";
import { errorHandler } from "./src/helper/errorhandle.js";
import { sendMail } from "./src/helper/sendMail.helper.js";
import { upload, uploadImage } from "./src/utils/uploadImage.js";



app.use(cors());
app.use(_json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router(app);
app.use("/public", express.static("public"));
app.post("/upload", upload.single("file"), uploadImage);
app.use(errorHandler);

// sendMail({email:"190770107620@socet.edu.in"});
app.listen(process.env.PORT, () => {
  console.log(`Application is listening at port ${process.env.PORT}`);
});
export { app };
