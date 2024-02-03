const webhookServices = require("../services/Webhook.services");

exports.testWebhook = async (req, res) => {
    try {
        const response = await webhookServices.testWebhook(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}