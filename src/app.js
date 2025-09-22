const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const blogRoutes = require('./routes/blog.route.js');
const projectRoutes = require('./routes/project.route.js');
const skillRoutes = require('./routes/skill.route.js');
const authRoutes = require('./routes/auth.route.js');
const sendRoutes = require('./routes/Send.js');

const app = express();

// Correct allowed origins including localhost and production frontend
const allowedOrigins = [
    "http://localhost:5173",
    "https://portfolio-pink-psi-66.vercel.app"
    // Add other production frontend URLs if needed
];

// Improved CORS middleware for development + production
app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true); // Allow Postman/no-origin
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = 'CORS policy does not allow access from origin: ' + origin;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("Hello World"));

app.use('/api/blogs', blogRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', sendRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

module.exports = app;
