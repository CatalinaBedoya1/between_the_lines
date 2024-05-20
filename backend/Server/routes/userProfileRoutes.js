const express = require('express');
const router = express.Router();
const pool = require('../db');
const userProfileController = require('../controllers/userProfileController');

// Get user profile by user ID
router.get('/:userId', userProfileController.getUserProfile);

// Update user profile
router.put('/:userId', userProfileController.updateUserProfile);

module.exports = router;
