const express = require('express');
const mongoose = require('mongoose');
const ticketRoute  = express.Router();

const Ticket = require('../models/Ticket.model');

// Database models
ticketRoute.get('/', (req, res, next) => {
    Ticket.find()
        .then(ticketList => {
            res.json(ticketList);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

ticketRoute.get('/:ticketId', (req, res, next) => {
    Ticket.findById(req.params.ticketId)
        .then(ticket => {
            res.json(ticket);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

ticketRoute.post('/create', (req, res, next) => {
    const { title, description } = req.body;

    Ticket.create({
        title,
        description
    })
        .then(newTicket => {
            res.json(newTicket);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

ticketRoute.put('/:ticketId', (req, res, next) => {
    Ticket.findByIdAndUpdate(req.params.ticketId, req.body)
        .then(() => {
            res.json({
                message: `Client with the id ${req.params.ticketId} is updated successfully`
            });
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

ticketRoute.delete('/:ticketId', (req, res, next) => {
    Ticket.findByIdAndRemove(req.params.ticketId)
        .then(() => {
            res.json({
                message: `Client with the id ${req.params.ticketId} is deleted successfully`
            });
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = ticketRoute;
