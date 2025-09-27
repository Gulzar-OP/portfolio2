const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  technologies: { type: [String], required: true }, // consistent name
  description: { type: String, required: true },
  livelink: { type: String },
  githublink: { type: String },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
