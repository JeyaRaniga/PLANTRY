const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getShoppingList
}

function getShoppingList (db = connection) {
  return db('shoppingList')
    .join('categories', 'shoppingList.categoryId', '=', 'categories.id')
    .select('shoppingList.id', 'shoppingList.itemName', 'shoppingList.numberOfItems', 'categories.categoryName')
}
