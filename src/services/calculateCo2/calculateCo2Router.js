const express = require('express');
const calculateCo2Router = express.Router();

const calculateCo2Controller = require('./calculateCo2Controller');

//RENDER
calculateCo2Router.get('/calculate', (req, res) => {
    calculateCo2Controller.calculate(req, res)
});


module.exports = calculateCo2Router;