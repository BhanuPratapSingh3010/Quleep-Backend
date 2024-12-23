const Post = require('../models/Post');

createPost = async (req, res) => {
    try {
      const { title, content } = req.body;
      const post = await Post.create({ title, content, author: req.user.id });
      res.status(201).json({msg:"post created successfully", post,success:true});
    } catch (err) {
      res.status(400).json({ message: 'Error creating post', error: err.message });
    }
  };
  
  getPosts = async (req, res) => {
    try {
      const posts = await Post.find().populate('author', 'name email profilePicture');
      res.json(posts);
    } catch (err) {
      res.status(400).json({ message: 'Error fetching posts', error: err.message });
    }
  };
  
  getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('author', 'name email profilePicture');
      if (!post) return res.status(404).json({ message: 'Post not found' });
      res.json(post);
    } catch (err) {
      res.status(400).json({ message: 'Error fetching post', error: err.message });
    }
  };
  
 updatePost = async (req, res) => {
    try {
      const { title, content } = req.body;
      const post = await Post.findOneAndUpdate(
        { _id: req.params.id, author: req.user.id },
        { title, content },
        { new: true }
      );
      if (!post) return res.status(403).json({ message: 'Unauthorized or Post not found' });
      res.json(post);
    } catch (err) {
      res.status(400).json({ message: 'Error updating post', error: err.message });
    }
  };
  
  deletePost = async (req, res) => {
    try {
      const post = await Post.findOneAndDelete({ _id: req.params.id, author: req.user.id });
      if (!post) return res.status(403).json({ message: 'Unauthorized or Post not found' });
      res.json({ message: 'Post deleted' });
    } catch (err) {
      res.status(400).json({ message: 'Error deleting post', error: err.message });
    }
  };

  module.exports = { 
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
   };