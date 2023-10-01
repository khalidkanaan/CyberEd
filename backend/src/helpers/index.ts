import crypto from 'crypto';
import dotenv from "dotenv";

dotenv.config();

const SECRET = `${process.env.AUTH_SECRET}`;

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: String, password: String) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
};
