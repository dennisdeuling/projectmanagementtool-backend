const express = require('express');
const mongoose = require('mongoose');
const projectRoute  = express.Router();

// Database models
const Project = require('../models/Project.model');

projectRoute.get('/', (req, res, next) => {
    Project.find()
        .then(projectList => {
            res.json(projectList);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

projectRoute.get('/:projectId', (req, res, next) => {
    Project.findById(req.params.projectId)
        .then(project => {
            res.json(project);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

projectRoute.post('/create', (req, res, next) => {
    const { title, description } = req.body;

    Project.create({
        title,
        description
    })
        .then(newProject => {
            res.json(newProject);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

projectRoute.put('/:projectId', (req, res, next) => {
    Project.findByIdAndUpdate(req.params.projectId, req.body)
        .then(() => {
            res.json({
                message: `Client with the id ${req.params.projectId} is updated successfully`
            });
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

projectRoute.delete('/:projectId', (req, res, next) => {
    Project.findByIdAndRemove(req.params.projectId)
        .then(() => {
            res.json({
                message: `Client with the id ${req.params.projectId} is deleted successfully`
            });
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = projectRoute;
