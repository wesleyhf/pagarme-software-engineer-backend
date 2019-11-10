const { client: clientModel } = require('../models');

module.exports = async (request, response, next) => {
    const clientId = request.header('clientId');

    if (!clientId) {
        return response
            .status(401)
            .json({
                error: 'unauthorized',
                message: 'clientId header missing',
            });
    }

    const client = await clientModel.findOne({
        where: {
            id: clientId,
        },
    });

    if (client) {
        response.locals.client = client;

        return next();
    }

    return response
        .status(500)
        .json({
            message: 'Something went wrong on authentication.',
        });
};
