const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const mongoConnection = require('./connection/mongoConnection')

app.use(express.json())
app.mongoConnection = mongoConnection

app.listen(PORT, ()=> {
    console.log(`Server is running at  port : ${PORT}`)
})