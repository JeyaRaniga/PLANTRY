exports.up = (knex, Promise) => {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary()
    table.integer('onHand')
    table.string('itemName')
    table.string('itemDescription')
    table.date('itemExpiry').defaultsTo(Date.now() + parseInt(21))
    table.integer('categoryId')
    table.integer('locationId')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('items')
}
