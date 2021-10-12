import { checkSchema } from 'express-validator';

export const create = checkSchema({
    name: {
        trim: true,
        escape: true,
        isLength:{
            options: { min: 2, max: 100 }
        },
        errorMessage: 'O Nome precisa ter pelo menos 2 caracteres e no máximo 100 caracteres !'
    },
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
