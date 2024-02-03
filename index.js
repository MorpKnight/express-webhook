const express = require('express');
const webhookRoutes = require('./src/routes/Webhooks.routes');
require('dotenv').config();

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/webhook", webhookRoutes);

const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});