const { checkSchema, validationResult } = require('express-validator');

const schemas = {
    // @TODO: improve responses
    transactionsCreate: {
        description: {
            in: 'body',
            isLength: {
                options: { min: 5 },
            },
        },

        value: {
            in: 'body',
            isInt: {
                options: { min: 1 },
            },
        },

        paymentMethod: {
            in: 'body',
            // @TODO: fix enum on schema
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

const validationRequest = (request, response, next) => {
    const errors = validationResult(request);

    if (errors.isEmpty()) {
        return next();
    }

    const formattedErrors = errors
        .array()
        .map((err) => ({
            [err.param]: err.msg,
        }));

    return response
        .status(422)
        .json({
            errors: formattedErrors,
        });
};

module.exports = (schema) => [
    checkSchema(schemas[schema]),
    validationRequest,
];
