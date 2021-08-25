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
	passwordHashed: {
		type: String,
		required: false
	},
	position: {
		type: String,
		enum: ['admin', 'projectmanager', 'client'],
		required: false
	},
	projectmanagers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}],
	clients: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Client'
	}],
	projects: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Project'
	}],
	tickets: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Ticket'
	}],
	created_at: {
		type: Date,
		required: false
	}
});

module.exports = model('User', userSchema);
