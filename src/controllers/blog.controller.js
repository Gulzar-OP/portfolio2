
const Blog = require('../models/blog.model.js');

// Create a new blog post
async function createBlog(req, res) {
    try {
        const { title, content, image } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }
        
        const newBlog = new Blog({ title, content, image });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

// Get all blog posts
async function getAllBlogs(req, res) {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

// Get a single blog post by ID
async function getBlogById(req, res) {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {        
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

// Update a blog post by ID
async function updateBlog(req, res) {
    try {
        const { title, content, image } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, content, image },
            { new: true }
        );
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

// Delete a blog post by ID
async function deleteBlog(req, res) {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
};