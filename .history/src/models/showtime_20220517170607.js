"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Showtime extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Showtime.belongsTo(models.Movie, { foreignKey: "movie_id" });
            Showtime.belongsTo(models.Cinema, { foreignKey: "cinema_id" });
            Showtime.belongsTo(models.Cineplex, { foreignKey: "cineplex_id" });
            Showtime.hasMany(models.Booking, {
                foreignKey: { name: "time_type", allowNull: true },
                onDelete: "CASCADE",
                hooks: true,
            });
        }
    }
    Showtime.init(
        {
            movie_id: DataTypes.INTEGER,
            cinema_id: DataTypes.INTEGER,
            cineplex_id: DataTypes.INTEGER,
            show_time: DataTypes.STRING,
            date: DataTypes.STRING,
            price: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Showtime",
        }
    );
    return Showtime;
};
