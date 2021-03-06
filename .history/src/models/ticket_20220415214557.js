"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Booking.init(
        {
            movie_id: DataTypes.UUID,
            cinema_id: DataTypes.INTEGER,
            start_time: DataTypes.DATE,
            end_time: DataTypes.DATE,
            price: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Booking",
        }
    );
    return Booking;
};
