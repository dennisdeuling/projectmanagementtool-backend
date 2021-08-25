const mongoose = require('mongoose');
const database = require('../configs/database.config');
const Ticket = require('../models/Ticket.model');
const timeStamp = require('../models/functions/timeStamp');

const tickets = [
	{
		_id: mongoose.Types.ObjectId('60df6acb56a961c21035c7ff'),
		title: 'Please do this or that',
		description:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.',
		hours: 5,
		minutes: 45,
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
		_id: mongoose.Types.ObjectId('60df6acb56a961c21035c800'),
		title: 'Please do another thing',
		description:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.',
		hours: 3,
		minutes: 15,
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
		_id: mongoose.Types.ObjectId('60df6acb56a961c21035c801'),
		title: 'Can you do this again please',
		description:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.',
		hours: 8,
		minutes: 0,
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

Ticket.create(tickets)
	.then(ticketsFromDB => {
		console.log(`Created: ${tickets.length} tickets`);
		mongoose.connection.close();
	})
	.catch(error => {
		console.log(`Oh my gosh we have an error: ${error}`);
	});
