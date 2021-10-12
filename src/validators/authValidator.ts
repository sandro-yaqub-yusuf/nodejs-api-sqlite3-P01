import { checkSchema } from 'express-validator';

export const login = checkSchema({
    email: {
        isLength:{
            options: { min: 6, max: 100 }
        },
        isEmail: true,
        errorMessage: 'O E-mail é inválido !'
    },
    password: {
        trim: true,
        escape: true,
        isLength:{
            options: { min: 5, max: 30 }
        },
        errorMessage: 'A Senha precisa ter pelo menos 5 caracteres e no máximo 30 caracteres !'
    }
});
