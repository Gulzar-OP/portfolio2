const mongoose = require('mongoose');

// const projectSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     link: { type: String },
//     image: { type: String }
// }, { timestamps: true });

// const Project = mongoose.model('Project', projectSchema);

// module.exports = Project;

// import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    technology: { type: [String], required: true },
    description: { type: String, required: true },
    tech: { type: [String], required: true },
    livelink: { type: String },
    githublink: { type: String },
    image: { type: String }
}, { timestamps: true });

// export default mongoose.model("Project", projectSchema);

module.exports = mongoose.model('Project', projectSchema);