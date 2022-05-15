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

module.exports = {
    createNewCineplex,
};
