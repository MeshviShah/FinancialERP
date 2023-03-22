import bodyParser from "body-parser";
import express, { json as _json } from "express";
const app = express();
import "dotenv/config.js";
import { connection } from "./src/config/db.config.js";
import { router } from "./src/router/index.js";
import { errorHandler } from "./src/helper/errorhandle.js";
import { sendMail } from "./src/helper/sendMail.helper.js";

app.listen(process.env.PORT, () => {
  console.log(`Application is listening at port ${process.env.PORT}`);
});


app.use(_json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router(app);
app.use(errorHandler);
// sendMail({email:"190770107620@socet.edu.in"});

export { app };
