const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/profile', authenticateToken, userController.getProfile);
router.put('/profile', authenticateToken, userController.updateProfile);
router.post('/profile/image', authenticateToken, userController.uploadProfileImage);
router.get('/alluser', userController.getusers);
module.exports = router;