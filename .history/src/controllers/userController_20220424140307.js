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
            let response = await userService.createNewUser(data);
            console.log(response);
            return res.status(200).json(response);
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
        let userData = await userService.getAllUsers(userId);
        return res.status(200).json(userData);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleDeleteUser = async (req, res) => {
    try {
        let id = req.query.id;
        if (!id) {
            return res.status(200).json({
                errCode: 2,
                errMessage: "Missing parametor from the server...",
            });
        } else {
            await userService.deleteUserById(req.query.id);
            return res.status(200).json({
                errCode: 0,
                errMessage: "OK",
            });
        }
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleUpdateUser = async (req, res) => {
    try {
        let response = await userService.updateUserById(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};
module.exports = {
    createNewUser,
    handleGetAllUsers,
    handleDeleteUser,
    handleUpdateUser,
};
