const express = require('express');
const mongoose = require('mongoose');
const indexRoute  = express.Router();

indexRoute.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = indexRoute;
