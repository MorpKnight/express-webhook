const autograderServices = require("../services/Autograder.services")

exports.pullRepo = async (req, res) => {
    try {
        const response = await autograderServices.pullRepo();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}