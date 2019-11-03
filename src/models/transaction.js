const paymentMethods = require('../enums/paymentMethods');

module.exports = (sequelize, DataTypes) => {
    const transaction = sequelize.define('transaction', {
        // clientId: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'Clients',
        //         key: 'id',
        //     },
        // },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        value: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 1,
            },
        },

        paymentMethod: {
            type: DataTypes.ENUM(
                paymentMethods.DEBIT,
                paymentMethods.CREDIT,
            ),
            allowNull: false,
        },

        // @TODO: rename to card_number_last_digits
        cardNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        // @TODO: rename to card_holder_name
        cardName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cardExpirity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        updatedAt: false,
    });

    transaction.associate = (models) => {
        transaction.belongsTo(models.client);
    };

    return transaction;
};
