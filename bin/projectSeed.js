const mongoose = require('mongoose');
const database = require('../configs/database.config');
const Project = require('../models/Project.model');
const timeStamp = require('../models/functions/timeStamp');

const projects = [
	{
		_id: mongoose.Types.ObjectId('60df66f02f1f51c10ce225f7'),
		title: 'A new project for this client',
		description:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.',
		relatedToUser: mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
		created_ad: timeStamp(),
		client: mongoose.Types.ObjectId('60df65617d58c6c09bdb664b'),
		users: [
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc77'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc79')
		],
		tickets: [
			mongoose.Types.ObjectId('60df6acb56a961c21035c7ff'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c800'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c801')
		]
	},
	{
		_id: mongoose.Types.ObjectId('60df66f02f1f51c10ce225f8'),
		title: 'This is a project for a client',
		description:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.',
		relatedToUser: mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
		created_ad: timeStamp(),
		client: mongoose.Types.ObjectId('60df65617d58c6c09bdb664c'),
		users: [
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc77'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc79')
		],
		tickets: [
			mongoose.Types.ObjectId('60df6acb56a961c21035c7ff'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c800'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c801')
		]
	},
	{
		_id: mongoose.Types.ObjectId('60df66f02f1f51c10ce225f9'),
		title: 'This is another project for a client',
		description:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.',
		relatedToUser: mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
		created_ad: timeStamp(),
		client: mongoose.Types.ObjectId('60df65617d58c6c09bdb664d'),
		users: [
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc77'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc78'),
			mongoose.Types.ObjectId('60df628c8a8131bf8704bc79')
		],
		tickets: [
			mongoose.Types.ObjectId('60df6acb56a961c21035c7ff'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c800'),
			mongoose.Types.ObjectId('60df6acb56a961c21035c801')
		]
	}
];

Project.create(projects)
	.then(projectsFromDB => {
		console.log(`Created: ${projects.length} projects`);
		mongoose.connection.close();
	})
	.catch(error => {
		console.log(`Oh my gosh we have an error: ${error}`);
	});
