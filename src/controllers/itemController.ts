import { Request, Response } from 'express';
import dotenv from 'dotenv';
import knex from '../database/connection';

dotenv.config();

class ItemController {
    async getAll(req: Request, res: Response) {
        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `${process.env.BASE_URL}/uploads/${item.image}`
            };
        });
    
        return res.json(serializedItems);
    }
}

export default new ItemController();
