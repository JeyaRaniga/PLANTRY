import request from 'superagent'

export const getShoppingList = () => {
  return request.get('http://localhost:3000/api/v1/shoppingList')
}
