const mongoose = require('mongoose');
const database = require('../configs/database.config');
const Client = require('../models/Client.model');
const timeStamp = require('../models/functions/timeStamp');

const clients = [
	{
		_id: mongoose.Types.ObjectId('60df65617d58c6c09bdb664b'),
		name: 'Company XYZ',
		address: {
			streetAndHousenr: 'ExampleStreet 4',
			zipCode: '12345',
			city: 'Berlin'
		},
		relatedToUser: mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
		created_ad: timeStamp(),
		users: [
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc77'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc79')
		],
		projects: [
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f7'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f8'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f9')
		]
	},
	{
		_id: mongoose.Types.ObjectId('60df65617d58c6c09bdb664c'),
		name: 'Company Example',
		address: {
			streetAndHousenr: 'NewStreet 4',
			zipCode: '12345',
			city: 'Berlin'
		},
		relatedToUser: mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
		created_ad: timeStamp(),
		users: [
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc77'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc79')
		],
		projects: [
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f7'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f8'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f9')
		]
	},
	{
		_id: mongoose.Types.ObjectId('60df65617d58c6c09bdb664d'),
		name: 'New Company',
		address: {
			streetAndHousenr: 'BerlinStreet 4',
			zipCode: '12345',
			city: 'Berlin'
		},
		relatedToUser: mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
		created_ad: timeStamp(),
		users: [
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc77'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc79')
		],
		projects: [
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f7'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f8'),
			mongoose.Types.ObjectId('60df66f02f1f51c10ce225f9')
		]
	}
];

Client.create(clients)
	.then(clientsFromDB => {
		console.log(`Created: ${clients.length} clients`);
		mongoose.connection.close();
	})
	.catch(error => {
		console.log(`Oh my gosh we have an error: ${error}`);
	});
