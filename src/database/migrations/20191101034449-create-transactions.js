module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Transactions', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },

        // client_id: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: 'Client',
        //         key: 'id',
        //     },
        // },

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

        payment_method: {
            type: Sequelize.ENUM('debit', 'credit'),
            allowNull: false,
        },

        // @TODO: rename to card_number_last_digits
        card_number: {
            type: Sequelize.INTEGER(4),
            allowNull: false,
        },

        // @TODO: rename to card_holder_name
        card_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        card_expirity: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
        },
    }),

    down: (queryInterface) => queryInterface.dropTable('Transactions'),
};
