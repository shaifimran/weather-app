const express = require('express');
const weatherHandler = require('./../controllers/weather-controller.js');

const weatherRoute = express.Router();


weatherRoute.route('/:city').get(weatherHandler);

module.exports = weatherRoute;