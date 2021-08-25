const mongoose = require('mongoose');
const database = require('../configs/database.config');
const User = require('../models/User.model');
const timeStamp = require('../models/functions/timeStamp');

const users = [
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc77'),
		name: 'Dennis Deuling',
		email: 'dennis@dennis.de',
		passwordHashed: '1234',
		position: 'admin',
		projectmanagers: [
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc77'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc79')
		],
		clients: [
			mongoose.Types.ObjectId('60df65617d58c6c09bdb664b'),
			mongoose.Types.ObjectId('60df65617d58c6c09bdb664c'),
			mongoose.Types.ObjectId('60df65617d58c6c09bdb664d')
		],
		projects: [
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f7'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f8'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f9')
		],
		tickets: [
			mongoose.Types.ObjectId('60df6acb56a961c21035c7ff'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c800'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c801')
		],
		created_ad: timeStamp()
	},
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
		name: 'John Doe',
		email: 'john.doe@example.com',
		passwordHashed: '1234',
		position: 'projectmanager',
		clients: [
			mongoose.Types.ObjectId('60df65617d58c6c09bdb664b'),
			mongoose.Types.ObjectId('60df65617d58c6c09bdb664c'),
			mongoose.Types.ObjectId('60df65617d58c6c09bdb664d')
		],
		projects: [
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f7'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f8'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f9')
		],
		tickets: [
			mongoose.Types.ObjectId('60df6acb56a961c21035c7ff'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c800'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c801')
		],
		created_ad: timeStamp()
	},
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc79'),
		name: 'Max Mustermann',
		email: 'max.mustermann@example.com',
		passwordHashed: '1234',
		position: 'projectmanager',
		clients: [
			mongoose.Types.ObjectId('60df65617d58c6c09bdb664b'),
			mongoose.Types.ObjectId('60df65617d58c6c09bdb664c'),
			mongoose.Types.ObjectId('60df65617d58c6c09bdb664d')
		],
		projects: [
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f7'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f8'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f9')
		],
		tickets: [
			mongoose.Types.ObjectId('60df6acb56a961c21035c7ff'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c800'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c801')
		],
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
