import userService from "../services/userService";
let createNewMovie = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing data from the server...",
                });
            } else {
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {};
