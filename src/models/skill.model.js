const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },

  // level as array of enum
  level: {
    type: [String],
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], // allowed values
    required: true
  },

  icon: { type: String }

}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
