const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const mongoConnection = require('./connection/mongoConnection')
const postRouter = require('./routes/postRouter')

app.use(express.json())
app.mongoConnection = mongoConnection

app.use('/api/posts', postRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running at  port : ${PORT}`)
})