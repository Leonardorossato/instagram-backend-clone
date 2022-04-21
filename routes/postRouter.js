const express = require('express');
const multer = require('multer');
const upload = multer()
const PostController = require('../controllers/postController');
const router = express.Router()

router.get('/post', upload.single('image'),PostController.getAllPosts)
router.post('/create', PostController.createPost)

module.exports = router;