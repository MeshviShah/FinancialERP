import "dotenv/config.js";
import crypto from "crypto";
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 256 bits (32 characters)
const IV_LENGTH = 16;
async function decrypt(text) {
  try{
  let [iv, cipher] = text.toString().split(":");
  iv = Buffer.from(iv, "hex");
  cipher = Buffer.from(cipher, "hex");
  let decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let plainText = decipher.update(cipher, "utf-8");
  plainText += decipher.final("utf8");
  return JSON.parse(plainText);
  }catch(error){
     return ;
  }
}

export { decrypt };
