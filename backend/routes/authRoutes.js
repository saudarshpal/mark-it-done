const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');

// Register a new user
router.post('/signup', authController.register);

// Login a user
router.post('/signin', authController.login);

module.exports = router;