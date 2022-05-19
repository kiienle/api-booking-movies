import showtimeService from "../services/ShowtimeService";

let createNewShowtime = async (req, res) => {
    try {
        let data = req.body;
        let response = await showtimeService.createNewShowtime(data);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleGetAllShowtime = async (req, res) => {
    try {
        let response = await showtimeService.handleGetAllShowtime();
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: "Error message from the server...",
        });
    }
};

let handleUpdateShowtime = async (req, res) => {
    try {
        let ShowtimeData = req.body;
        let response = await showtimeService.handleUpdateShowtime(ShowtimeData);
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
    createNewShowtime,
    handleGetAllShowtime,
    handleUpdateShowtime,
};
