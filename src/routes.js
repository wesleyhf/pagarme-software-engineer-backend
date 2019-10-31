const express = require('express');
const CashController = require('./controllers/CashController');

const routes = express.Router();

routes.get('/', (request, response) => response.json({
    message: 'Up!',
}));

routes.post('/cash-in', CashController.in);

module.exports = routes;
