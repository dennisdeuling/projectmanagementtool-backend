const express = require('express');
const authRoute = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');

// Database models
const User = require('../models/User.model');

authRoute.post('/login', (req, res, next) => {
	passport.authenticate('local', (error, user, failDetails) => {
		console.log(user);
		if (error) {
			req.status(500).json({
				message: 'The authentication went wrong'
			});
			return;
		}
		if (!user) {
			res.status(401).json(failDetails);
			return;
		}

		console.log(user);
		// Save user in session
		req.login(user, error => {
			if (error) {
				res.status(500).json({
					message: 'Save the user in session went wrong'
				});
				return;
			}

			res.status(200).json(user);
		});
	})(req, res, next);
});

authRoute.post('/logout', (req, res, next) => {
	req.logout();
	res.status(200).json({
		message: 'Logout successfully'
	});
});

authRoute.post('/loggedin', (req, res, next) => {
	if (req.isAuthenticated()) {
		res.status(200).json(req.user);
		return;
	}
	res.status(403).json({
		message: 'Unauthorized'
	});
});

module.exports = authRoute;
