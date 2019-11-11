require('dotenv').config({
    path: process.env.DOTENV_PATH,
});

module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    logging: process.env.DB_LOG === 'true',
    dialect: 'postgres',
    seederStorage: 'sequelize',
};
