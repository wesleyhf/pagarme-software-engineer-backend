const { transaction: transactionModel } = require('../models');

const repository = {
    async list(page = 0, size = 25) {
        const offset = page * size;
        const limit = offset + size;

        const transactions = await transactionModel.findAll({
            offset,
            limit,
        });

        return transactions;
    },

    async create(client, body) {
        const {
            description,
            value,
            paymentMethod,
            cardNumber,
            cardHolderName,
            cardExpiry,
        } = body;

        // get last 4 digits from cardNumber
        const cardNumberLastDigits = Number(cardNumber.substr(-4));

        const transaction = await transactionModel.create({
            clientId: client.id,
            description,
            value,
            paymentMethod,
            cardNumberLastDigits,
            cardHolderName,
            cardExpiry,
        });

        return transaction;
    },
};

module.exports = repository;
