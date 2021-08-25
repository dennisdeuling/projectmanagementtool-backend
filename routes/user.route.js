const express = require('express');
const mongoose = require('mongoose');
const userRoute = express.Router();
const nodemailer = require('nodemailer');
const sendEmail = require('../configs/nodemailer.config');

// Database models
const User = require('../models/User.model');
const Admin = require('../models/user/Admin.model');
const Projectmanager = require('../models/user/Projectmanager.model');
const Contact = require('../models/user/Contact.model');

userRoute.get('/', (req, res, next) => {
	User.find()
		.then(userList => {
			res.json(userList);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

userRoute.get('/:userId', (req, res, next) => {
	User.findById(req.params.userId)
		// .populate('projectmanagers')
		// .populate('clients')
		// .populate('projects')
		// .populate('tickets')
		.then(user => {
			res.json(user);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

userRoute.post('/create', (req, res, next) => {
	const { name, email, password: passwordHashed } = req.body;

	Projectmanager.create({
		name,
		email,
		passwordHashed
	})
		.then(newUser => {
			console.log(newUser);
			res.json(newUser);
			sendEmail(newUser);
		})
		.catch(error => {
			console.log(error);
			res.status(500).json(error);
		});
});

userRoute.put('/:userId', (req, res, next) => {
	User.findByIdAndUpdate(req.params.userId, req.body)
		.then(() => {
			res.json({
				message: `User with the id ${req.params.userId} is updated successfully`
			});
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

userRoute.delete('/:userId', (req, res, next) => {
	User.findByIdAndRemove(req.params.userId)
		.then(() => {
			res.json({
				message: `User with the id ${req.params.userId} is deleted successfully`
			});
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = userRoute;
