import movieService from "../services/movieService";

let createNewMovie = async (req, res) => {
    console.log(req.body);
    try {
        let dataMovie = req.body;
        if (!dataMovie) {
            return res.status(200).json({
                errCode: 2,
                errMessage: "Missing data from the server...",
            });
        } else {
            let response = await movieService.createNewMovie(dataMovie);
            return res.status(200).json(response);
        }
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error from the server...",
        });
    }
};

let handleGetAllMovie = async (req, res) => {
    try {
        let movieList = await movieService.handleGetAllMovie();
        return res.status(200).json(movieList);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleUpdateMovie = async (req, res) => {
    try {
        let dataMovie = req.body;
        if (!dataMovie) {
            return res.status(200).json({
                errCode: 2,
                errMessage: "Missing parametor from the server...",
            });
        } else {
            await movieService.handleUpdateMovie(dataMovie);
            return res.status(200).json({
                errCode: 0,
                errMessage: "Update movie succeed...",
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

let handleGetAllcode = async (req, res) => {
    try {
        let response = await movieService.handleGetAllcode(req.query.type);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleGetPopularMovie = async (req, res) => {
    try {
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

module.exports = {
    createNewMovie,
    handleGetAllMovie,
    handleUpdateMovie,
    handleGetAllcode,
    handleGetPopularMovie,
};
