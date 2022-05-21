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
            Movie.hasMany(models.Showtime, {
                foreignKey: { name: "movie_id", allowNull: true },
                onDelete: "CASCADE",
                hooks: true,
            });
            Movie.belongsTo(models.Allcode, {
                foreignKey: "state",
                targetKey: "keyMap",
                as: "stateData",
            });
        }
    }
    Movie.init(
        {
            slug: {
                type: DataTypes.STRING,
                unique: true,
            },
            movie_id: DataTypes.INTEGER,
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
            director: DataTypes.STRING,
            actor: DataTypes.STRING,
            genre: DataTypes.STRING,
            poster: DataTypes.STRING,
            background: DataTypes.STRING,
            running_time: DataTypes.INTEGER,
            release_date: DataTypes.INTEGER,
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
