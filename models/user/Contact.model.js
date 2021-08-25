const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Base = require('./Base.model');

const contactSchema = Base.discriminator(
	'Contact',
	new Schema({
		client: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Client'
		}
	})
);

module.exports = model('Contact');
