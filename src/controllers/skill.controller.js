const skillModel = require('../models/skill.model.js');

// ✅ Create Skill
exports.createSkill = async (req, res) => {
  try {
    const skill = new skillModel(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Get All Skills
exports.getAllSkills = async (req, res) => {
  try {
    const skills = await skillModel.find().sort({ createdAt: -1 });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Skill by ID
exports.getSkillById = async (req, res) => {
  try {
    const skill = await skillModel.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Skill
exports.updateSkill = async (req, res) => {
  try {
    const skill = await skillModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Delete Skill
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await skillModel.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
