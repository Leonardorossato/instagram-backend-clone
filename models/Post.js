const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    author: String,
    place : String,
    description: String,
    hashtags: String,
    images: String,
    likes: {
        type: Number,
        default: 0
    },
}, {timestamps : true,})

const Post = mongoose.model('post', postSchema)
module.exports = Post