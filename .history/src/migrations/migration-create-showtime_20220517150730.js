"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("showtimes", {
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
            cineplex_id: {
                type: Sequelize.INTEGER,
            },
            show_time: {
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
        await queryInterface.dropTable("showtimes");
    },
};
