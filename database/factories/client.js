const faker = require('faker');

const { client: clientModel } = require('../../app/models');

const factory = {
    async generate(attributes = {}) {
        const data = {
            name: faker.name.findName(),
        };

        const client = await clientModel.create({
            ...data,
            ...attributes,
        });

        return client;
    },

    async generateMany(times = 1, attributes = {}) {
        const result = Array.from(
            Array(times),
            await this.create(attributes),
        );

        return result;
    },
};

module.exports = factory;
