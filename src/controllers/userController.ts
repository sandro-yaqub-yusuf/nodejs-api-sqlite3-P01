import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import { validationResult } from 'express-validator';
import knex from '../database/connection';

class UserController {
    async getAll(req: Request, res: Response) {
        const users = await knex('users').select('*');

        const serializedUsers = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email                
            };
        });
    
        return res.json(serializedUsers);
    }

    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const passwordHashed = await hash(password, 8);
        const errors = validationResult(req);

        if (errors.isEmpty() === false) return res.status(400).json({ message: errors.mapped() });

        const transaction = await knex.transaction();

        try {
            const user = { email, password: passwordHashed, name };

            const newIds = await transaction('users').insert(user);

            await transaction.commit();

            return res.json({ id: newIds[0], ...user });
        } catch (error) {
            await transaction.rollback();

            return res.status(500).json({ message: 'Erro ao inserir o Usuário !' });
        }
    }
}

export default new UserController();
