// app.js
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import routes
import blogRoutes from './routes/blog.route.js';
import projectRoutes from './routes/project.route.js';
import skillRoutes from './routes/skill.route.js';
import authRoutes from './routes/auth.route.js';
import sendRoutes from './routes/Send.js';

const app = express();

// -------- MIDDLEWARES --------

// CORS setup
app.use(cors({
    origin: [
        "http://localhost:5173",                 // for local frontend dev
        "https://portfolio-gulzar.netlify.app"  // production frontend
    ],
    credentials: true // if you want to send cookies/tokens
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// -------- TEST ROUTE --------
app.get("/", (req, res) => res.send("Hello World"));

// -------- API ROUTES --------
app.use('/api/blogs', blogRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', sendRoutes);

// -------- ERROR HANDLING --------
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

export default app;
