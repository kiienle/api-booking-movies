import db from "../models";

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // await db.User.create({});
            console.log(data);
            resolve({
                errCode: 0,
                errMessage: "Ok",
            });
        } catch (e) {
            console.log(e);
            reject(e);
        }
    });
};

module.exports = {
    createNewUser,
};
