import movieService from "../services/movieService";

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

module.exports = {
    handleGetAllcode,
};
