import { config } from "dotenv";
const secret = process.env.JWT_KEY;
import jwt from "jsonwebtoken";

const tokenGen = async (etext) => {
  try {
    const accessToken = jwt.sign(
      {
        etext
      },
      secret,
      { expiresIn: "6hr" }
    );
    return accessToken;
  } catch {
    return;
  }
};

export { tokenGen };
