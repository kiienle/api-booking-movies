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
        }
    }
    Cinema.init(
        {
            name: DataTypes.STRING,
            cineplex_id: DataTypes.INTEGER,
            cinemaType_id: DataTypes.INTEGER,
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
