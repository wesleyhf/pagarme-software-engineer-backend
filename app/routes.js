const express = require('express');
const cashController = require('./controllers/cashController');
const transactionController = require('./controllers/transactionController');

const routes = express.Router();

routes.get('/', (request, response) => response.json({
    message: 'Up!',
}));

routes.get(
    '/transactions',
    transactionController.index,
);

routes.get(
    '/cash/balance',
    cashController.balance,
);

routes.post(
    '/cash/in',
    cashController.getValidationSchema('in'),
    cashController.in,
);

module.exports = routes;
