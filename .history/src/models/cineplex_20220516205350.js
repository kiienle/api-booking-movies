"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cineplex extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Cineplex.hasMany(models.Cinema, {
                foreignKey: "cineplex_id",
                as: "cineplexName",
                onDelete: "CASCADE",
                hooks: true,
            });
        }
    }
    Cineplex.init(
        {
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            description: DataTypes.STRING,
            image: DataTypes.STRING,
            googleMapsUrl: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Cineplex",
        }
    );
    return Cineplex;
};
