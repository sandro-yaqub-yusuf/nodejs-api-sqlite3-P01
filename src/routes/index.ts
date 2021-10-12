import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../configs/multer';

import isAuthenticated from '../middlewares/isAuthenticated';

import AuthController from '../controllers/authController';
import ItemController from '../controllers/itemController';
import LocationController from '../controllers/locationController';
import UserController from '../controllers/userController';

import * as AuthValidator from '../validators/authValidator';
import * as LocationValidator from '../validators/locationValidator';
import * as UserValidator from '../validators/userValidator';

const router = Router();

const upload = multer(multerConfig);

router.post('/uploads', upload.single('image'), async (req, res) => {
    return res.status(200).json({ message: 'Imagem enviada com sucesso !' });
});

router.get('/login', AuthValidator.login, AuthController.login);

router.get('/usuarios', isAuthenticated, UserController.getAll);
router.post('/usuario-novo', UserValidator.create, UserController.create);

router.post('/local-novo', LocationValidator.create, LocationController.create);
router.get('/local-consultar/:id', LocationController.getFromId);
router.get('/local-pesquisar', LocationController.getFromFilter);

router.get('/item-listar', ItemController.getAll);

export default router;
