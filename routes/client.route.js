const express = require('express');
const mongoose = require('mongoose');
const clientRoute = express.Router();

// Database models
const Client = require('../models/Client.model');
const User = require('../models/User.model');

clientRoute.get('/', (req, res, next) => {
	Client.find()
		.then(clientList => {
			res.json(clientList);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

clientRoute.get('/:clientId', (req, res, next) => {
	Client.findById(req.params.clientId)
		.then(client => {
			res.json(client);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

clientRoute.get('/findClientByUserId/:userId', (req, res, next) => {
	const { userId } = req.params;

	Client.find({ relatedToUser: userId })
		.then(client => {
			res.json(client);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

clientRoute.post('/create', (req, res, next) => {
	const { name, address } = req.body.newData;

	Client.create({
		name,
		address
	})
		.then(newClient => {
			res.json(newClient);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

clientRoute.put('/:clientId', (req, res, next) => {
	Client.findByIdAndUpdate(req.params.clientId, req.body.newData, { new: true })
		.then(data => {
			res.json(data);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

clientRoute.delete('/:clientId', (req, res, next) => {
	Client.findByIdAndRemove(req.params.clientId)
		.then(() => {
			res.json({
				message: `Client with the id ${req.params.clientId} is deleted successfully`
			});
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = clientRoute;
