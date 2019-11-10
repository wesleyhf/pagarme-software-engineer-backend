const creditCardService = require('./creditCardService');
const payableRepository = require('../repositories/payableRepository');
const transactionRepository = require('../repositories/transactionRepository');

const service = {
    async process(client, body) {
        const {
            paymentMethod,
            cardNumber,
            cardHolderName,
            cardExpiry,
            cvv,
        } = body;

        const processed = creditCardService.process({
            paymentMethod,
            cardNumber,
            cardHolderName,
            cardExpiry,
            cvv,
        });

        if (!processed) {
            throw new Error('Something happen on credit card processing.');
        }

        const transaction = await transactionRepository.create(client, body);

        // @TODO: change to event (maybe sequelize hooks?)
        await payableRepository.create(transaction);

        return transaction;
    },
};

module.exports = service;
