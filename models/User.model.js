const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
	password: {
		type: String,
		required: false
	},
	position: {
		type: String,
		enum: ['admin', 'projectmanager', 'client'],
		required: false
	},
	created_at: {
		type: Date,
		required: false
	}
});

module.exports = model('User', userSchema);
