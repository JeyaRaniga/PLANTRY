exports.seed = (knex) => {
  return knex('shoppingList').del()
    .then(() => {
      return knex('shoppingList').insert([
        { id: 1, itemName: 'oreo cookies', numberOfItems: 3, itemId: 1, categoryId: 1 },
        { id: 2, itemName: 'baby spinach', numberOfItems: 3, itemId: 2, categoryId: 2 },
        { id: 3, itemName: 'olives', numberOfItems: 3, itemId: 3, categoryId: 3 }
      ])
    })
}
