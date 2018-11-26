'use strict';

const express = require('express')

const Client = require('../model/client')

const router = express.Router()

router.get('/', async (req, res) => {
  const clients = await Client.query()
  res.json(clients)
})

router.get('/:id', async (req, res) => {
  const client = await Client.query().findById(req.params.id)
  res.json(client)
})

router.post('/', async (req, res) => {
  const newClient = req.body

  if (newClient.id > 0) {

    const client = await Client
                            .query()
                            .patch({name: newClient.name, primEmail: newClient.primEmail, secEmail: newClient.secEmail, clientId: newClient.clientId})
                            .where('id', newClient.id)
                            .returning('*')
                            .first();

    res.send(client)
  } else {

      
    const client = await Client
                          .query()
                          .allowInsert('[name, clientId]')
                          .insertGraph(newClient);
    res.send(hclient)
  }

})

router.delete('/:id', async (req, res) => {
  await Client.query().deleteById(req.params.id)

  res.redirect('/client')
})

module.exports = router
