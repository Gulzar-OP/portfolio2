const express = require('express');
const router = express.Router();
const skillController= require('../controllers/skill.controller.js');

// Routes for skill operations
router.post('/create', skillController.createSkill);
router.get('/allSkills', skillController.getAllSkills);
router.get('/get/:id', skillController.getSkillById);
router.put('/update/:id', skillController.updateSkill);
router.delete('/delete/:id', skillController.deleteSkill);

module.exports = router;
