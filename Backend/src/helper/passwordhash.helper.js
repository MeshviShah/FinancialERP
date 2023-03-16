import { genSalt, hash as _hash, compare } from 'bcrypt';
import { config } from 'dotenv';
 const saltRounds = parseInt(process.env.SALT)

export async function  passwordHash(password) {
       const salt =await  genSalt(saltRounds);
       const hash =await _hash(password, salt);
        return hash      
}
