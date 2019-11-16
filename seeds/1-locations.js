exports.seed = (knex) => {
  return knex('locations').del()
    .then(() => {
      return knex('locations').insert([
        { id: 1, locationName: 'pantry' },
        { id: 2, locationName: 'freezer' },
        { id: 3, locationName: 'fridge' }
      ])
    })
}
