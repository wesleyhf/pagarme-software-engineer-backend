module.exports = {
    up: async (queryInterface) => {
        const client = await queryInterface.sequelize.query(
            'SELECT id FROM clients LIMIT 1',
            { plain: true },
        );

        queryInterface.bulkInsert('transactions', [
            {
                clientId: client.id,
                description: 'Lightsaber',
                value: 1540.90,
                paymentMethod: 'credit',
                cardNumberLastDigits: 3083,
                cardHolderName: 'Luke Skywalker',
                cardExpiry: '06/21',
                createdAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface) => queryInterface.bulkDelete('transactions', null, {}),
};
