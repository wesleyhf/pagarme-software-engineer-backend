const faker = require('faker');

const { client: clientModel } = require('../../app/models');

const factory = {
    getFaker(attributes = {}) {
        const data = {
            name: faker.name.findName(),
        };

        return {
            ...data,
            ...attributes,
        };
    },

    async makeOne(attributes = {}) {
        return clientModel.create(
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
