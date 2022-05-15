module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn("Movie", "poster", {
                type: Sequelize.BLOB("long"),
                allowNull: true,
            }),
            queryInterface.changeColumn("Users", "avatar", {
                type: Sequelize.BLOB("long"),
                allowNull: true,
            }),
            queryInterface.changeColumn("Movie", "background", {
                type: Sequelize.BLOB("long"),
                allowNull: true,
            }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn("Users", "avatar", {
                type: Sequelize.STRING,
                allowNull: true,
            }),
            queryInterface.changeColumn("Movie", "poster", {
                type: Sequelize.BLOB("long"),
                allowNull: true,
            }),
            queryInterface.changeColumn("Movie", "background", {
                type: Sequelize.BLOB("long"),
                allowNull: true,
            }),
        ]);
    },
};
