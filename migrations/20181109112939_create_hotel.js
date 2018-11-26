
exports.up = function (knex, Promise) {
    return Promise.all([
      knex.schema.createTable('hotel', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('address')
        table.string('chain')
        table.string('gdscode1')
        table.string('gdscode2')
        table.string('gdscode3')
        table.string('gdscode4')
        table.string('gdscode5')
      })
    ])
  }
  
  exports.down = function (knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('hotel')
    ])
  }
