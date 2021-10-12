import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(mainRoutes);

server.use('/uploads', express.static(path.resolve(__dirname, '..', 'public/uploads')));

server.listen(process.env.PORT);
