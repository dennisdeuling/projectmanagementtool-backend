const mongoose = require('mongoose');
const database = require('../configs/database.config');
const User = require('../models/User.model');
const timeStamp = require('../models/functions/timeStamp');

const users = [
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc77'),
		name: 'Dennis Deuling',
		email: 'dennis@dennis.de',
		password: '1234',
		position: 'admin',
		created_ad: timeStamp()
	},
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
		name: 'Dennis Deuling',
		email: 'dennis@dennis.de',
		password: '1234',
		position: 'projectmanager',
		created_ad: timeStamp()
	},
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc79'),
		name: 'Dennis Deuling',
		email: 'dennis@dennis.de',
		password: '1234',
		position: 'client',
		created_ad: timeStamp()
	}
];

User.create(users)
	.then((usersFromDB) => {
		console.log(`Created: ${users.length} users`);
		mongoose.connection.close();
	})
	.catch((error) => {
		console.log(`Oh my gosh we have an error: ${error}`);
	});
