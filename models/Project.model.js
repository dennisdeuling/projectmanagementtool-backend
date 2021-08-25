const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const projectSchema = new Schema({
	title: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: false
	},
	relatedToUser: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	created_at: {
		type: Date,
		required: false
	},
	client: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Client'
	},
	users: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}],
	tickets: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Ticket'
	}]
});

module.exports = model('Project', projectSchema);
