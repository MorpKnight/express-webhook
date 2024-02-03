const express = require('express');
const router = express.Router();

const WebhooksController = require("../controller/Webhook.controllers");

router.post("/test-webhook", WebhooksController.testWebhook);

module.exports = router;