const express = require('express');
const checkToken = require('../middleWare/checkToken');
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();

router.post('/', checkToken, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', checkToken, updatePost);
router.delete('/:id', checkToken, deletePost);

module.exports = router;