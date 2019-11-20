exports.seed = (knex) => {
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        { id: 1, onHand: 2, itemName: 'rice', itemDescription: 'description 1', itemExpiry: Date.now(), categoryId: 1, locationId: 1 },
        { id: 2, onHand: 2, itemName: 'white flour', itemDescription: 'description 2', itemExpiry: Date.now(), categoryId: 1, locationId: 1 },
        { id: 3, onHand: 2, itemName: 'sugar', itemDescription: 'description 3', itemExpiry: Date.now(), categoryId: 1, locationId: 1 }
      ])
    })
}
