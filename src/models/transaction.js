const paymentMethods = require('../enums/paymentMethods');

module.exports = (sequelize, DataTypes) => {
    const transaction = sequelize.define('transaction', {
        clientId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'clients',
                key: 'id',
            },
        },

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

        // @TODO: rename to cardNumberLastDigits
        cardNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        // @TODO: rename to cardHolderName
        cardName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cardExpiry: {
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
