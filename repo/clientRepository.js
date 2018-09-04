'use strict';

const Client = require('../model/client');

class ClientRepository {
    constructor() {
        this.clients = new Map([
            [1, new Client(1, 'Client 1', 'CL1', 'email1@email.na', 'email1@email.na')],
            [2, new Client(2, 'Client 2', 'CL2', 'email2@email.na', 'email2@email.na')],
            [3, new Client(3, 'Client 3', 'CL3', 'email3@email.na', 'email3@email.na')],
            [4, new Client(4, 'Client 4', 'CL4', 'email4@email.na', 'email4@email.na')]
        ]);
    }

    getById(id) {
        return this.clients.get(id);
    }

    getAll() {
        return Array.from(this.clients.values());
    }

    remove() {
        const keys = Array.from(this.clients.keys());
        this.clients.delete(keys[keys.length - 1]);
    }

    save(client) {
        if (this.getById(client.id) !== undefined) {
            this.clients[client.id] = client;
            return 'Updated Client with id=' + client.id;
        }
        else {
            this.clients.set(client.id, client);
            return 'Added Client with id=' + client.id;
        }
    }
}

const clientRepository = new ClientRepository();

module.exports = clientRepository;
