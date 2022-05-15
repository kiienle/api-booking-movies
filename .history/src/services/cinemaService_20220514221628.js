import db from "../models";

let createNewCineplex = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: "Mssing parametor from the server...",
                });
            } else {
                await db.Cineplex.create({
                    name: DataTypes.STRING,
                    address: DataTypes.STRING,
                    description: DataTypes.STRING,
                    image: DataTypes.STRING,
                    googleMapsUrl: DataTypes.TEXT,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewCineplex,
};
