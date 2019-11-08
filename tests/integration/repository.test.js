const {
    sequelize,
    transaction: transactionModel,
} = require('../../app/models');

const clientFactory = require('../../database/factories/client');
const transactionFactory = require('../../database/factories/transaction');
const transactionRepository = require('../../app/repositories/transactionRepository');

describe('Repositories', () => {
    describe('transactionRepository', () => {
        afterAll(() => sequelize.close());

        test('should return an array of transaction', async () => {
            const transactions = await transactionRepository.list();

            expect(transactions).toBeInstanceOf(Array);
            expect(transactions[0]).toBeInstanceOf(transactionModel);
        });

        test('should create a transaction', async () => {
            const client = await clientFactory.makeOne();
            const attributes = transactionFactory.getFaker();
            attributes.cardNumber = '5115078914143083';

            const transaction = await transactionRepository.create(client, attributes);

            expect(transaction).toHaveProperty('value', attributes.value);
        });
    });
});
