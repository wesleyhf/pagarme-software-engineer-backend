const {
    sequelize,
    client: clientModel,
    transaction: transactionModel,
    payable: payableModel,
} = require('../../app/models');

const clientFactory = require('../../database/factories/client');

const data = {
    client: clientFactory.getFaker(),

    transaction: {
        clientId: null,
        description: 'Spaceship',
        value: 591.15,
        paymentMethod: 'debit',
        cardNumberLastDigits: 1234,
        cardHolderName: 'Darth Vader da Silva',
        cardExpiry: '09/22',
    },

    payable: {
        clientId: null,
        transactionId: null,
        status: 'paid',
        fee: 3,
        value: 573.415,
        paymentDate: null,
    },
};

describe('Models', () => {
    afterAll(() => sequelize.close());

    test('Client', async () => {
        const client = await clientModel.create(data.client);

        expect(client).toHaveProperty('name', data.client.name);

        data.transaction.clientId = client.id;
        data.payable.clientId = client.id;
    });

    test('Transaction', async () => {
        const transaction = await transactionModel.create(data.transaction);

        expect(transaction).toHaveProperty(
            'description',
            data.transaction.description,
        );

        data.payable.transactionId = transaction.id;
        data.payable.paymentDate = transaction.createdAt;
    });

    test('Payable', async () => {
        const payable = await payableModel.create(data.payable);
        expect(payable).toHaveProperty('value', data.payable.value);
    });
});
