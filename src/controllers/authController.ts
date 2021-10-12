import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import authConfig from '../configs/auth';
import knex from '../database/connection';

class AuthController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const errors = validationResult(req);

        if (errors.isEmpty() === false) return res.status(400).json({ message: errors.mapped() });

        const user = await knex('users').where('email', email).first();
    
        if (!user) {
            return res.status(400).json({ message: 'Usuário não localizado !' });
        }
    
        const comparePassword = await compare(password, user.password);
    
        if (!comparePassword) {
            return res.status(400).json({ message: 'Usuário e/ou Senha inválidos !' });
        }
    
        const token = sign({}, authConfig.jwt.secret, {
            subject: String(user.id),
            expiresIn: authConfig.jwt.expiresIn
        });
    
        return res.json({ email: user.email, token });
    }
}

export default new AuthController();
