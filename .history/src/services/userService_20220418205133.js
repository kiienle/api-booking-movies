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

module.exports = {
    createNewUser,
};
