"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cinema extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Cinema.belongsTo(models.Cineplex, {
                foreignKey: "id",
                targetKey: "name",
                as: "cineplexName",
            });
            Cinema.belongsTo(models.Allcode, {
                foreignKey: "cinema_type",
                targetKey: "keyMap",
                as: "typeData",
            });
            Cinema.hasMany(models.Showtime, {
                foreignKey: { name: "cinema_id", allowNull: true },
                onDelete: "CASCADE",
                hooks: true,
            });
        }
    }
    Cinema.init(
        {
            name: DataTypes.STRING,
            cineplex_id: DataTypes.INTEGER,
            cinema_type: DataTypes.STRING,
            vertical_size: DataTypes.INTEGER,
            horizontal_size: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Cinema",
        }
    );
    return Cinema;
};
