const express = require('express');

const authenticateMiddleware = require('./middlewares/authenticate');
const requestValidationMiddleware = require('./middlewares/requestValidation');

const balanceController = require('./controllers/balanceController');
const transactionController = require('./controllers/transactionController');

const routes = express.Router();

// @TODO: authenticateMiddleware
routes.get('/', (request, response) => response.json({
    message: 'Up!',
}));

routes.use([
    authenticateMiddleware,
]);


// @TODO: folder instead of group by
routes.get(
    '/transactions',
    transactionController.index,
);

routes.post(
    '/transactions',
    requestValidationMiddleware('transactionsCreate'),
    transactionController.create,
);

routes.get(
    '/balance',
    balanceController.index,
);

module.exports = routes;
