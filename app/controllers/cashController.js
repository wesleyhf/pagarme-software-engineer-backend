// const paymentMethodsEnum = require('../enums/paymentMethods');
const { checkSchema, validationResult } = require('express-validator');
const cashService = require('../services/cashService');
const { client: modelClient } = require('../models');

const controller = {
    getValidationSchema(method) {
        const schemas = {
            in: {
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

                cardName: {
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

    async in(request, response) {
        // @TODO: middleware to parse the body on schema

        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
        }

        // @TODO: get by auth middleware
        const client = await modelClient.findOne({
            where: {
                id: 1,
            },
        });

        cashService.cashIn(client, request.body);

        return response.json({
            message: 'Cash-in',
        });
    },
};

module.exports = controller;
