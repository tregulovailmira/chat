const express = require('express');
const router = require('./router');
const cors = require('cors');
const { errorHandlers } = require('./middleware');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', router);

app.use(errorHandlers.errorHandler);

module.exports = app;
