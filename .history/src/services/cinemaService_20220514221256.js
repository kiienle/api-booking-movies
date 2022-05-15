import db from "../models";

let createNewCineplex = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewCineplex,
};
