const transactionService = require('../services/transactionService');
const transactionRepository = require('../repositories/transactionRepository');

const controller = {
    // @TODO: set request validation middleware
    async index(request, response) {
        const page = request.query.page || 1;
        const limit = request.query.limit || 5;

        const transactions = await transactionRepository.list(page, limit);

        return response.json({
            transactions,
        });
    },

    async create(request, response) {
        const { client } = response.locals;

        const transaction = await transactionService.process(
            client,
            request.body,
        );

        return response.json({
            transaction,
        });
    },
};

module.exports = controller;
