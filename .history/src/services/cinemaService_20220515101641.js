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

let handleGetAllCineplex = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let cineplexList = await db.Cineplex.findAll();
            resolve({
                errCode: 0,
                errMessage: "Get all cineplex succeed...",
                cineplexList,
            });
        } catch (e) {
            reject(e);
        }
    });
};

let handleUpdateCineplex = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data && !data.id) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parametor from the server...",
                });
            } else {
                await db.Cineplex.update(
                    {
                        name: data.name,
                        address: data.address,
                        description: data.description,
                        image: data.image,
                        googleMapsUrl: data.googleMapsUrl,
                    },
                    { where: { id: data.id } }
                );

                resolve({
                    errCode: 0,
                    errMessage: "Update cineplex succeed...",
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewCineplex,
    handleGetAllCineplex,
    handleUpdateCineplex,
};
