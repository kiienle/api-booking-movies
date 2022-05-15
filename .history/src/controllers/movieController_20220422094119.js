import userService from "../services/userService";
let createNewMovie = async (req, res) => {
    try {
        let dataMovie = req.body;
        if (!dataMovie) {
            return res.status(200).json({
                errCode: 1,
                errMessage: "Missing data from the server...",
            });
        } else {
            await userService.createNewMovie(data);
            return res.status(200).json({
                errCode: 0,
                errMessage: "Ok",
            });
        }
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error from the server...",
        });
    }
};

module.exports = {
    createNewMovie,
};
