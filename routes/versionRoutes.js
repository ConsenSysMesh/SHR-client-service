'use strict';
const express = require('express')
const config = require('../config/config');
const router = express.Router()

router.get('/', async (req, res) => {
  res.send(config.version)
})


module.exports = router;