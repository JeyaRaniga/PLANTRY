exports.seed = (knex) => {
  return knex('categories').del()
    .then(() => {
      return knex('categories').insert([
        { id: 1, categoryName: 'biscuits & crackers' },
        { id: 2, categoryName: 'fruits & vegetables' },
        { id: 3, categoryName: 'meat & deli' }
      ])
    })
}
