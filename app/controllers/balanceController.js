const payableRepository = require('../repositories/payableRepository');

const controller = {
    async index(request, response) {
        const { client } = response.locals;

        const balance = {
            available: await payableRepository.getAvailableAmount(client),
            receivable: await payableRepository.getReceivableAmount(client),
        };

        return response.json({
            balance,
        });
    },
};

module.exports = controller;
