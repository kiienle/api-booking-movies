import movieService from "../services/movieService";

let createNewMovie = async (req, res) => {
    try {
        let dataMovie = req.body;
        if (!dataMovie) {
            return res.status(200).json({
                errCode: 2,
                errMessage: "Missing data from the server...",
            });
        } else {
            await movieService.createNewMovie(dataMovie);
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

let handleGetAllMovie = async (req, res) => {
    try {
        let movieList = await movieService.handleGetAllMovie();
        return res.status(200).json(movieList);
    } catch (e) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

module.exports = {
    createNewMovie,
};
