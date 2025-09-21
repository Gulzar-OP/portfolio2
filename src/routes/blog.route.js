const blogController = require('../controllers/blog.controller.js');
const express = require('express');
const router = express.Router();

// Routes for blog operations
router.post('/create', blogController.createBlog);
router.get('/allBlogs', blogController.getAllBlogs);
router.get('/get/:id', blogController.getBlogById);
router.put('/update/:id', blogController.updateBlog);
router.delete('/delete/:id', blogController.deleteBlog); 

module.exports = router;

