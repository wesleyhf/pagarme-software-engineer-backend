module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('payables', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },

        transactionId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'transactions',
                key: 'id',
            },
        },

        clientId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'clients',
                key: 'id',
            },
        },

        status: {
            type: Sequelize.ENUM('paid', 'waiting_funds'),
            allowNull: false,
        },

        // @TODO: check how to set integer (4)
        fee: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        value: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
            },
        },

        paymentDate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    }),

    down: (queryInterface) => queryInterface.dropTable('payables'),
};
