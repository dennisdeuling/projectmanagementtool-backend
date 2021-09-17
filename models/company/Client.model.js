const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Base = require('./Base.model');

const clientSchema = Base.discriminator(
	'Client',
	new Schema({
	})
);

module.exports = model('Client');
