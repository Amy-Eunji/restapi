const express = require('express')
const { clearCookie } = require('express/lib/response')

const server = express()

const users = [
  {
    id: '1',
    name: 'COCO',
    email: 'coco_hi@gmail.com',
  },
  {
    id: '2',
    name: 'CocoMoM',
    email: 'cocomom_hi@gmail.com',
  },
]

server.get('/api/user', (req, res) => {
  res.json(users)
})

server.listen(3001, () => {
  console.log('the sever is running')
})
