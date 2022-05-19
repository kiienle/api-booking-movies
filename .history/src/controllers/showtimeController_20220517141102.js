import cinemaService from "../services/cinemaService";

let createNewCinema = async (req, res) => {
    try {
        let data = req.body;
        let response = await cinemaService.createNewCinema(data);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleGetAllCinema = async (req, res) => {
    try {
        let response = await cinemaService.handleGetAllCinema();
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleUpdateCinema = async (req, res) => {
    try {
        let cinemaData = req.body;
        let response = await cinemaService.handleUpdateCinema(cinemaData);
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
    createNewCineplex,
    handleGetAllCineplex,
    handleUpdateCineplex,
    createNewCinema,
    handleGetAllCinema,
    handleUpdateCinema,
};
