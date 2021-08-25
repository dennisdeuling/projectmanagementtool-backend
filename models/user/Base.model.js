const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const baseOptions = {
	discriminatorKey: 'usertype',
	collection: 'user'
}

const baseSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
	created_at: {
		type: Date,
		default: Date.now,
		required: false
	}
}, baseOptions);

module.exports = model('Base', baseSchema);