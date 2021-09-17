const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const baseOptions = {
	discriminatorKey: 'companyType',
	collection: 'company'
}

const baseSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	address: {
		street: {
			type: String,
			required: false
		},
		zip: {
			type: String,
			required: false
		},
		city: {
			type: String,
			required: false
		}
	},
	relatedToUser: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	created_at: {
		type: Date,
		default: Date.now,
		required: false
	},
}, baseOptions);

module.exports = model('Base', baseSchema);