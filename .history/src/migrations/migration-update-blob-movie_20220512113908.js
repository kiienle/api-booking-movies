module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn("Movies", "poster", {
                type: Sequelize.BLOB("long"),
                allowNull: true,
            }),
            // queryInterface.changeColumn("Users", "avatar", {
            //     type: Sequelize.BLOB("long"),
            //     allowNull: true,
            // }),
            // queryInterface.changeColumn("Movies", "background", {
            //     type: Sequelize.BLOB("long"),
            //     allowNull: true,
            // }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn("Movies", "poster", {
                type: Sequelize.BLOB("long"),
                allowNull: true,
            }),
            // queryInterface.changeColumn("Movies", "background", {
            //     type: Sequelize.BLOB("long"),
            //     allowNull: true,
            // }),
        ]);
    },
};
