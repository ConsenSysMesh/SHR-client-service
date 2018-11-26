'use strict';

const express = require('express')

const Hotel = require('../model/hotel')

const router = express.Router()

router.get('/', async (req, res) => {
  const hotels = await Hotel.query()
  res.json(hotels)
})

router.get('/:id', async (req, res) => {
  const hotel = await Hotel.query().findById(req.params.id)
  res.json(hotel)
})

router.post('/', async (req, res) => {
  const newHotel = req.body

  if (newHotel.id > 0) {

    const hotel = await Hotel
                            .query()
                            .patch({name: newClient.name, primEmail: newClient.primEmail, secEmail: newClient.secEmail, clientId: newClient.clientId})
                            .where('id', newClient.id)
                            .returning('*')
                            .first();

    res.send(hotel)
  } else {

      
    const hotel = await Hotel
                          .query()
                          .allowInsert('[name, clientId]')
                          .insertGraph(newHotel);
    res.send(hotel)
  }

})

router.delete('/:id', async (req, res) => {
  await Hotel.query().deleteById(req.params.id)

  res.redirect('/hotel')
})

module.exports = router
