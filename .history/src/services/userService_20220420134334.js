import db from "../models";

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                first_name: data.firstName,
                last_name: data.lastName,
                phone_number: data.phonenumber,
                gender: data.gender,
                address: data.address,
                role_id: data.roleId,
                email: data.email,
            });
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

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (userId && userId === "ALL") {
                let users = await db.User.findAll({
                    attributes: { exclude: ["password"] },
                });

                resolve({
                    errCode: 0,
                    users,
                });
            }
            // if(userId && userId !== "ALL") {
            //     await db.User.findAll({
            //         where: {}
            //     })
            // }
        } catch (e) {
            reject(e);
        }
    });
};

let deleteUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parametor from the server...",
                });
            } else {
                let user = await db.User.findOne({
                    where: { id: id },
                });

                if (!user) {
                    resolve({
                        errCode: 1,
                        errMessage: "Missing parametor from the server...",
                    });
                }

                user.destroy();
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewUser,
    getAllUsers,
    deleteUserById,
};
