const creditCardUtil = require('../utils/creditCard');
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

    async create(client, attributes) {
        const {
            description,
            value,
            paymentMethod,
            cardNumber,
            cardHolderName,
            cardExpiry,
        } = attributes;

        const cardNumberLastDigits = creditCardUtil.getCardNumberLastDigits(
            cardNumber,
        );

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
