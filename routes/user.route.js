const express = require('express');
const mongoose = require('mongoose');
const userRoute = express.Router();

// Database models
const User = require('../models/User.model');

userRoute.get('/', (req, res, next) => {
	User.find()
		.then(userList => {
			res.json(userList);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = userRoute;
