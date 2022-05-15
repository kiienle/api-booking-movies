import db from "../models";
import userService from "../services/userService";

let createNewUser = async (req, res) => {
    try {
        let data = req.body;
        if (!data) {
            return res.status(200).json({
                errCode: 2,
                errMessage: "Missing data from the server...",
            });
        } else {
            await userService.createNewUser(data);
            return res.status(200).json({
                errCode: 0,
                errMessage: "Ok",
            });
        }
    } catch (e) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleGetAllUsers = async (req, res) => {
    try {
        let userId = req.query.id;

        if (userId && userId === "ALL") {
            await db.User.findAll({
                attributes: { exclude: "password" },
            });
        }
    } catch (e) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};
module.exports = {
    createNewUser,
    handleGetAllUsers,
};
