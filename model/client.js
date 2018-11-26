const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

class Client extends Model {
    static get tableName () {
      return 'client'
    }
}

module.exports = Client