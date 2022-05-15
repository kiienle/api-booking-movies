"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("bookings", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            cinema_id: {
                type: Sequelize.STRING,
            },
            movie_id: {
                type: Sequelize.INTEGER,
            },
            start_time: {
                type: Sequelize.STRING,
            },
            end_time: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("bookings");
    },
};
