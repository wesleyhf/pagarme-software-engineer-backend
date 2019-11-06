const moment = require('moment');
const { payable: payableModel } = require('../models');
const payableStatusEnum = require('../enums/payableStatus');
const paymentMethodsEnum = require('../enums/paymentMethods');

const repository = {
    async create(transaction) {
        switch (transaction.paymentMethod) {
            case paymentMethodsEnum.DEBIT:
                return this.createPaid(transaction);

            case paymentMethodsEnum.CREDIT:
                return this.createWaitingFunds(transaction);

            default:
                throw new Error('Invalid paymentMethod on transaction.');
        }
    },

    async createPaid(transaction) {
        const fee = 3; // tax: 3%
        const discount = fee * (transaction.value / 100);

        const payable = await payableModel.create({
            transactionId: transaction.id,
            clientId: transaction.clientId,
            status: payableStatusEnum.PAID,
            fee,
            value: (transaction.value - discount),
            paymentDate: transaction.createdAt, // D+0
        });

        return payable;
    },

    async createWaitingFunds(transaction) {
        const fee = 5; // tax: 5%
        const discount = fee * (transaction.value / 100);
        const paymentDate = moment(transaction.createdAt).add(30, 'days'); // D+30

        const payable = await payableModel.create({
            transactionId: transaction.id,
            clientId: transaction.clientId,
            status: payableStatusEnum.WAITING_FUNDS,
            fee,
            value: (transaction.value - discount),
            paymentDate,
        });

        return payable;
    },

    async getAvailableAmount(client) {
        const available = await payableModel.sum('value', {
            where: {
                clientId: client.id,
                status: payableStatusEnum.PAID,
            },
        });

        return available;
    },

    async getReceivableAmount(client) {
        const available = await payableModel.sum('value', {
            where: {
                clientId: client.id,
                status: payableStatusEnum.WAITING_FUNDS,
            },
        });

        return available;
    },
};

module.exports = repository;
