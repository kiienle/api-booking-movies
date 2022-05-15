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
            resolve();
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
                movieList,
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewMovie,
    handleGetAllMovie,
};
