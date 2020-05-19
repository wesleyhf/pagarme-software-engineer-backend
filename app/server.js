const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

// @TODO: check database (Sequelize.authenticated (?))
// @TODO: health check

app.listen(3000);
