const { checkSchema, validationResult } = require('express-validator');

const transactionService = require('../services/transactionService');
const transactionRepository = require('../repositories/transactionRepository');

const controller = {
    getValidationSchema(method) {
        const schemas = {
            create: {
                description: {
                    in: 'body',
                    isLength: {
                        options: { min: 5 },
                    },
                },

                value: {
                    in: 'body',
                    isFloat: {
                        options: { min: 1 },
                    },
                },

                paymentMethod: {
                    in: 'body',
                    // isIn: {
                    //     options: {
                    //         values: [
                    //             paymentMethodsEnum.DEBIT,
                    //             paymentMethodsEnum.CREDIT,
                    //         ],
                    //     },
                    // },
                },

                cardNumber: {
                    in: 'body',
                    isCreditCard: true,
                },

                cardHolderName: {
                    in: 'body',
                    isLength: {
                        options: { min: 5 },
                    },
                },

                cardExpiry: {
                    in: 'body',
                    isLength: {
                        options: {
                            min: 5,
                            max: 5,
                        },
                    },
                },

                cvv: {
                    in: 'body',
                    isInt: true,
                    isLength: {
                        options: {
                            min: 3,
                            max: 3,
                        },
                    },
                },
            },
        };

        return checkSchema(schemas[method]);
    },

    async index(request, response) {
        const page = request.query.page || 1;
        const limit = request.query.limit || 5;

        const transactions = await transactionRepository.list(page, limit);

        return response.json({
            transactions,
        });
    },

    async create(request, response) {
        // @TODO: middleware to parse the body on schema

        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
        }

        const { client } = response.locals;

        const transaction = await transactionService.process(
            client,
            request.body,
        );

        return response.json({
            transaction,
        });
    },
};

module.exports = controller;
