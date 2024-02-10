const express = require('express');
const router = express.Router();

const autograderController = require('../controller/Autograder.controller');

router.post("/pull-repo", autograderController.pullRepo);

module.exports = router;