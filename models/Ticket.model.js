const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ticketSchema = new Schema({
	title: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: false
	},
	hours: {
		type: Number,
		enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		required: false
	},
    minutes: {
	    type: Number,
        enum: [0, 15, 30, 45],
        required: false
    },
	created_at: {
		type: Date,
		required: false
	},
	users: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}],
	projects: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Project'
	}]
});

module.exports = model('Ticket', ticketSchema);
