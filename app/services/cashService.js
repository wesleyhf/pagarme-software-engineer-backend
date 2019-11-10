const creditCardService = require('./creditCardService');
const payableRepository = require('../repositories/payableRepository');
const transactionRepository = require('../repositories/transactionRepository');

const service = {
    async cashIn(client, body) {
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
        await payableRepository.create(transaction);

        return true;
    },
};

module.exports = service;
