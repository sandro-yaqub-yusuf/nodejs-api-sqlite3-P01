import { checkSchema } from 'express-validator';

export const create = checkSchema({
    image: {
        trim: true,
        escape: true,
        isLength:{
            options: { min: 5, max: 100 }
        },
        errorMessage: 'O Nome da Imagem precisa ter pelo menos 5 caracteres e no máximo 100 caracteres !'
    },
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
    whatsapp: {
        customSanitizer: {
            options: (value: string) => {
                const newValue = value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(' ','');

                return newValue;
            }
        },
        isLength:{
            options: { min: 11, max: 12 }
        },
        errorMessage: 'O Telefone Fixo/Celular para Whatsapp precisa ter pelo menos 11 dígitos e no máximo 12 dígitos !'
    },
    city: {
        trim: true,
        escape: true,
        isLength:{
            options: { min: 2, max: 100 }
        },
        errorMessage: 'A Cidade precisa ter pelo menos 2 caracteres e no máximo 100 caracteres !'
    },
    uf: {
        trim: true,
        escape: true,
        isLength:{
            options: { min: 2, max: 2 }
        },
        errorMessage: 'O Estado precisa ter 2 caracteres !'
    },
    items: {
        custom: {
            options: (value: any) => {
                if (value.length <= 0) throw new Error('Selecione pelo menos um item !');

                return value;
            }
        }
    }
});
