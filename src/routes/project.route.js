const express = require('express');
const projectController = require('../controllers/project.controller.js');
const router = express.Router();

// Routes for project operations
router.post('/create', projectController.createProject);
router.get('/allProjects', projectController.getAllProjects);
router.get('/get/:id', projectController.getProjectById);
router.put('/update/:id', projectController.updateProject);
router.delete('/delete/:id', projectController.deleteProject);

module.exports = router;