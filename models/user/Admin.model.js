const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Base = require('./Base.model');

const adminSchema = Base.discriminator(
	'Admin',
	new Schema({
		passwordHashed: {
			type: String,
			required: false
		}
	})
);

module.exports = model('Admin');
