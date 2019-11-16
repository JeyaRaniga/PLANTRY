exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('userName').unique()
    table.string('password').notNullable()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
