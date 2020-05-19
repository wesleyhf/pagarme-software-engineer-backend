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
            allowNull: false,
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
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
            },
        },

        paymentMethod: {
            type: Sequelize.ENUM('debit', 'credit'),
            allowNull: false,
        },

        // @TODO: check how to set integer (4)
        cardNumberLastDigits: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        cardHolderName: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        cardExpiry: {
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
