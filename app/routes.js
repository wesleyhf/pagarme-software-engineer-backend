const express = require('express');
const balanceController = require('./controllers/balanceController');
const transactionController = require('./controllers/transactionController');

const routes = express.Router();

// @TODO: set auth middleware here
routes.use((request, response, next) => {
    next();
});

routes.get('/', (request, response) => response.json({
    message: 'Up!',
}));

routes.get(
    '/transactions',
    transactionController.index,
);

routes.post(
    '/transactions',
    transactionController.getValidationSchema('create'),
    transactionController.create,
);

routes.get(
    '/balance',
    balanceController.index,
);

module.exports = routes;
