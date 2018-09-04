'use strict';

const Router = require('express');
const clientRepo = require('../repo/clientRepository');

const getClientRoutes = (app) => {
    const router = new Router();

    router
        .get('/get/:id', (req, res) => {
            const id = parseInt(req.params.id);
            const result = clientRepo.getById(id);
            res.send(result);
        })
        .get('/all', (req, res) => {
            const result = clientRepo.getAll();
            res.send(result);
        })
        .get('/remove', (req, res) => {
            clientRepo.remove();
            const result = 'Last person remove. Total count: '
                + clientRepo.persons.size;
            res.send(result);
        })
        .post('/save', (req, res) => {
            const client = req.body;
            const result = clientRepo.save(client);
            res.send(result);
        });

    app.use('/client', router);
};

module.exports = getClientRoutes;
