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
            Booking.belongsTo(models.User, { foreignKey: "user_id" });
            Booking.belongsTo(models.Showtime, { foreignKey: "showtime_id" });
            Booking.hasMany(models.Ticket, {
                foreignKey: { name: "booking_id", allowNull: true },
                onDelete: "CASCADE",
                hooks: true,
            });
        }
    }
    Booking.init(
        {
            status_id: DataTypes.STRING,
            doctor_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            date: DataTypes.STRING,
            time_type: DataTypes.STRING,
            total: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Booking",
        }
    );
    return Booking;
};
