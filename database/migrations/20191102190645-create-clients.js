module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('clients', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },

        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
        },

        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
        },

        deletedAt: {
            type: Sequelize.DATE,
        },
    }),

    down: (queryInterface) => queryInterface.dropTable('clients'),
};
