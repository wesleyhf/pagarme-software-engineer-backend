const faker = require('faker');

const creditCardUtils = require('../../app/utils/creditCard');
const paymentMethodsEnum = require('../../app/enums/paymentMethods');
const { transaction: transactionModel } = require('../../app/models');

const factory = {
    getFaker(attributes = {}) {
        const data = {
            description: faker.commerce.productName(),
            value: Number(faker.finance.amount()),
            paymentMethod: faker.random.objectElement(paymentMethodsEnum),
            cardNumberLastDigits: creditCardUtils.getCardNumberLastDigits(
                // @TODO: find creditCardNumber generator
                '5115078914143083',
            ),
            cardHolderName: faker.name.findName(),
            cardExpiry: creditCardUtils.toCardExpiryFormat(
                faker.date.recent(),
            ),
        };

        return {
            ...data,
            ...attributes,
        };
    },

    async makeOne(attributes = {}) {
        return transactionModel.create(
            this.getFaker(attributes),
        );
    },

    async makeMany(times = 1, attributes = {}) {
        const result = Array.from(
            Array(times),
            await this.makeOne(attributes),
        );

        return result;
    },
};

module.exports = factory;
