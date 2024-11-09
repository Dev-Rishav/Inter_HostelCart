const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/add', authenticateToken, cartController.addItemToCart);

module.exports = router;