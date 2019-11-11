module.exports = {
    up: (queryInterface) => queryInterface.bulkInsert('clients', [
        {
            name: 'Luke Skywalker',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {}),

    down: (queryInterface) => queryInterface.bulkDelete('clients', null, {}),
};
