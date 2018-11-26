const express = require('express')
const cors = require('cors')
const parser = require('body-parser')
const version = require('./routes/versionRoutes')
const client = require('./routes/hotelRoutes')

require('dotenv').config()

const app = express()

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use(cors())
app.use('/hotel', client)
app.use('/version', version)

app.listen('3001', () => {
  console.log('Server is up!')
})
