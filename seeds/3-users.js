exports.seed = (knex) => {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, userName: 'listlover', password: 'password1', firstName: 'nqme1', lastName: 'lastName1' },
        { id: 2, userName: 'homemaker', password: 'password2', firstName: 'name2', lastName: 'lastName2' },
        { id: 3, userName: 'foodlover', password: 'password3', firstName: 'name3', lastName: 'lastName3' }
      ])
    })
}
