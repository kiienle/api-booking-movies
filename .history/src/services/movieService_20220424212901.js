import db from "../models";

let createNewMovie = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                title,
                description,
                director,
                actor,
                genre,
                poster,
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

module.exports = {
    createNewMovie,
};
