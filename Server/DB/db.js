const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getShoppingList
}

function getShoppingList (db = connection) {
  db('ShoppingList')
    .select()
}
