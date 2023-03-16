import { config } from 'dotenv';
const secret = process.env.JWT_KEY; 
import jwt from 'jsonwebtoken'

const tokenGen = async({email,role,firm_id}) => {
    try{
        const accessToken = jwt.sign({
            email,
            role,firm_id
        }, secret, { expiresIn: "6hr" })
        return accessToken 
    }
    catch{
        return 
    }
}

export {tokenGen}