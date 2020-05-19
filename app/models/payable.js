const status = require('../enums/payableStatus');

module.exports = (sequelize, DataTypes) => {
    const payable = sequelize.define('payable', {
        transactionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'transaction',
                key: 'id',
            },
        },

        clientId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'clients',
                key: 'id',
            },
        },

        status: {
            type: DataTypes.ENUM(
                status.PAID,
                status.WAITING_FUNDS,
            ),
            allowNull: false,
        },

        fee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
            },
        },

        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });

    payable.associate = (models) => {
        payable.belongsTo(models.client);
        payable.belongsTo(models.transaction);
    };

    return payable;
};
