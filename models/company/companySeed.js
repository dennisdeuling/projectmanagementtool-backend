const mongoose = require('mongoose');
const database = require('../../configs/database.config');
const MyCompany = require('./MyCompany.model');
const Client = require('./Client.model');

const myCompany = [
	{
		_id: mongoose.Types.ObjectId('60df65617d58c6c09bdb6640'),
		name: 'My Company',
		address: {
			street: 'Example Street',
			zip: '12345',
			city: 'Future City'
		}
	}
];

const clients = [
	{
		_id: mongoose.Types.ObjectId('60df65617d58c6c09bdb6641'),
		name: 'My Company',
		address: {
			street: 'Example Street',
			zip: '12345',
			city: 'Future City'
		}
	},
	{
		_id: mongoose.Types.ObjectId('60df65617d58c6c09bdb6642'),
		name: 'My Company',
		address: {
			street: 'Example Street',
			zip: '12345',
			city: 'Future City'
		}
	},
	{
		_id: mongoose.Types.ObjectId('60df65617d58c6c09bdb6643'),
		name: 'My Company',
		address: {
			street: 'Example Street',
			zip: '12345',
			city: 'Future City'
		}
	}
];

MyCompany.create(myCompany)
	.then(companyFromDB => {
		console.log(companyFromDB);
		mongoose.connection.close();
	})
	.catch(error => {
		console.log(`Oh my gosh we have an error: ${error}`);
	});

Client.create(clients)
	.then(clientsFromDB => {
		console.log(clientsFromDB);
		mongoose.connection.close();
	})
	.catch(error => {
		console.log(`Oh my gosh we have an error: ${error}`);
	});
