import db from "../models";

let createNewShowtime = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: "Mssing parametor from the server...",
                });
            } else {
                await db.Showtime.create({
                    movie_id: data.movie_id,
                    cinema_id: data.cinema_id,
                    cineplex_id: data.cineplex_id,
                    show_time: data.show_time,
                    date: data.date,
                    price: data.price,
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

let handleGetAllShowtime = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let showtimeList = await db.Showtime.findAll({
                include: [
                    {
                        model: db.Cinema,
                        attributes: ["name"],
                        include: [
                            {
                                model: db.Cineplex,
                                attributes: ["name"],
                            },
                        ],
                    },
                    {
                        model: db.Movie,
                        attributes: ["title"],
                    },
                    {
                        model: db.Allcode,
                        as: "timeData",
                        attributes: ["valueVi", "valueEn"],
                    },
                    {
                        model: db.Allcode,
                        as: "priceData",
                        attributes: ["valueVi", "valueEn"],
                    },
                ],
            });
            resolve({
                errCode: 0,
                errMessage: "Get all showtime succeed...",
                showtimeList,
            });
        } catch (e) {
            reject(e);
        }
    });
};

let handleUpdateShowtime = (data) => {
    console.log(data.id);
    return new Promise(async (resolve, reject) => {
        try {
            if (!data && !data.id) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parametor from the server...",
                });
            } else {
                await db.Showtime.update(
                    {
                        movie_id: data.movie_id,
                        cinema_id: data.cinema_id,
                        cineplex_id: data.cineplex_id,
                        show_time: data.show_time,
                        date: data.date,
                        price: data.price,
                    },
                    { where: { id: data.id } }
                );

                resolve({
                    errCode: 0,
                    errMessage: "Update showtime succeed...",
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewShowtime,
    handleGetAllShowtime,
    handleUpdateShowtime,
};
