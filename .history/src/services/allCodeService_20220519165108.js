import db from "../models";

let handleGetAllcode = (type) => {
    console.log(type);
    return new Promise(async (resolve, reject) => {
        try {
            if (!type) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parametor from the server...",
                });
            } else {
                let data = await db.Allcode.findAll({
                    where: { type: type },
                });
                resolve({
                    errCode: 0,
                    errMessge: "Get All code succeed",
                    data,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    handleGetAllcode,
};
