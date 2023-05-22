import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { getUserByEmailService, getUserById } from "../service/user.service.js";
import { decrypt } from "../helper/decryption.helper.js";
import { resType } from "../response/res.types.js";
const secret = process.env.JWT_KEY;
export async function auth(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    if (typeof authHeader !== "undefined") {
      // Split auth header to get token
      const token = authHeader.split(" ")[1];

      // Verify token
      jwt.verify(token, secret, async (err, payload) => {
        if (err) return res.sendStatus(403);

        const { etext } = payload;
        const data = await decrypt(etext);
        //console.log(data,"data")
        const { email } = data;
        const result = await getUserByEmailService({ email });

        if (!result)
          return res.json({ res: resType.INVALIDTOKEN, statusCode: 404 });

        req.user = {data};
        //console.log(req.user,"user")
        next();
      });
    } else {
      return res.json({ res: resType.INVALIDHEADER, statusCode: 400 });
    }
  } catch (error) {
    return res.json({ error: error.message, statusCode: 500 });
  }
}
