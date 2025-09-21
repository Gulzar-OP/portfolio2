const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware.js');
const authController = require('../controllers/auth.controller.js');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/profile', authMiddleware, authController.getProfile);
router.post('/logout', authMiddleware, authController.logoutUser);

module.exports = router;
