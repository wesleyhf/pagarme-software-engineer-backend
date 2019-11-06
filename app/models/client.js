module.exports = (sequelize, DataTypes) => {
    const client = sequelize.define('client', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamp: true,
        paranoid: true,
    });

    client.associate = (models) => {
        client.hasMany(models.transaction);
        client.hasMany(models.payable);
    };

    return client;
};
