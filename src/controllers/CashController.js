const { checkSchema, validationResult } = require('express-validator');
const paymentMethodsEnum = require('../enums/paymentMethods');
// const cashRepository = require('../repositories/cashRepository');

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
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
        }

        // @TODO: call cashRepository

        return response.json({
            message: 'Cash-in',
        });
    },
};

module.exports = controller;
