
exports.up = function (knex, Promise) {
    return Promise.all([
      knex.schema.createTable('client', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('clientId')
        table.string('primEmail')
        table.string('secEmail')
      })
    ])
  }
  
  exports.down = function (knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('client')
    ])
  }
