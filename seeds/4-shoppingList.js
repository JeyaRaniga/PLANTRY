exports.seed = (knex) => {
  return knex('shoppingList').del()
    .then(() => {
      return knex('shoppingList').insert([
        { id: 1, itemName: 'item1', numberOfItems: 3, itemId: 1, categoryId: 1 },
        { id: 2, itemName: 'item2', numberOfItems: 3, itemId: 2, categoryId: 1 },
        { id: 3, itemName: 'item3', numberOfItems: 3, itemId: 3, categoryId: 1 }
      ])
    })
}
