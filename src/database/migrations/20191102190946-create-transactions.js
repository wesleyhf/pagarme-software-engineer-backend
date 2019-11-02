module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('transactions', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },

        clientId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'clients',
                key: 'id',
            },
        },

        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        value: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                min: 1,
            },
        },

        paymentMethod: {
            type: Sequelize.ENUM('debit', 'credit'),
            allowNull: false,
        },

        // @TODO: rename to card_number_last_digits
        // @TODO: check how to set integer (4)
        cardNumber: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        // @TODO: rename to card_holder_name
        cardName: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        cardExpirity: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
        },
    }),

    down: (queryInterface) => queryInterface.dropTable('transactions'),
};
