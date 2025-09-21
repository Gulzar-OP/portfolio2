const projectModel = require('../models/project.model.js');

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const project = new projectModel(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        
        const projects = await projectModel.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a project by ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await projectModel.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json                
(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  
// Update a project by ID
exports.updateProject = async (req, res) => {
    try {
        const project = await projectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
    try {
        const project = await projectModel.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

