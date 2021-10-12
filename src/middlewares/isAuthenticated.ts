import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../configs/auth';

export default function isAuthenticated(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ message: 'O Token é inválido !' });
	}

	const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer') {
		return res.status(401).json({ message: 'O tipo de autenticação de Token é inválido !' });
	}

	try {
		const decodedToken = verify(token, authConfig.jwt.secret);

		console.log(decodedToken);

		return next();
	} catch (error) {
		return res.status(500).json({ message: 'Não foi possível validar o Token !' });
	}
}
