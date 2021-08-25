const mongoose = require('mongoose');
const database = require('../../configs/database.config');
const Admin = require('./Admin.model');
const Projectmanager = require('./Projectmanager.model');
const Contact = require('./Contact.model');

const admins = [
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc80'),
		name: 'John Doe',
		email: 'dennis.deuling@example.com',
		passwordHashed: '0000'
	},
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc81'),
		name: 'John Doe',
		email: 'dennis@example.com',
		passwordHashed: '0000'
	},
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc82'),
		name: 'John Doe',
		email: 'deuling@example.com',
		passwordHashed: '0000'
	}
];

const projectmanagers = [
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc83'),
		name: 'John Doe',
		email: 'dennis.deuling@example.com',
		passwordHashed: '0000',
		specialized: ['Tracking', 'SEO', 'SEA', 'Social Media']
	},
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc84'),
		name: 'John Doe',
		email: 'dennis@example.com',
		passwordHashed: '0000',
		specialized: ['Tracking', 'SEO', 'SEA', 'Social Media']
	},
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc85'),
		name: 'John Doe',
		email: 'deuling@example.com',
		passwordHashed: '0000',
		specialized: ['Tracking', 'SEO', 'SEA', 'Social Media']
	}
];

const contacts = [
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc86'),
		name: 'Max Mustermann',
		email: 'max.mustermann@example.com',
		client: mongoose.Types.ObjectId('60df65617d58c6c09bdb664d')
	},
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc87'),
		name: 'John Doe',
		email: 'john.doe@example.com',
		client: mongoose.Types.ObjectId('60df65617d58c6c09bdb664d')
	},
	{
		_id: mongoose.Types.ObjectId('60df628c8a8131bf8704bc88'),
		name: 'Dennis Deuling',
		email: 'dennis.deuling@example.com',
		client: mongoose.Types.ObjectId('60df65617d58c6c09bdb664d')
	}
];

Admin.create(admins)
	.then(usersFromDB => {
		console.log(usersFromDB);
		mongoose.connection.close();
	})
	.catch(error => {
		console.log(`Oh my gosh we have an error: ${error}`);
	});

Projectmanager.create(projectmanagers)
	.then(usersFromDB => {
		console.log(usersFromDB);
		mongoose.connection.close();
	})
	.catch(error => {
		console.log(`Oh my gosh we have an error: ${error}`);
	});

Contact.create(contacts)
	.then(usersFromDB => {
		console.log(usersFromDB);
		mongoose.connection.close();
	})
	.catch(error => {
		console.log(`Oh my gosh we have an error: ${error}`);
	});
