"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Allcode.hasMany(models.User, {
                foreignKey: "gender",
                as: "genderData",
            });
            Allcode.hasMany(models.Cinema, {
                foreignKey: "cinema_type",
                as: "typeData",
            });
            Allcode.hasMany(models.Showtime, {
                foreignKey: "show_time",
                as: "timeData",
            });
            Allcode.hasMany(models.Showtime, {
                foreignKey: "price",
                as: "priceData",
            });
            Allcode.hasMany(models.Movie, {
                foreignKey: "state",
                as: "stateData",
            });
        }
    }
    Allcode.init(
        {
            keyMap: DataTypes.STRING,
            type: DataTypes.STRING,
            valueEn: DataTypes.STRING,
            valueVi: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Allcode",
        }
    );
    return Allcode;
};
