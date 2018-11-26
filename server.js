const express = require('express')
const cors = require('cors')
const parser = require('body-parser')
const version = require('./routes/versionRoutes')
const client = require('./routes/clientRoutes')

require('dotenv').config()

const app = express()

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use(cors())
app.use('/client', client)
app.use('/version', version)

app.listen('3000', () => {
  console.log('Server is up!')
})
