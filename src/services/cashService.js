const creditCardService = require('./creditCardService');
const transactionRepository = require('../repositories/transactionRepository');
const payableRepository = require('../repositories/payableRepository');

const service = {
    async cashIn(client, body) {
        const {
            paymentMethod,
            cardNumber,
            cardName,
            cardExpiry,
            cvv,
        } = body;

        const processed = creditCardService.process({
            paymentMethod,
            cardNumber,
            cardName,
            cardExpiry,
            cvv,
        });

        if (!processed) {
            throw new Error('Something happen on credit card processing.');
        }

        const transaction = await transactionRepository.create(client, body);
        const payable = await payableRepository.create(transaction);

        return true;
    },
};

module.exports = service;
