const User = require('../models/User.model');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');

passport.serializeUser((loggedInUser, callback) => {
	callback(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, callback) => {
	User.findById(userIdFromSession, (error, userDocument) => {
		if (error) {
			callback(error);
			return;
		}
		callback(null, userDocument);
	});
});

passport.use(new LocalStrategy({
		usernameField: 'email'
	},
	(email, password, done) => {
		User.findOne({
			email: email
		})
			.then(user => {
				if (!user) {
					return done(null, false, {
						message: 'That email is not registered.'
					});
				}

				if (bcrypt.compare(password, user.passwordHash)) {
					return done(null, user);
				} else {
					return done(null, false, {
						message: 'The password is not correct.'
					});
				}
			})
			.catch(error => {
				console.log(`I'm sorry but an error happened. Check this out bro: ${error}`);
			});
	}
	)
);