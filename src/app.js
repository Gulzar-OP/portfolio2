const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Import routes
const blogRoutes = require('./routes/blog.route.js');
const projectRoutes = require('./routes/project.route.js');
const skillRoutes = require('./routes/skill.route.js');
const authRoutes = require('./routes/auth.route.js');
const sendRoutes = require('./routes/Send.js');

const app = express();

// Middleware
app.use(cors({
    origin: ["http://localhost:5173","https://portfolio2-jade-tau.vercel.app"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Test route
app.get("/", (req, res) => res.send("Hello World"));

// API routes
app.use('/api/blogs', blogRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', sendRoutes);

module.exports = app;
