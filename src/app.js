const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const blogRoutes = require('./routes/blog.route.js');
const projectRoutes = require('./routes/project.route.js');
const skillRoutes = require('./routes/skill.route.js');
const authRoutes = require('./routes/auth.route.js');
const sendRoutes = require('./routes/Send.js');

const ImageKit = require('imagekit');
const multer = require('multer');
const upload = multer();

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
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            return callback(new Error('CORS not allowed from: ' + origin), false);
        }
        return callback(null, true);
    },
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type","Authorization"],
    credentials: true
}));

// ImageKit config
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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
