exports.up = (knex, Promise) => {
  return knex.schema.createTable('locations', table => {
    table.increments('id').primary()
    table.string('locationName')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('locations')
}
