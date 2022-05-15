import db from "../models";

let createNewMovie = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Movie.create({});
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {};
