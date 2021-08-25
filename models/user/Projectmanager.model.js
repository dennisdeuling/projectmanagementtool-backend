const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Base = require('./Base.model');

const projectmanagerSchema = Base.discriminator(
	'Projectmanager',
	new Schema({
		passwordHashed: {
			type: String,
			required: false
		},
		specialized: {
			type: Array,
			required: false
		}
	})
);

module.exports = model('Projectmanager');
