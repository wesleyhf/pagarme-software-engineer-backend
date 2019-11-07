const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database');

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: config.logging,
    },
);

const database = {
    Sequelize,
    sequelize,
};

fs
    .readdirSync(__dirname)
    .filter((file) => (file !== 'index.js') && (file.slice(-3) === '.js'))
    .map((file) => {
        const model = sequelize.import(path.join(__dirname, file));

        database[model.name] = model;

        return model;
    })
    .forEach((model) => {
        if (model.associate) {
            model.associate(database);
        }
    });

module.exports = database;
