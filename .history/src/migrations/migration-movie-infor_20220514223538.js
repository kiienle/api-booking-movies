"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Movies", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            slug: {
                type: Sequelize.STRING,
                unique: true,
            },
            title: {
                type: Sequelize.STRING,
            },
            movie_id: {
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.TEXT,
            },
            director: {
                type: Sequelize.STRING,
            },
            actor: {
                type: Sequelize.STRING,
            },
            genre: {
                type: Sequelize.STRING,
            },
            running_time: {
                type: Sequelize.INTEGER,
            },
            release_date: {
                type: Sequelize.STRING,
            },
            poster: {
                type: Sequelize.BLOB("long"),
            },
            background: {
                type: Sequelize.BLOB("long"),
            },
            trailer: {
                type: Sequelize.STRING,
            },
            state: {
                type: Sequelize.STRING,
            },
            active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
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
        await queryInterface.dropTable("Movies");
    },
};
