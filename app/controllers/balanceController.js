const { payable: clientModel } = require('../models');
const payableRepository = require('../repositories/payableRepository');

const controller = {
    async index(request, response) {
        // @TODO: get from auth middleware
        const client = await clientModel.findOne({
            where: {
                id: 1,
            },
        });

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
