const transactionRepository = require('../repositories/transactionRepository');

const controller = {
    async index(request, response) {
        const page = request.query.page || 0;
        const transactions = await transactionRepository.list(page);

        return response.json({
            transactions,
        });
    },
};

module.exports = controller;
