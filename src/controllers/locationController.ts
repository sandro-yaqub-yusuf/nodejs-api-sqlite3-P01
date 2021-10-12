import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import knex from '../database/connection';

class LocationController {
    async getFromId(req: Request, res: Response) {
        const { id } = req.params;

        const location = await knex('locations').where('id', id).first();
    
        if (!location) {
            return res.status(400).json({ message: 'O Local não foi encontrado !' });
        }
    
        const items = await knex('items')
            .join('location_items', 'location_items.item_id', '=', 'items.id')
            .where('location_items.location_id', id)
            .select('items.title');
    
        return res.json({ location, items });
    }

    async getFromFilter(req: Request, res: Response) {
        const { city, uf, items } = req.query;

        if (city && uf && items) {
            const parsedItems: number[] = String(items).split(',').map(item => Number(item.trim()));
    
            const locations = await knex('locations')
                .join('location_items', 'locations.id', '=', 'location_items.location_id')
                .whereIn('location_items.item_id', parsedItems)
                .where('city', String(city))
                .where('uf', String(uf))
                .distinct()
                .select('locations.*');

            return res.json(locations);
        } else {
            const locations = await knex('locations').select('*');
    
            return res.json(locations);
        }        
    }

    async create(req: Request, res: Response) {
        const { name, image, email, whatsapp, latitude, longitude, city, uf, items } = req.body;
        const location = { name, image, email, whatsapp, latitude, longitude, city, uf };
        const errors = validationResult(req);

        if (errors.isEmpty() === false) return res.status(400).json({ message: errors.mapped() });

        const transaction = await knex.transaction();

        try {
            const newIds = await transaction('locations').insert(location);
    
            const location_id = newIds[0];
        
            const locationItems = items.map((item_id: number) => {
                const selectedItem = transaction('items').where('id', item_id).first();
        
                if (!selectedItem) {
                    return res.status(400).json({ message: 'O Item não foi encontrado !' });
                }
        
                return { item_id, location_id };
            });
        
            await transaction('location_items').insert(locationItems);
        
            await transaction.commit();

            return res.json({ id: location_id, ...location });
        } 
        catch (error) {
            await transaction.rollback();

            return res.status(500).json({ message: 'Erro ao inserir o Local !' });
        }
    }
}

export default new LocationController();
