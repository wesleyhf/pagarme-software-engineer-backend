const express = require('express');
const cashController = require('./controllers/cashController');

const routes = express.Router();

routes.get('/', (request, response) => response.json({
    message: 'Up!',
}));

routes.post(
    '/cash-in',
    cashController.getValidationSchema('in'),
    cashController.in,
);

module.exports = routes;
