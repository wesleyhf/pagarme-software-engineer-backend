const paymentMethods = require('../enums/paymentMethods');

module.exports = (sequelize, DataTypes) => {
    const Transactions = sequelize.define('Transactions', {
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

        payment_method: {
            type: DataTypes.ENUM(
                paymentMethods.DEBIT,
                paymentMethods.CREDIT,
            ),
            allowNull: false,
        },

        // @TODO: rename to card_number_last_digits
        card_number: {
            type: DataTypes.INTEGER(4),
            allowNull: false,
        },

        // @TODO: rename to card_holder_name
        card_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        card_expirity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {});

    return Transactions;
};
