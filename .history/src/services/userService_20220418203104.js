import db from "../models";

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({});
        } catch (e) {
            console.log(e);
            reject(e);
        }
    });
};

module.exports = {
    createNewUser,
};
