import dotenv from 'dotenv';

dotenv.config();

export default {
    jwt: {
        secret: process.env.JWTSECRET as string,
        expiresIn: process.env.JWTEXPIRESIN as string
    }
}
