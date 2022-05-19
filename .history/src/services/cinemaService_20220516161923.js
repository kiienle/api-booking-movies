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
    console.log(data.id);
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
let createNewCinema = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: "Mssing parametor from the server...",
                });
            } else {
                await db.Cinema.create({
                    name: data.name,
                    cineplex_id: data.cineplex_id,
                    cinemaType_id: data.cinemaType_id,
                    vertical_size: data.vertical_size,
                    horizontal_size: data.horizontal_size,
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

let handleGetAllCinema = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let cinemaList = await db.Cinema.findAll();
            resolve({
                errCode: 0,
                errMessage: "Get all Cinema succeed...",
                cinemaList,
            });
        } catch (e) {
            reject(e);
        }
    });
};

let handleUpdateCinema = (data) => {
    console.log(data.id);
    return new Promise(async (resolve, reject) => {
        try {
            if (!data && !data.id) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parametor from the server...",
                });
            } else {
                await db.Cinema.update(
                    {
                        name: data.name,
                        cineplex_id: data.cineplex_id,
                        cinemaType_id: data.cinemaType_id,
                        vertical_size: data.vertical_size,
                        horizontal_size: data.horizontal_size,
                    },
                    { where: { id: data.id } }
                );

                resolve({
                    errCode: 0,
                    errMessage: "Update cinema succeed...",
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
    createNewCinema,
    handleGetAllCinema,
    handleUpdateCinema,
};
