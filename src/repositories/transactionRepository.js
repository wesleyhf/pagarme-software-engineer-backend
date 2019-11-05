const { transaction: transactionModel } = require('../models');

const repository = {
    async create(client, body) {
        const {
            description,
            value,
            paymentMethod,
            cardNumber,
            cardName,
            cardExpiry,
        } = body;

        // get last 4 digits from cardNumber
        const cardNumberLastDigits = Number(cardNumber.substr(-4));

        const transaction = await transactionModel.create({
            clientId: client.id,
            description,
            value,
            paymentMethod,
            cardNumber: cardNumberLastDigits,
            cardName,
            cardExpiry,
        });

        return transaction;
    },
};

module.exports = repository;
