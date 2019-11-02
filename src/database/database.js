// @TODO: find a better way to manage each env using .env
module.exports = {
    development: {
        username: 'admin',
        password: 'secret',
        database: 'psp',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    test: {
        username: 'database_test',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'postgres',
    },
};
