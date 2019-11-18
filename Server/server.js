const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()
const router = require('./Routes/routes')

server.use(express.static(path.join(__dirname, '../Public')))
server.use(express.json())
server.use(cors())

server.use('api/v1/', router)

module.exports = server