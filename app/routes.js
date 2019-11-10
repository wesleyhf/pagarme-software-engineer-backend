const express = require('express');
const cashController = require('./controllers/cashController');
const balanceController = require('./controllers/balanceController');
const transactionController = require('./controllers/transactionController');

const routes = express.Router();

routes.get('/', (request, response) => response.json({
    message: 'Up!',
}));

routes.get(
    '/transactions',
    transactionController.index,
);

routes.post(
    '/cash/in',
    cashController.getValidationSchema('in'),
    cashController.in,
);

routes.get(
    '/balance',
    balanceController.index,
);

module.exports = routes;
