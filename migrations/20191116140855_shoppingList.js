exports.up = (knex, Promise) => {
  return knex.schema.createTable('shoppingList', table => {
    table.increments('id').primary()
    table.integer('numberOfItems')
    table.string('itemName')
    table.integer('itemId')
    table.integer('categoryId')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('shoppingList')
}
