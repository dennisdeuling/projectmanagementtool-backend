const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clientSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	address: {
		streetAndHousenr: {
			type: String,
			required: false
		},
		zipCode: {
			type: String,
			required: false
		},
		city: {
			type: String,
			required: false
		}
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

module.exports = model('Client', clientSchema);
