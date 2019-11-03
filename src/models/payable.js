const status = require('../enums/payableStatus');

module.exports = (sequelize, DataTypes) => {
    const payable = sequelize.define('payable', {
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
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 1,
            },
        },

        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {});

    payable.associate = (models) => {
        payable.belongsTo(models.client);
        payable.belongsTo(models.transaction);
    };

    return payable;
};
