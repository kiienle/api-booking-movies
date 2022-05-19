import cinemaService from "../services/cinemaService";

let createNewCineplex = async (req, res) => {
    try {
        let data = req.body;
        let response = await cinemaService.createNewCineplex(data);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleGetAllCineplex = async (req, res) => {
    try {
        let response = await cinemaService.handleGetAllCineplex();
        return res.status(200).json(response);
    } catch (e) {
        console.log("==============================");
        console.log("Get all cineplex", e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleUpdateCineplex = async (req, res) => {
    try {
        let cineplexData = req.body;
        let response = await cinemaService.handleUpdateCineplex(cineplexData);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};
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

let handleGetCinemaById = async (req, res) => {
    try {
        let response = await cinemaService.handleGetCinemaById(req.query.id);
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
    handleGetCinemaById,
};
