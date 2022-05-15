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
            cinemaId: {
                type: Sequelize.STRING,
            },
            movieId: {
                type: Sequelize.INTEGER,
            },
            startTime: {
                type: Sequelize.STRING,
            },
            endTime: {
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
