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
                    name: data.name,
                    address: data.address,
                    description: data.description,
                    image: data.image,
                    googleMapsUrl: data.googleMapsUrl,
                });
                resolve({
                    errCode: 0,
                    errMessage: "OK",
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
