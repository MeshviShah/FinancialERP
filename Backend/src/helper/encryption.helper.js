import crypto from "crypto";
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 256 bits (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16

let iv = crypto.randomBytes(IV_LENGTH);
async function encrypt(obj) {
  try {
    const text = JSON.stringify(obj);
    // console.log(text);
    let cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from(ENCRYPTION_KEY), //Convert ENCRYPTION_KEY into binary object using buffer.from method(convert string to buffer)
      iv
    );
    let encrypted = cipher.update(text, "utf-8");
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString("hex") + ":" + encrypted.toString("hex");
  } catch (error) {
    return
  }
}

export { encrypt };
