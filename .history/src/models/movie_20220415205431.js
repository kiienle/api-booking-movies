"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Movie.init(
        {
            slug: {
                type: DataTypes.STRING,
                unique: true,
            },
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
            director: DataTypes.STRING,
            actor: DataTypes.STRING,
            genre: DataTypes.STRING,
            poster: DataTypes.TEXT,
            running_time: DataTypes.INTEGER,
            release_date: DataTypes.DATEONLY,
            trailer: DataTypes.STRING,
            state: DataTypes.STRING,
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            sequelize,
            modelName: "Movie",
        }
    );
    return Movie;
};
