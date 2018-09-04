'use strict';

class Client {
    constructor(id, name, clientId, primEmail, secEmail) {
        this.id = id;
        this.name = name;
        this.clientId = clientId;
        this.primEmail = primEmail;
        this.secEmail = secEmail;
    }
}

module.exports = Client;
