module.exports = {
    up: (queryInterface) => queryInterface.bulkInsert('transactions', [
        {
            id: 1,
            clientId: 1,
            description: 'Lightsaber',
            value: 1540.90,
            paymentMethod: 'credit',
            cardNumberLastDigits: 3083,
            cardHolderName: 'Luke Skywalker',
            cardExpiry: '06/21',
            createdAt: new Date(),
        },
    ], {}),

    down: (queryInterface) => queryInterface.bulkDelete('transactions', null, {}),
};
