let createNewUser = async (req, res) => {
    try {
        let data = req.body;
        if (!data) {
            return res.status(200).json({
                errCode: 2,
                errMessage: "Missing data from the server...",
            });
        } else {
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
module.exports = {
    createNewUser,
};
