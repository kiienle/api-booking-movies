import db from "../models";

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email },
            });

            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
};
let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                first_name: data.firstName,
                last_name: data.lastName,
                password: data.password,
                phone_number: data.phonenumber,
                gender: data.gender,
                address: data.address,
                role_id: data.roleId,
                email: data.email,
            });
            console.log(data);
            resolve();
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
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

let updateUserById = (data) => {
    console.log(data);
    return new Promise(async (resolve, reject) => {
        try {
            if (!data || !data.id) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parametor from the server...",
                });
            } else {
                await db.User.update(
                    {
                        first_name: data.first_name,
                        last_name: data.last_name,
                        password: data.password,
                        phone_number: data.phone_number,
                        gender: data.gender,
                        address: data.address,
                        role_id: data.role_id,
                        email: data.email,
                    },
                    {
                        where: { id: data.id },
                    }
                );

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

module.exports = {
    createNewUser,
    getAllUsers,
    deleteUserById,
    updateUserById,
};
