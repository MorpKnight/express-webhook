const express = require('express');
const webhookRoutes = require('./src/routes/Webhooks.routes');
const autograderRoutes = require('./src/routes/Autograder.routes');
require('dotenv').config();

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/webhook", webhookRoutes);
app.use("/autograder", autograderRoutes)

const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});