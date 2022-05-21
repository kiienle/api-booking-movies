import db from "../models";

let createNewMovie = (data) => {
    console.log(data);
    return new Promise(async (resolve, reject) => {
        try {
            const {
                title,
                description,
                director,
                actor,
                genre,
                poster,
                background,
                running_time,
                release_date,
                trailer,
                state,
            } = data;
            await db.Movie.create({
                title,
                description,
                director,
                actor,
                genre,
                poster,
                background,
                running_time: parseInt(running_time),
                release_date,
                trailer,
                state,
            });
            resolve({
                errCode: 0,
                errMessage: "OK",
            });
        } catch (e) {
            reject(e);
        }
    });
};

let handleGetAllMovie = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let movieList = await db.Movie.findAll();
            resolve({
                errCode: 0,
                errMessage: "Ok",
                movieList,
            });
        } catch (e) {
            reject(e);
        }
    });
};

let handleUpdateMovie = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Movie.update(
                {
                    title: data.title,
                    description: data.description,
                    director: data.director,
                    actor: data.actor,
                    genre: data.genre,
                    poster: data.poster,
                    background: data.background,
                    running_time: parseInt(data.running_time),
                    release_date: data.release_date,
                    trailer: data.trailer,
                    state: data.state,
                },
                {
                    where: { id: data.id },
                }
            );
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

let handleGetPopularMovie = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Movie.findAll({
                where: { state: "popular" },
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewMovie,
    handleGetAllMovie,
    handleUpdateMovie,
    handleGetPopularMovie,
};
