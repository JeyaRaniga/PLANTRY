const router = require('express').Router()
const request = require('superagent')

const db = require('../DB/db')

router.get('/shoppingList', (req, res) => {
  db.getShoppingList()
    .then(list => {
      console.log(list)
      res.json(list)
    })
})

module.exports = router
