module.exports = {
    up: (queryInterface) => queryInterface.bulkInsert('payables', [
        {
            transactionId: 1,
            clientId: 1,
            status: 'waiting_funds',
            fee: 5,
            value: 1463.855,
            paymentDate: new Date(),
        },
    ], {}),

    down: (queryInterface) => queryInterface.bulkDelete('payables', null, {}),
};
